import { useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import { goalDetails } from "../goalDetail";
import { useNavigate } from "react-router-dom";


import Footer from "./Footer";

const GoalContent = () => {
  const navigate = useNavigate(); 
  const { id } = useParams();
  const goal = goalDetails[id];
  const [showTip, setShowTip] = useState(false);

  if (!goal)
    return <div className="text-center text-red-500 font-bold text-lg">Goal not found</div>;

  const handleShowTip = () => {
    setShowTip(true);
    setTimeout(() => setShowTip(false), 15000); // Hides after 15 seconds
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <br /><br /><br /><br />
      <div className="container mx-auto px-6 py-12">
        <div className="rounded-lg shadow-lg p-6 mb-6 flex items-center bg-pink"
          style={{ background: `${goal.color}` }}>
          
          <div className="relative flex items-center">
            <button 
              onClick={handleShowTip}
              className="w-16 h-16 rounded-full border-4 border-white flex justify-center items-center overflow-hidden relative transition duration-300 ease-in-out hover:shadow-lg hover:shadow-green-400">
              <img src={goal.icon} alt={goal.title} className="w-full h-full object-cover rounded-full border-4 border-green-500 p-1 animate-pulse" />
            </button>

            {showTip && (
              <div className="absolute top-20 left-0 bg-white text-black p-3 rounded-lg shadow-lg w-64 animate-fade-in border-l-4 border-green-500">
                <p className="text-sm font-semibold">{goal.knowledgeBite}</p>
              </div>
            )}
          </div>

          <h2 className="text-2xl font-bold text-white ml-4">{goal.title}</h2>
          <button
  onClick={() => navigate(`/quiz/${id}`)} // Pass goal ID to the quiz page
  className="bg-yellow-500 text-white px-4 py-2 rounded-md text-sm ml-210 hover:bg-yellow-600"
>
  Start Quiz
</button>

        </div>

        <div className="bg-white text-white rounded-lg shadow-lg p-6 flex flex-col md:flex-row">
          <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-8">
            <img src={goal.image} alt={goal.title} className="w-[400px] h-[300px] object-cover rounded-lg" />
          </div>

          <div className="flex-1">
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-3">Overview</h2>
              <p className="text-gray-700">{goal.overview}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3">Key Points</h2>
              <ul className="list-disc pl-6 space-y-2">
                {goal.keyPoints.map((point, index) => (
                  <li key={index} className="text-gray-700">{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Related Videos</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-2 border rounded">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${goal.videos}`}
                title="SDG 1: No Poverty"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="p-2 border rounded flex justify-end">
              <iframe
                width="100%"
                height="315"
                src={`https://www.youtube.com/embed/${goal.videos2}`}
                title="SDG 1: No Poverty"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
          <h2 className="text-xl font-bold mb-4">Additional Resources</h2>
          <div className="grid grid-cols-1 gap-3">
            {goal.resources.map((resource, index) => (
              <a key={index} href={resource.url} className="text-blue-600 hover:underline" target="_blank">
                {resource.title}
              </a>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GoalContent;

