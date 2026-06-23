import express from "express";
import multer from "multer";

import {
  summarizeNotes,
} from "../controllers/summaryController.js";

import Summary from "../models/Summary.js";

const router = express.Router();

/* Multer Storage */
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({
  storage,
});

/* Upload + Summarize */
router.post(
  "/upload",
  upload.single("file"),
  summarizeNotes
);

/* Summary History */
router.get("/history", async (req, res) => {
  try {

    const summaries = await Summary.find()
      .sort({ createdAt: -1 });

    res.json(summaries);

  } catch (error) {

    res.status(500).json({
      message: "Failed to fetch history",
    });
  }
});

export default router;