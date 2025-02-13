/* eslint-disable react/prop-types */
import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { knowledgeBites } from '../knowledgeBites'; // Import the knowledgeBites array

const KnowledgeBites = () => {
  const [selectedGoal, setSelectedGoal] = useState(null);
 

  const GoalCard = ({ goal }) => (
    <div
      className="cursor-pointer transform transition-transform hover:scale-105 ml-7"
      onClick={() => setSelectedGoal(goal)}
    >
      <div
        className="w-40 h-40 rounded-full border-4 p-1 hover:animate-pulse"
   
        style={{ borderColor: goal.color }}
      >
        <img
          src={goal.icon}
          alt={goal.title}
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <p className="text-left mt-1.5 font-semibold">{goal.title}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      <Header /><br/> <br/><br/>
      <div className="container mx-auto px-4 py-16">
        <div className=" p-8 rounded-lg  mb-10">
          <h1 className="text-4xl font-bold text-yellow-500 mb-4">
            Welcome to SDG Knowledge Hub!
          </h1>
          <p className="text-[#036666] text-lg">
            Explore practical tips and innovative solutions for each Sustainable Development Goal.<br/>Click on any goal to dive deeper into making a difference.
          </p>
        </div>

        {/* First Row */}
        <div className="grid grid-cols-5 gap-6 mb-12">
          {knowledgeBites.slice(0, 5).map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-5 gap-6 mb-12">
          {knowledgeBites.slice(5, 10).map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

        {/* Third Row */}
        <div className="grid grid-cols-5 gap-6 mb-12">
          {knowledgeBites.slice(10, 15).map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

        {/* Last Row */}
        <div className="grid grid-cols-5 gap-6">
          {knowledgeBites.slice(15, 17).map((goal) => (
            <GoalCard key={goal.id} goal={goal} />
          ))}
        </div>

       
        {selectedGoal && (
          <div className="fixed inset-0 mt-20 bg-black bg-opacity-50 flex items-center justify-center p-4">
            <div className="bg-white mt-8 rounded-xl p-5 max-w-2xl w-full max-h-90vh overflow-y-auto">
              <div className="flex items-center mb-6">
                <img
                  src={selectedGoal.icon}
                  alt={selectedGoal.title}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <h2 className="text-2xl font-bold">{selectedGoal.title}</h2>
                <button
                  onClick={() => setSelectedGoal(null)}
                  className="ml-auto text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-3">Tips for Action</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedGoal.tips.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Sustainable Solutions</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {selectedGoal.solutions.map((solution, index) => (
                    <li key={index}>{solution}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default KnowledgeBites;
