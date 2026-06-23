import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Brain,
  CalendarCheck,
  Settings,
  LogOut,
  Flame,
  Search,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex relative overflow-hidden">
      {/* Background Glow Effects */}

<div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/20 blur-[120px] rounded-full"></div>

<div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full"></div>


      {/* Sidebar */}
      <aside className="w-72 bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between relative z-10">

        <div>

          <div className="mb-12">
            <h1 className="text-4xl font-bold">
              StudySync AI
            </h1>

            <p className="text-zinc-400 mt-2">
              Smart AI Learning Platform
            </p>
          </div>

          {/* Navigation */}
          <nav className="space-y-4">

            <button className="flex items-center gap-4 w-full bg-white text-black px-5 py-4 rounded-2xl font-semibold shadow-lg">
              <LayoutDashboard size={22} />
              Dashboard
            </button>

            <Link to="/ai-chat">
              <button className="flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 hover:translate-x-1 transition-all duration-300">
                
                <MessageSquare size={22} />

                AI Chat

              </button>
            </Link>

            <Link to="/summarizer">
              <button className="flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 hover:translate-x-1 transition-all duration-300">
                
                <FileText size={22} />

                Smart Notes

              </button>
            </Link>

            <Link to="/planner">
              <button className="flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 hover:translate-x-1 transition-all duration-300">
                
                <CalendarCheck size={22} />

                Study Planner

              </button>
            </Link>

            <Link to="/quiz">
              <button className="flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 hover:translate-x-1 transition-all duration-300">
                
                <Brain size={22} />

                Quiz Generator

              </button>
            </Link>

            <button className="w-full text-left px-5 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 transition">
              Progress Tracker
            </button>

            <button className="flex items-center gap-4 w-full text-left px-5 py-4 rounded-2xl bg-zinc-900 hover:bg-zinc-800 hover:translate-x-1 transition-all duration-300">

              <Settings size={22} />

              Settings

            </button>

          </nav>

        </div>

        {/* Logout */}
        <div>
          <button className="flex items-center justify-center gap-3 w-full bg-red-500 hover:bg-red-600 transition-all duration-300 px-5 py-4 rounded-2xl font-semibold">

            <LogOut size={20} />

            Logout

          </button>
        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 overflow-y-auto relative z-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">

          <div>

            <h2 className="text-5xl font-bold tracking-tight">
              Welcome Manjit 👋
            </h2>

            <p className="text-zinc-400 mt-3 text-lg">
              Your AI-powered study workspace is ready.
            </p>

          </div>

          <div className="flex items-center gap-5">

          <div className="flex items-center bg-white/5 border border-white/10 rounded-2xl px-4 py-3 w-80 backdrop-blur-xl">

            <Search className="text-zinc-400 mr-3" size={20} />

            <input
              type="text"
              placeholder="Search subjects or notes..."
              className="bg-transparent outline-none w-full text-white"
            />

</div>

            <div className="w-14 h-14 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-xl shadow-lg">
              M
            </div>

          </div>

        </div>

        {/* Stats Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 mb-14">

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-300">
            <h3 className="text-zinc-400 mb-4 text-lg">
              Study Hours
            </h3>

            <p className="text-5xl font-bold">
              24h
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-zinc-400 mb-4 text-lg">
              AI Chats
            </h3>

            <p className="text-5xl font-bold">
              128
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-zinc-400 mb-4 text-lg">
              Notes Generated
            </h3>

            <p className="text-5xl font-bold">
              56
            </p>
          </div>

          <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-xl">
            <h3 className="text-zinc-400 mb-4 text-lg">
              Daily Streak
            </h3>

            <p className="text-5xl font-bold">
              12🔥
            </p>
          </div>

        </section>

        {/* Feature Cards */}
        <section>

          <h3 className="text-4xl font-bold mb-10">
            AI Features
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

            {/* AI Chat */}
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-xl hover:-translate-y-2 hover:border-indigo-500/30 transition-all duration-300">

              <h4 className="text-3xl font-bold mb-4">
                AI Chat Assistant
              </h4>

              <p className="text-zinc-400 mb-8 leading-8">
                Ask coding questions, solve doubts,
                and learn concepts instantly using AI.
              </p>

              <Link to="/ai-chat">
                <button className="bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300">
                  Open Chat
                </button>
              </Link>

            </div>

            {/* Smart Notes */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-xl hover:scale-[1.02] transition">

              <h4 className="text-3xl font-bold mb-4">
                Smart Notes Generator
              </h4>

              <p className="text-zinc-400 mb-8 leading-8">
                Upload PDFs, DOCX, and TXT files
                to generate AI-powered summaries.
              </p>

              <Link to="/summarizer">
                <button className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                  Generate Notes
                </button>
              </Link>

            </div>

            {/* Study Planner */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-xl hover:scale-[1.02] transition">

              <h4 className="text-3xl font-bold mb-4">
                Study Planner
              </h4>

              <p className="text-zinc-400 mb-8 leading-8">
                Create personalized study plans
                and manage your daily workflow.
              </p>

              <Link to="/planner">
                <button className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                  Create Plan
                </button>
              </Link>

            </div>

            {/* Quiz Generator */}
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-xl hover:scale-[1.02] transition">

              <h4 className="text-3xl font-bold mb-4">
                Quiz Generator
              </h4>

              <p className="text-zinc-400 mb-8 leading-8">
                Generate AI-powered quizzes for
                DSA, AI, coding, DBMS, and more.
              </p>

              <Link to="/quiz">
                <button className="bg-white text-black px-6 py-4 rounded-2xl font-semibold hover:scale-105 transition">
                  Start Quiz
                </button>
              </Link>

            </div>

          </div>

        </section>

      </main>

    </div>
  );
}