import { useState } from "react";
import { Link } from "react-router-dom";

export default function AIChat() {

  const [message, setMessage] = useState("");

  const [chat, setChat] = useState([]);

  const [loading, setLoading] = useState(false);

  const sendMessage = async () => {

    if (!message.trim()) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    setLoading(true);

    try {

      const response = await fetch(
        "http://localhost:5000/api/ai/chat",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            message,
          }),
        }
      );

      const data = await response.json();

      const aiMessage = {
        sender: "ai",
        text: data.reply,
      };

      setChat((prev) => [
        ...prev,
        aiMessage,
      ]);

    } catch (error) {

      console.log(error);

      alert("AI request failed");
    }

    setLoading(false);

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white flex flex-col">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-zinc-800">

        <div>

          <h1 className="text-3xl font-bold">
            StudySync AI
          </h1>

          <p className="text-zinc-400 mt-1">
            AI Study Assistant
          </p>

        </div>

        <Link
          to="/dashboard"
          className="bg-white text-black px-5 py-3 rounded-xl font-semibold hover:scale-105 transition"
        >
          Dashboard
        </Link>

      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full">

        {chat.length === 0 ? (

          <div className="h-full flex flex-col items-center justify-center text-center">

            <h2 className="text-5xl font-bold mb-6">
              AI Chat Assistant
            </h2>

            <p className="text-zinc-400 text-xl max-w-2xl">
              Ask coding questions, study doubts,
              AI concepts, DSA problems, and more.
            </p>

          </div>

        ) : (

          <div className="space-y-6">

            {chat.map((msg, index) => (

              <div
                key={index}
                className={`p-6 rounded-3xl max-w-3xl ${
                  msg.sender === "user"
                    ? "bg-white text-black ml-auto"
                    : "bg-zinc-800 text-white"
                }`}
              >

                <p className="whitespace-pre-wrap leading-8">
                  {msg.text}
                </p>

              </div>

            ))}

            {loading && (

              <div className="bg-zinc-800 p-6 rounded-3xl w-fit">
                AI is thinking...
              </div>

            )}

          </div>

        )}

      </div>

      {/* Input */}
      <div className="border-t border-zinc-800 p-6">

        <div className="max-w-5xl mx-auto flex gap-4">

          <input
            type="text"
            placeholder="Ask anything..."
            value={message}
            onChange={(e) =>
              setMessage(e.target.value)
            }
            className="flex-1 bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 outline-none"
          />

          <button
            onClick={sendMessage}
            className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Send
          </button>

        </div>

      </div>

    </div>
  );
}