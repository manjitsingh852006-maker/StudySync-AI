import { useState } from "react"
import ReactMarkdown from "react-markdown"
import { getAIResponse } from "../services/gemini"

export default function Chat() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState([
    { text: "Hi 👋 Ask me anything!", sender: "ai" }
  ])
  const [loading, setLoading] = useState(false)

  const sendMessage = async () => {
    if (!input.trim()) return

    const userText = input

    setMessages((prev) => [
      ...prev,
      { text: userText, sender: "user" }
    ])

    setInput("")
    setLoading(true)

    try {
      const reply = await getAIResponse(userText)

      setMessages((prev) => [
        ...prev,
        { text: reply, sender: "ai" }
      ])
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { text: "Error getting AI response", sender: "ai" }
      ])
    }

    setLoading(false)
  }

  return (
    <div className="h-screen flex flex-col bg-black text-white">

      {/* HEADER */}
      <div className="p-4 border-b border-zinc-800">
        <h1 className="text-xl font-bold">AI Chat 💬</h1>
      </div>

      {/* CHAT */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] p-3 rounded-xl ${
                msg.sender === "user"
                  ? "bg-white text-black"
                  : "bg-zinc-800 text-white"
              }`}
            >
              {msg.sender === "ai" ? (
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              ) : (
                msg.text
              )}
            </div>
          </div>
        ))}

        {loading && (
          <div className="text-gray-400">AI is thinking...</div>
        )}
      </div>

      {/* INPUT */}
      <div className="p-3 border-t border-zinc-800 flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
          className="flex-1 px-4 py-2 rounded-lg bg-zinc-900 border border-zinc-700"
        />

        <button
          onClick={sendMessage}
          className="px-5 bg-white text-black rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  )
}