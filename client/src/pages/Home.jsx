function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh] text-center">
      
      <h1 className="text-6xl font-bold mb-6">
        StudySync AI
      </h1>

      <p className="text-zinc-400 text-xl max-w-2xl">
        Your AI-powered study companion for smarter learning,
        notes management, productivity, and personalized guidance.
      </p>

      <button className="mt-8 bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition">
        Get Started
      </button>

    </div>
  )
}

export default Home