import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FaShuffle, FaLightbulb, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@mantine/core/styles.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import homeImg from "../assets/home6.jpg";
import missionImage1 from '../assets/home2.jpg'; // Replace with your appropriate images
import missionImage2 from '../assets/home6.jpg';
import { useNavigate } from "react-router-dom";

const videos = [
  { id: "0XTBYMfZyrM", title: "Introduction to SDGs" },
  { id: "NU6rc_vm9rs", title: "Climate Action Explained" },
  { id: "ZVqSC_hN2lk", title: "Sustainable Development Goals Overview" },
  { id: "dQw4w9WgXcQ", title: "Global Goals for Sustainable Development" },
  { id: "eBGIQ7ZuuiU", title: "Achieving SDGs by 2030" },
  { id: "RX2elsVjY-c", title: "Responsible Consumption and Production" }
];

const flashcards = [
  { question: "Which SDG aims to achieve zero hunger?", image: "https://www.orfonline.org/public/uploads/posts/image/Malnutrition-in-india.jpg", hint: "SDG 2 focuses on ending hunger and promoting sustainable agriculture." },
  { question: "What does SDG 13 advocate for?", image: "src/assets/wmremove-transformed.jpeg", hint: "It's all about taking urgent action to combat climate change." },
  { question: "Which goal promotes gender equality?", image: "https://gosharpener.com/content/uploads/photos/2024/09/sngine_dcb0169096430d9a40dd0a232003d1c7.jpg", hint: "SDG 5 aims to achieve gender equality and empower all women and girls." }
];


const MissionSection = () => {
    // Animation variants (remain the same)
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.5,
            },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 20,
                delay: 0.7,
            },
        },
    };

    return (
        <motion.div
        className="mt-16 px-4 md:px-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        >
          <motion.h2 className="text-4xl md:text-4xl ml-0 font-bold text-teal-800">
                   Our Mission?
                </motion.h2>
           
                    <p className="text-black mt-2 ml-5 relative left-0 text-md leading-relaxed">
                    Empowering minds through interactive learning, Awareness and Action Towards Sustaiable Development Goals. SDG Quest&#39;s mission is to inspire and educate individuals about the 17 Sustainable Development Goals.                        We not only Raises Awareness of SDGs but also promotes active participation through gamified learningand actionable advice. It bridges te Gap between Knowledge and action, empowring users  to contribute meaningfully to global sustainability efforts.
                    </p>
                    <motion.button className=" mt-5 px-1 py-1 ml-5 bg-teal-600 text-white rounded-lg hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-800 transition w-[130px]" whileHover={{ scale: 1.05 }}
                    onClick={() => navigate("/about")}>Learn More</motion.button>

            {/* Two-Section Layout */}
            
                
                
                    {/* Services Provided Section */}
            <motion.ul className="mt-5 ml-0 relative  grid grid-cols-1  flex items-center md:grid-cols-2 gap-8 text-teal-700" variants={textVariants}> 
              {/* Responsive grid */}
                <li className= "text-black rounded-lg shadow-md bg-gray-50 px-2 py-3">
                    <h3 className="text-lg font-medium">Goal&#39;s Content</h3>
                    <p className="mt-1">In-depth information such as overview, key-points, learning respurces on each of the 17 SDG goals.</p>
                </li>
                <li className= "text-black rounded-lg shadow-md bg-gray-50 px-2 py-3">
                    <h3 className="text-lg font-medium">Goal&#39;s Quizzes</h3>
                    <p className="mt-1">Test your knowledge and understanding of each SDG with interactive quizzes.</p>
                </li>
                <li className= "text-black rounded-lg shadow-md bg-gray-50 px-2 py-3">
                    <h3 className="text-lg font-medium">Learning Progress Tracking</h3>
                    <p className="mt-1">Monitor your progress and rewards in your profile as you learn about the SDGs.</p>
                </li>
                <li className= "text-black rounded-lg shadow-md bg-gray-50 px-2 py-3">
                    <h3 className="text-lg font-medium">Rewards & Badges</h3>
                    <p className="mt-1">Earn rewards and badges for completing quizzes and achieving milestones.</p>
                </li>
            </motion.ul>
            <div className="shadow-md rounded-lg bg-teal-700 text-center p-4 mt-15 ml-0 "> {/* Aligned text */}
                        <h3 className="text-2xl text-center font-semibold text-white mb-8">
                            Inspiration of the Day
                        </h3>
                        <p className="text-center italic text-white text-lg">
                            `Be the change that you wish to see in the world. – Mahatma Gandhi`
                        </p>
                    </div>
                
                    <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <div>
                    <motion.h2 className="text-4xl font-bold text-teal-800 mb-4">
                        Who Are We...?
                    </motion.h2>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        Welcome to SDG Quest, your interactive platform dedicated to educating individuals on the 17 Sustainable Development Goals. We go beyond typical education, inspiring meaningful actions and empowering learners with tools to master sustainability.
                    </p>
                </div>
                <img
                    src={missionImage1}
                    alt="Who We Are"
                    className="max-w-[300px] w-full md:max-w-[400px] rounded-lg shadow-md"
                />
            </motion.div>

            {/* Section: Why Choose Us? */}
            <motion.div
                className="mt-15 grid grid-cols-1 md:grid-cols-2 gap-8"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <img
                    src={missionImage2}
                    alt="Why Choose Us"
                    className="max-w-[300px] w-full md:max-w-[400px] rounded-lg shadow-md"
                />
                <div>
                    <motion.h3 className="text-4xl font-bold text-teal-800 mb-4">
                        Why Choose Us...?
                    </motion.h3>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">
                        SDG Quest offers tailored learning experiences, including goal-specific content, engaging quizzes, progress tracking, and reward systems that recognize your efforts and inspire you to achieve more. Master SDGs while earning badges that reflect your growing expertise.
                    </p>
                </div>
            </motion.div>
        </motion.div>
            
            );  
          };
