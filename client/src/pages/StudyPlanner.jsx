import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function StudyPlanner() {

  const [task, setTask] = useState("");
  const [subject, setSubject] = useState("");
  const [time, setTime] = useState("");
  const [priority, setPriority] = useState("Medium");

  const [plans, setPlans] = useState([]);

  /* Load Saved Tasks */
  useEffect(() => {

    const savedPlans = localStorage.getItem(
      "study-plans"
    );

    if (savedPlans) {
      setPlans(JSON.parse(savedPlans));
    }

  }, []);

  /* Save Tasks */
  useEffect(() => {

    localStorage.setItem(
      "study-plans",
      JSON.stringify(plans)
    );

  }, [plans]);

  /* Add Task */
  const addPlan = () => {

    if (!task || !subject || !time) {
      alert("Please fill all fields");
      return;
    }

    const newPlan = {
      id: Date.now(),
      task,
      subject,
      time,
      priority,
      completed: false,
    };

    setPlans([newPlan, ...plans]);

    setTask("");
    setSubject("");
    setTime("");
    setPriority("Medium");
  };

  /* Delete */
  const deletePlan = (id) => {

    setPlans(
      plans.filter((plan) => plan.id !== id)
    );
  };

  /* Toggle Complete */
  const toggleComplete = (id) => {

    const updatedPlans = plans.map((plan) => {

      if (plan.id === id) {
        return {
          ...plan,
          completed: !plan.completed,
        };
      }

      return plan;
    });

    setPlans(updatedPlans);
  };

  /* Progress */
  const completedTasks = plans.filter(
    (plan) => plan.completed
  ).length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-6 border-b border-zinc-800">

        <div>
          <h1 className="text-3xl font-bold">
            StudySync AI
          </h1>

          <p className="text-zinc-400 text-sm mt-1">
            Smart Study Planner
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
      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Hero */}
        <div className="mb-14">

          <div className="inline-block px-4 py-2 rounded-full bg-zinc-800 text-zinc-300 mb-6">
            Feature 04 • AI Study Planner
          </div>

          <h2 className="text-6xl font-bold leading-tight mb-6">
            Organize Your
            <br />
            Study Workflow
          </h2>

          <p className="text-zinc-400 text-xl max-w-3xl leading-relaxed">
            Create smart daily plans, manage priorities,
            and track your productivity.
          </p>

        </div>

        {/* Progress Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-zinc-400 mb-3">
              Total Tasks
            </h3>

            <p className="text-5xl font-bold">
              {plans.length}
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-zinc-400 mb-3">
              Completed
            </h3>

            <p className="text-5xl font-bold text-green-400">
              {completedTasks}
            </p>

          </div>

          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8">

            <h3 className="text-zinc-400 mb-3">
              Progress
            </h3>

            <p className="text-5xl font-bold">
              {plans.length === 0
                ? "0%"
                : `${Math.round(
                    (completedTasks / plans.length) * 100
                  )}%`}
            </p>

          </div>

        </div>

        {/* Form */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 mb-12">

          <h3 className="text-3xl font-bold mb-8">
            Create Study Task
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

            <input
              type="text"
              placeholder="Task Name"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <input
              type="text"
              placeholder="Study Time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            />

            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="bg-zinc-800 border border-zinc-700 rounded-2xl px-5 py-4 outline-none"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

          </div>

          <button
            onClick={addPlan}
            className="mt-8 bg-white text-black px-8 py-4 rounded-2xl font-bold hover:scale-105 transition"
          >
            Add Study Task
          </button>

        </div>

        {/* Tasks */}
        <div>

          <h3 className="text-4xl font-bold mb-8">
            Today's Study Plans
          </h3>

          {plans.length === 0 ? (

            <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-16 text-center text-zinc-400 text-xl">
              No study plans added yet.
            </div>

          ) : (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">

              {plans.map((plan) => (

                <div
                  key={plan.id}
                  className={`border rounded-3xl p-8 shadow-xl transition ${
                    plan.completed
                      ? "bg-green-900 border-green-700"
                      : "bg-zinc-900 border-zinc-800"
                  }`}
                >

                  <div className="flex justify-between items-center mb-6">

                    <div className="bg-white text-black px-4 py-2 rounded-xl text-sm font-bold">
                      {plan.priority}
                    </div>

                    <button
                      onClick={() => deletePlan(plan.id)}
                      className="text-red-400 hover:text-red-500"
                    >
                      Delete
                    </button>

                  </div>

                  <h4 className="text-3xl font-bold mb-4">
                    {plan.task}
                  </h4>

                  <div className="space-y-3 text-zinc-300 mb-8">

                    <p>
                      Subject: {plan.subject}
                    </p>

                    <p>
                      Study Time: {plan.time}
                    </p>

                  </div>

                  <button
                    onClick={() =>
                      toggleComplete(plan.id)
                    }
                    className={`w-full py-4 rounded-2xl font-bold transition ${
                      plan.completed
                        ? "bg-green-500 text-white"
                        : "bg-white text-black"
                    }`}
                  >
                    {plan.completed
                      ? "Completed ✅"
                      : "Mark as Done"}
                  </button>

                </div>

              ))}

            </div>

          )}

        </div>

      </div>

    </div>
  );
}