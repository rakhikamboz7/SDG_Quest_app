import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import SDGQuiz from "../pages/QuizesPage"; // Adjust path if needed

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);


const Dashboard = () => {
  const [quizResults, setQuizResults] = useState({});

  useEffect(() => {
    const storedResults = localStorage.getItem("quizResults");
    if (storedResults) {
      setQuizResults(JSON.parse(storedResults));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("quizResults", JSON.stringify(quizResults));
  }, [quizResults]);


  const handleQuizCompletion = (goalId, correctAnswers, totalQuestions) => {
    const progress = (correctAnswers / totalQuestions) * 100;
    setQuizResults((prevResults) => ({
      ...prevResults,
      [goalId]: {
        correct: correctAnswers,
        total: totalQuestions,
        progress,
        reward: progress === 100,
      },
    }));
  };

  const chartData = Object.keys(quizResults).map((goal) => ({
    labels: [goal],
    datasets: [
      {
        label: "Progress (%)",
        data: [quizResults[goal]?.progress || 0], // Handle undefined progress
        backgroundColor: "hsl(206, 100%, 50%)",
        borderColor: "#036666",
        borderWidth: 1,
      },
    ],
  }));


  const findWeakestGoal = (results) => {
    if (Object.keys(results).length === 0) return "No goals attempted yet!";
    let weakestGoal = null;
    let minProgress = Infinity;
    for (const goal in results) {
      const progress = results[goal].progress;
      if (progress < minProgress) {
        minProgress = progress;
        weakestGoal = goal;
      }
    }
    return weakestGoal ? `Goal ${weakestGoal.replace("goal", "")}` : "No data available";
  };


  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-6 text-white">
        <h2 className="text-xl font-bold mb-6">SDG Dashboard</h2>
        <nav className="space-y-4">
          <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-700">Overview</Link>
          <Link to="/quiz" className="block px-4 py-2 hover:bg-gray-700">Take Quizzes</Link>
          <Link to="/knowledge" className="block px-4 py-2 hover:bg-gray-700">Knowledge Hub</Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-6">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Your SDG Dashboard 🚀</h1>
        <p className="text-gray-600 mb-8">Monitor your progress and focus on improving your weakest areas.</p>

        {/* Individual Goal Progress */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.keys(quizResults).map((goal, index) => (
            <div key={index} className="bg-white p-6 rounded shadow-md">
              <h3 className="mb-4 text-lg font-semibold">Goal {goal.replace('goal', '')}</h3>
              <p>Correct: {quizResults[goal].correct}</p>
              <p>Total: {quizResults[goal].total}</p>
              <p>Progress: {quizResults[goal].progress.toFixed(2)}%</p>

              {/* Show Reward */}
              {quizResults[goal].reward && (
                <div className="mt-2 bg-green-200 p-2 rounded text-green-700 font-bold">
                  🎉 Reward Earned! Great Job! 🎉
                </div>
              )}

              {/* Chart */}
              <div className="mt-4">
                <Bar data={chartData[index]} />
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps Section */}
        <div className="mt-10 bg-gray-200 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-gray-800">Next Recommended SDG</h2>
          <p className="text-gray-600">Your weakest goal is: <strong>{findWeakestGoal(quizResults)}</strong>. Take more quizzes to improve!</p>
          <Link to="/quiz" className="inline-block px-6 py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700">Take More Quizzes</Link>
        </div>
      </main>
      {/* <SDGQuiz className ="p-5"    onQuizCompletion={handleQuizCompletion} /> */}
    </div>
  );
};

export default Dashboard;