const ResourceCarousel = () => {
  const carouselRef = useRef(null);
  const scroll = (direction) => {
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({ left: direction === "left" ? -scrollAmount : scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="mt-5 w-full max-w-7xl mx-auto relative">
      <h2 className="text-3xl font-bold mt-14 text-center text-teal-700">Featured Resources</h2>
      <button className="absolute mr-50 top-53 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-500 transition" onClick={() => scroll("left")}>
        <FaChevronLeft size={24} />
      </button>
  
      <div ref={carouselRef} className="flex mt-5 overflow-hidden space-x-4 px-3">
        {videos.map((video) => (
          <div key={video.id} className="p-1 min-w-[200px] flex-shrink-0">
            <div className="video-responsive">
              <iframe title={video.title} src={`https://www.youtube.com/embed/${video.id}`} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-48 rounded-lg shadow-lg" />
            </div>
            <p className="mt-2 text-lg text-center text-gray-800 font-semibold">{video.title}</p>
          </div>
        ))}
      </div>
      <button className="absolute ml-305 top-53 transform -translate-y-1/2 bg-teal-600 text-white p-2 rounded-full shadow-md hover:bg-teal-500 transition" onClick={() => scroll("right")}>
        <FaChevronRight size={24} />
      </button>
    </div>
  );
}  
const ShuffleCard = () => {
  const [index, setIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const shuffleCards = () => {
    setShowHint(false);
    const randomIndex = Math.floor(Math.random() * flashcards.length);
    setIndex(randomIndex);
  };

  return (
    <div><h3 className="ml-35 relative left-60 text-4xl font-bold text-teal-800 mt-5">Try Shuffling the Cards!</h3>
    <div className=" ml-48 center w-200 flex flex-col mt-5 items-start bg-white p-6 rounded-2xl shadow-xl">
      
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -30 }} transition={{ duration: 0.5 }} className="text-center">
        <h2 className="text-2xl mr-70 font-bold text-teal-700 mb-4">{flashcards[index].question}</h2>
        <img src={flashcards[index].image} alt="Flashcard Visual" className="w-200 h-60 object-cover rounded-lg shadow-md mb-4" />
      </motion.div>
      {showHint && (
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }} className="center text-gray-700 mt-2">
          {flashcards[index].hint}
        </motion.p>
      )}
      <div className="flex justify-center gap-4 mt-4">
        <button onClick={shuffleCards} className="px-4 py-2 bg-teal-700 text-white rounded-lg flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
          <FaShuffle /> Shuffle
        </button>
        <button onClick={() => setShowHint(!showHint)} className="px-4 py-2 bg-yellow-500 text-white rounded-lg flex items-center gap-2 shadow-md hover:scale-105 transition-transform">
          <FaLightbulb /> Hint
        </button>
      </div>
    </div>
    </div>
  );
};

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <Header /><br/><br/><br/>
      <div className="w-full bg-gray-100 p-20 flex flex-col items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <div className="text-left mr-20">
            <h1 className="text-3xl font-bold text-teal-800">Welcome to <br/><b>SDG Quest</b>  -Track your journey toward mastering SDGs!</h1>
            <span className="text-lg ml-40 text-teal-700 mb-1"></span>
            <p className="text-gray-700 mb-4">Chart your path to a sustainable future—discover, engage, and transform the world with SDG Quest as your guide to mastering meaningful change.</p>
          </div>
          <motion.img src={homeImg} alt="Illustration of Sustainable Development Goals" className="max-w-300 md:max-w-md  lg:max-w-lg h-74 w-400 rounded-xl shadow-lg" whileHover={{ scale: 1.05 }} />
        </div>

        <MissionSection />
        
       
                   <section className="py-10 px-10 md:px-10 bg-gray-40">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Two-column grid */}
                    <ShuffleCard />
                    
                </div>
            </section>

        <ResourceCarousel />

        <div className="flex justify-between items-center gap-6 mt-10 w-full max-w-4xl">
                  
        </div>

        </div>
      <Footer />
    </>
  );
}

export default HomePage;
