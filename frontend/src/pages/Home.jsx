import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
// import { goalDetails } from "../goalDetail";
import Header from '../components/Header';
import Footer from '../components/Footer';
import axios from 'axios';
const goalsData = [
  {
    id: 1,
    title: "No Poverty",
    icon: "src/assets/poverty.svg.ico",
    overview:
      "Goal 1 aims to end poverty in all its forms everywhere. The number of people living in extreme poverty dropped by more than half between 1990 and 2015.",
    color: "#E5243B",
  },
  {
    id: 2,
    title: "Zero Hunger",
    icon: "src/assets/Hunger.ico",
    overview:
      "Goal 2 seeks sustainable solutions to end hunger and achieve food security for all.",
    color: "#DDA63A",
  },
  {
    id: 3,
    title: "Good Health and Well-Being",
    icon: "src/assets/Health.ico",
    overview:
      "Goal 3 ensures healthy lives and promotes well-being at all ages.",
    color: "#4C9F38",
  },
  {
    id: 4,
    title: "Quality Education",
    icon: "src/assets/education.svg.ico",
    overview:
      "Goal 4 ensures inclusive and equitable quality education and promotes lifelong learning opportunities.",
    color: "#C5192D",
  },
  {
    id: 5,
    title: "Gender Equality",
    icon: "src/assets/gender.svg.ico",
    overview:
      "Goal 5 aims to achieve gender equality and empower all women and girls.",
    color: "#FF3A21",
  },
  {
    id: 6,
    title: "Goal 6: Clean Water and Sanitation",
    icon: "src/assets/goal6.svg.ico",
    overview:
      "Goal 6 aims to ensure availability and sustainable management of water and sanitation for all. Billions of people still lack access to safe water and sanitation.",
    color: "#26BDE2",
  },
  {
    id: 7,
    title: "Goal 7: Affordable and Clean Energy",
    icon: "src/assets/goal7.png.ico",
    overview:
      "Goal 7 ensures access to affordable, reliable, sustainable, and modern energy for all. Transitioning to renewable energy is key to fighting climate change.",
    color: "#FCC30B",
  },
  {
    id: 8,
    title: "Goal 8: Decent Work and Economic Growth",
    icon: "src/assets/goal8.svg.ico",
    overview:
      "Goal 8 promotes sustained, inclusive economic growth, full employment, and decent work for all while ensuring labor rights and economic productivity.",
    color: "#A21942",
  },
  {
    id: 9,
    title: "Goal 9: Industry, Innovation and Infrastructure",
    icon: "src/assets/goal9.svg.ico",
    overview:
      "Goal 9 focuses on building resilient infrastructure, promoting sustainable industrialization, and fostering innovation to drive economic progress.",
    color: "#FD6925",
  },
  {
    id: 10,
    title: "Goal 10: Reduced Inequalities",
    icon: "src/assets/goal10.png.ico",
    overview:
      "Goal 10 aims to reduce inequalities within and among countries by ensuring equal opportunities and promoting social and economic inclusion.",
    color: "#DD1367",
  },
  {
    id: 11,
    title: "Goal 11: Sustainable Cities and Communities",
    icon: "src/assets/goal11.svg.ico",
    overview:
      "Goal 11 seeks to make cities inclusive, safe, resilient, and sustainable by addressing housing, transportation, and environmental challenges.",
    color: "#FD9D24",
  },
  {
    id: 12,
    title: "Goal 12: Responsible Consumption and Production",
    icon: "src/assets/goal12.svg.ico",
    overview:
      "Goal 12 promotes sustainable consumption and production patterns, aiming to reduce waste and encourage responsible resource management.",
    color: "#BF8B2E",
  },
  {
    id: 13,
    title: "Goal 13: Climate Action",
    icon: "src/assets/goal13.svg.ico",
    overview:
      "Goal 13 calls for urgent action to combat climate change and its impacts through adaptation, mitigation, and increased resilience.",
    color: "#3F7E44",
  },
  {
    id: 14,
    title: "Goal 14: Life Below Water",
    icon: "src/assets/goal14.svg.ico",
    overview:
      "Goal 14 aims to conserve and sustainably use the oceans, seas, and marine resources to prevent pollution and habitat destruction.",
    color: "#0A97D9",
  },
  {
    id: 15,
    title: "Goal 15: Life on Land",
    icon: "src/assets/goal15.svg.ico",
    overview:
      "Goal 15 focuses on protecting, restoring, and promoting the sustainable use of terrestrial ecosystems, forests, and biodiversity.",
    color: "#56C02B",
  },
  {
    id: 16,
    title: "Goal 16: Peace, Justice, and Strong Institutions",
    icon: "src/assets/goal16.svg.ico",
    overview:
      "Goal 16 promotes peaceful and inclusive societies, ensuring access to justice for all and building effective, accountable institutions.",
    color: "#00689D",
  },
  {
    id: 17,
    title: "Goal 17: Partnerships for the Goals",
    icon: "src/assets/goal17.svg.ico",
    overview:
      "Goal 17 emphasizes strengthening global partnerships for sustainable development, improving international cooperation and financial support.",
    color: "#19486A",
  },
];

const Home = () => {
  const navigate = useNavigate();
  const [quizzes, setQuizzes] = useState([]);
  const { id } = useParams();

  
  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('http://localhost:5005/api/quizzes/');
        console.log("Fetched quizzes:", response.data.myData); // Debug log
        setQuizzes(response.data.myData);
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      }
    };

    fetchQuizzes();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <br />
      <br />

      <div className="container mt-20 mx-auto px-6">
        <h1 className="font-bold text-4xl text-yellow-500 mb-5">
          Learn And Explore The Goals Here
        </h1>
        <p className="text-[#036666] text-lg">
          You can learn more about specific goals and Start playing Quizzes.
        </p>

        <div className="grid mt-10 mb-15 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {goalsData.map((goal) => {
            // Debug logs
            // console.log("Current goal:", goal);
            const matchingQuiz = quizzes?.find(quiz => {
              // console.log("Comparing:", quiz._id, goal.id); // Debug log
              return quiz.goalId === goal.id;
            });
            console.log("Matching quiz:", matchingQuiz); 
            return (
              <div
                key={goal.id}
                className="bg-white rounded-lg shadow-lg p-5 flex flex-col justify-between border-l-8"
                style={{ borderColor: goal.color }}
              >
                {/* Top Section (Icon & Title) */}
                <div className="flex items-center justify-between mb-3">
                  <img
                    src={goal.icon}
                    alt={goal.title}
                    className="h-10 w-10 object-contain"
                  />
                  <h2 className="text-lg font-bold text-gray-800">
                    {goal.title}
                  </h2>
                </div>

                {/* Overview (Description) */}
                <p className="text-gray-600 text-justify text-sm mb-4">
                  {goal.overview}
                  <br />
                  <Link
                    className="text-black"
                    to={`/goal/${goal.id}`}
                    style={{ color: goal.color }}
                  >
                    Learn More
                  </Link>
                </p>

                {/* Bottom Section (Quiz Button) */}
                <div className="flex justify-between items-center">
               
                    <button
                      onClick={() => {
                        navigate(`/quiz/${goal.id}`);
                      }}
                      className="bg-teal-700 text-white px-2 py-1 ml-60 rounded-md text-sm hover:bg-teal-600"
                    >
                      Start Quiz
                    </button>
                  
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
