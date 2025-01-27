import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const goals = [
  {
    id: 1,
    title: "No Poverty",
    color: "bg-red-500",
    description: "End poverty in all its forms everywhere.",
  },
  {
    id: 2,
    title: "Zero Hunger",
    color: "bg-yellow-500",
    description: "End hunger, achieve food security, and improve nutrition.",
  },
  {
    id: 3,
    title: "Good Health and Well-being",
    color: "bg-green-500",
    description: "Ensure healthy lives and promote well-being for all.",
  },
  {
    id: 4,
    title: "Quality Education",
    color: "bg-blue-500",
    description: "Ensure inclusive and equitable quality education.",
  },
  // Add more SDG goals here
];

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300 p-6">
      <header className="text-center py-8">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-gray-800"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          SDG Quest
        </motion.h1>
        <p className="mt-4 text-lg text-gray-700">
          Explore the Sustainable Development Goals and test your knowledge.
        </p>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {goals.map((goal) => (
          <motion.div
            key={goal.id}
            className={`p-6 rounded-lg shadow-lg text-white ${goal.color} hover:scale-105 transition-transform`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-2xl font-bold mb-4">{goal.title}</h2>
            <p className="mb-6">{goal.description}</p>
            <div className="flex justify-between">
              <Button
                className="bg-white text-gray-800 hover:bg-gray-100"
                onClick={() => alert(`Learn more about ${goal.title}`)}
              >
                Learn More
              </Button>
              <Button
                className="bg-gray-800 text-white hover:bg-gray-700"
                onClick={() => alert(`Take a quiz on ${goal.title}`)}
              >
                Take Quiz
              </Button>
            </div>
          </motion.div>
        ))}
      </main>

      
    </div>
  );
};

export default HomePage;
