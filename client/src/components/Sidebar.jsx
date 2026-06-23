import { Link } from "react-router-dom"

function Sidebar() {
  return (
    <div className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 p-6">

      <h1 className="text-3xl font-bold mb-10">
        StudySync AI
      </h1>

      <div className="flex flex-col gap-4 text-lg">

        <Link
          to="/"
          className="bg-zinc-900 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          Home
        </Link>

        <Link
          to="/dashboard"
          className="bg-zinc-900 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          Dashboard
        </Link>

        <Link
          to="/chat"
          className="bg-zinc-900 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          AI Chat
        </Link>

        <Link
          to="/login"
          className="bg-zinc-900 p-3 rounded-xl hover:bg-zinc-800 transition"
        >
          Login
        </Link>

      </div>

    </div>
  )
}

export default Sidebar