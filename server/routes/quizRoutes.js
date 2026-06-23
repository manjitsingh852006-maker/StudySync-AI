import express from "express";

const router = express.Router();

router.post("/generate", async (req, res) => {

  try {

    const { topic, difficulty } = req.body;

    const sampleQuiz = [
      {
        question: `What is ${topic}?`,
        options: [
          "Programming Language",
          "Database",
          "Concept in Computer Science",
          "Operating System"
        ],
        answer: "Concept in Computer Science",
      },

      {
        question: `${topic} is mainly used for?`,
        options: [
          "Cooking",
          "Problem Solving",
          "Gaming",
          "Video Editing"
        ],
        answer: "Problem Solving",
      },

      {
        question: `Difficulty selected is?`,
        options: [
          "Easy",
          "Medium",
          "Hard",
          difficulty
        ],
        answer: difficulty,
      },
    ];

    res.json({
      success: true,
      quiz: sampleQuiz,
    });

  } catch (error) {

    console.log(error);

    res.status(500).json({
      success: false,
      message: "Quiz generation failed",
    });
  }

});

export default router;