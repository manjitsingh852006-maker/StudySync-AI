import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-zinc-900 text-white px-8 py-4 flex justify-between items-center border-b border-zinc-800">

      <h1 className="text-2xl font-bold">
        StudySync AI
      </h1>

      <div className="flex gap-6 text-lg">
        <Link to="/" className="hover:text-zinc-400">
          Home
        </Link>

        <Link to="/dashboard" className="hover:text-zinc-400">
          Dashboard
        </Link>

        <Link to="/login" className="hover:text-zinc-400">
          Login
        </Link>
      </div>

    </nav>
  )
}

export default Navbar