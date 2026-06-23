import { useState } from "react";
import { Link } from "react-router-dom";

export default function Summarizer() {
  const [file, setFile] = useState(null);
  const [summary, setSummary] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setLoading(true);

      const response = await fetch(
        "http://localhost:5000/api/summary/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      setSummary(data.summary);

    } catch (error) {
      console.log(error);
      alert("Upload Failed");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-black to-zinc-900 text-white">

      {/* Navbar */}
      <div className="flex items-center justify-between px-10 py-6 border-b border-zinc-800">

        <div>
          <h1 className="text-3xl font-bold">
            StudySync AI
          </h1>

          <p className="text-zinc-400 text-sm mt-1">
            Smart AI Study Assistant
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
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* Hero */}
        <div className="text-center mb-16">

          <div className="inline-block px-4 py-2 rounded-full bg-zinc-800 text-sm text-zinc-300 mb-6">
            Feature 02 • AI Notes Summarizer
          </div>

          <h2 className="text-6xl font-bold leading-tight mb-6">
            Transform Study Material
            <br />
            Into Smart AI Notes
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl mx-auto leading-relaxed">
            Upload PDFs, DOCX, or TXT files and let AI generate
            clean summaries for faster revision and smarter learning.
          </p>

        </div>

        {/* Upload Section */}
        <div className="bg-zinc-900/70 border border-zinc-800 rounded-3xl p-10 shadow-2xl backdrop-blur-xl">

          <div className="border-2 border-dashed border-zinc-700 rounded-3xl p-16 text-center hover:border-white transition">

            <h3 className="text-3xl font-bold mb-4">
              Upload Your Notes
            </h3>

            <p className="text-zinc-400 mb-8">
              Supported formats: PDF, DOCX, TXT
            </p>

            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              className="mb-8 block mx-auto text-zinc-300"
            />

            {file && (
              <div className="mb-6 text-green-400 font-medium">
                Selected File: {file.name}
              </div>
            )}

            <button
              onClick={handleUpload}
              className="bg-white text-black px-10 py-4 rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              {loading ? "Generating Summary..." : "Generate AI Summary"}
            </button>

          </div>

        </div>

        {/* Summary Output */}
        {summary && (
          <div className="mt-12 bg-zinc-900/70 border border-zinc-800 rounded-3xl p-10 shadow-2xl">

            <div className="flex items-center justify-between mb-8">

              <div>
                <h3 className="text-4xl font-bold">
                  AI Summary
                </h3>

                <p className="text-zinc-400 mt-2">
                  Generated successfully using AI
                </p>
              </div>

              <button
                onClick={() => navigator.clipboard.writeText(summary)}
                className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:scale-105 transition"
              >
                Copy
              </button>

            </div>

            <div className="text-zinc-300 leading-9 whitespace-pre-wrap text-lg">
              {summary}
            </div>

          </div>
        )}

      </div>

    </div>
  );
}