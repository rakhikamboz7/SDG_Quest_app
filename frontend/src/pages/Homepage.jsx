import { Link } from "react-router-dom";
import  Progress  from "../components/progress"; // Progress component
import { useState, useEffect } from "react";
import Header from "../components/Header";

const Content = () => {
  const [progress, setProgress] = useState(30); 

  useEffect(() => {
    // Fetch user progress from backend (replace with API call)
    setProgress(45); // Example update
  }, []);

  return (
    <><Header/>
    
    <div className="p-35 bg-[#036666] text-white min-h-screen flex flex-col items-center">
    <div className="ml-200 w-">
        <img src ="src\assets\bg.png"
        alt=""/></div>
      <h1 className="text-3xl font-bold">Welcome to SDG Quest</h1>
      <p className="mt-2 text-lg">Track your journey toward mastering SDGs!</p>
     

      {/* Progress Bar */}
      <div className="w-full max-w-md bg-gray-700 p-4 rounded-xl mt-6">
        <p className="mb-2">Your Progress: {progress}%</p>
        <Progress value={progress} className="h-4 bg-white" />
      </div>

      {/* Button to View Full Progress */}
      <Link
        to="/dashboard"
        className="mt-4 px-6 py-2 bg-white text-[#036666] rounded-lg font-semibold hover:bg-gray-200"
      >
        View Full Progress
      </Link>
    </div>
    </>
  );
};

export default Content;
