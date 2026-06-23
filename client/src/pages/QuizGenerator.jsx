import { useState } from "react";
import { Link } from "react-router-dom";

export default function QuizGenerator() {

  const [topic, setTopic] = useState("");

  const [difficulty, setDifficulty] =
    useState("Easy");

  const [quiz, setQuiz] = useState([]);

  const [score, setScore] = useState(0);

  const [submitted, setSubmitted] =
    useState(false);

  const generateQuiz = async () => {

    if (!topic) {
      alert("Enter a topic");
      return;
    }

    try {

      const response = await fetch(
        "http://localhost:5000/api/quiz/generate",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            topic,
            difficulty,
          }),
        }
      );

      const data = await response.json();

      setQuiz(data.quiz);

      setScore(0);

      setSubmitted(false);

    } catch (error) {

      console.log(error);

      alert("Quiz generation failed");
    }
  };

  const checkAnswer = (selected, correct) => {

    if (submitted) return;

    if (selected === correct) {
      setScore((prev) => prev + 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-zinc-800">

        <div>

          <h1 className="text-3xl font-bold">
            StudySync AI
          </h1>

          <p className="text-zinc-400 mt-1">
            AI Quiz Generator
          </p>

        </div>

        <Link
          to="/dashboard"
          className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Dashboard
        </Link>

      </div>

      {/* Main */}
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Hero */}
        <div className="mb-14">

          <h2 className="text-6xl font-bold mb-6">
            Generate AI Quizzes
          </h2>

          <p className="text-zinc-400 text-xl">
            Practice concepts using AI-powered quizzes.
          </p>

        </div>

        {/* Generator */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-12">

          <h3 className="text-3xl font-bold mb-8">
            Create Quiz
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <input
              type="text"
              placeholder="Enter topic (DSA, AI...)"
              value={topic}
              onChange={(e) =>
                setTopic(e.target.value)
              }
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <select
              value={difficulty}
              onChange={(e) =>
                setDifficulty(e.target.value)
              }
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            >
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <button
              onClick={generateQuiz}
              className="bg-white text-black rounded-2xl font-bold hover:scale-105 transition"
            >
              Generate Quiz
            </button>

          </div>

        </div>

        {/* Score */}
        {quiz.length > 0 && (

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 mb-10">

            <h3 className="text-3xl font-bold">
              Score: {score}/{quiz.length}
            </h3>

          </div>

        )}

        {/* Questions */}
        <div className="space-y-8">

          {quiz.map((q, index) => (

            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold mb-8">
                {index + 1}. {q.question}
              </h3>

              <div className="grid gap-4">

                {q.options.map((option, i) => (

                  <button
                    key={i}
                    onClick={() =>
                      checkAnswer(
                        option,
                        q.answer
                      )
                    }
                    className="bg-zinc-800 hover:bg-white hover:text-black transition text-left px-6 py-4 rounded-2xl"
                  >
                    {option}
                  </button>

                ))}

              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}