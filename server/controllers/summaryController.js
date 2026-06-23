import fs from "fs";
import pdfParse from "pdf-parse";
import mammoth from "mammoth";

import { GoogleGenerativeAI } from "@google/generative-ai";

import Summary from "../models/Summary.js";

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

export const summarizeNotes = async (req, res) => {
  try {

    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    const filePath = req.file.path;

    let extractedText = "";

    /* PDF */
    if (req.file.mimetype === "application/pdf") {

      const dataBuffer = fs.readFileSync(filePath);

      const pdfData = await pdfParse(dataBuffer);

      extractedText = pdfData.text;
    }

    /* DOCX */
    else if (
      req.file.mimetype ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {

      const result = await mammoth.extractRawText({
        path: filePath,
      });

      extractedText = result.value;
    }

    /* TXT */
    else if (req.file.mimetype === "text/plain") {

      extractedText = fs.readFileSync(
        filePath,
        "utf8"
      );
    }

    else {
      return res.status(400).json({
        success: false,
        message: "Unsupported file type",
      });
    }

    /* Prevent Empty File */
    if (!extractedText.trim()) {
      return res.status(400).json({
        success: false,
        message: "No text found in file",
      });
    }

    /* Gemini AI */
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const prompt = `
    Summarize these study notes clearly in easy language:

    ${extractedText}
    `;

    const result = await model.generateContent(
      prompt
    );

    const response = result.response;

    const summary = response.text();

    /* Save To MongoDB */
    await Summary.create({
      fileName: req.file.originalname,
      summary,
    });

    res.status(200).json({
      success: true,
      summary,
    });

  } catch (error) {

    console.log("SUMMARY ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Summary generation failed",
      error: error.message,
    });
  }
};