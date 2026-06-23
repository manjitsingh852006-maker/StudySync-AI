const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash",
});

const chatWithAI = async (req, res) => {
  try {
    const { message } = req.body;

    const result = await model.generateContent(
      message
    );

    const response = result.response.text();

    res.json({
      reply: response,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  chatWithAI,
};