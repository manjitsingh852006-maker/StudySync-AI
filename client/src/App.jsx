import { Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Summarizer from "./pages/Summarizer";
import StudyPlanner from "./pages/StudyPlanner";
import AIChat from "./pages/AIChat";
import QuizGenerator from "./pages/QuizGenerator";

function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<Login />}
      />

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      <Route
        path="/summarizer"
        element={<Summarizer />}
      />

      <Route
        path="/planner"
        element={<StudyPlanner />}
      />

      <Route
        path="/ai-chat"
        element={<AIChat />}
      />

      <Route
        path="/quiz"
        element={<QuizGenerator />}
      />

    </Routes>
  );
}

export default App;