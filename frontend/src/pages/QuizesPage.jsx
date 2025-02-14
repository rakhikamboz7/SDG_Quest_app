import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

function QuizPage() {
    const { goalId } = useParams();
    const navigate = useNavigate();
    
    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    // const [totalPoints, setTotalPoints] = useState(0);

    const [showResult, setShowResult] = useState(false);
    const [allQuizzes, setAllQuizzes] = useState([]);
    const [isAllQuizzesCompleted, setIsAllQuizzesCompleted] = useState(false);

    // Reset states when goalId changes
    useEffect(() => {
        setCurrentQuestion(0);
        setSelectedOption(null);
        setScore(0);
        setShowResult(false);
        setLoading(true);
    }, [goalId]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            try {
                const response = await axios.get(`http://localhost:5005/api/quizzes`);
                setAllQuizzes(response.data.myData);
                
                // Find the quiz for current goalId
                const foundQuiz = response.data.myData.find(
                    (q) => String(q.goalId) === String(goalId)
                );
                
                if (foundQuiz) {
                    setQuiz(foundQuiz);
                } else {
                    console.log("No quiz found for goalId:", goalId);
                }
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
        // fetchTotalPoints();
    }, [goalId]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (option.isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNext = async () => {
        if (currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
            
            // Save the current quiz score
            await saveScore(score); 
    
            // Fetch updated total points after saving score
            // await fetchTotalPoints();
        }
    };
    
    const saveScore = async () => {
        try {
            console.log("Sending Data:", {
                userId,
                goalId,
                totalQuestions: quizzes.length,
                correctAnswers: score
            });
    
            await axios.post('http://localhost:5005/api/scores', {
                userId,
                goalId,
                totalQuestions: quizzes.length,
                correctAnswers: score
            });
    
            console.log("Score saved successfully!");
        } catch (error) {
            console.error("Error saving score:", error.response?.data || error.message);
        }
    };
    

  
    const handleNextQuiz = () => {
        const currentQuizIndex = allQuizzes.findIndex(
            q => String(q.goalId) === String(goalId)
        );
        
        if (currentQuizIndex !== -1 && currentQuizIndex < allQuizzes.length - 1) {
            const nextQuiz = allQuizzes[currentQuizIndex + 1];
           
            navigate(`/quiz/${nextQuiz.goalId}`);
        } else {
            
          setIsAllQuizzesCompleted(true); 
        }
    };
    if (isAllQuizzesCompleted) {
      return (
          <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
                  <h2 className="text-3xl font-bold text-teal-700 mb-4">
                      Congratulations! 🎉
                  </h2>
                  <p className="text-xl text-gray-700 mb-6">
                      You have completed all available quizzes!
                  </p>
                  <div className="space-y-4">
                      <p className="text-gray-600">
                          Thank you for participating in our SDG quiz journey.
                      </p>
                      <button 
                          onClick={() => navigate('/')} 
                          className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
                      >
                          Return to Home
                      </button>
                  </div>
              </div>
          </div>
      );
  }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center p-4">
                    <div className="spinner">Loading...</div>
                </div>
            </div>
        );
    }

    // Show error if no quiz found
    if (!quiz) {
        return (
            <div className="text-center p-4">
                <p>No quiz found for this goal</p>
                <button 
                    onClick={() => navigate('/')} 
                    className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-lg"
                >
                    Back to Home
                </button>
            </div>
        );
    }

    return (
      <div className="flex flex-col items-center mt-8 p-4 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
      <div className="w-full flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Quiz for Goal {goalId}</h1>
          
      </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-300 h-2 rounded-full mb-4 relative">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-teal-500 h-2 rounded-full"
                ></motion.div>
            </div>

            {/* Question and Options */}
            {!showResult ? (
                <div className="w-full p-4 text-center">
                    <h2 className="text-2xl font-bold text-teal-700 mb-6">
                        {quiz.questions[currentQuestion].question}
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        {quiz.questions[currentQuestion].options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionSelect(option)}
                                disabled={selectedOption !== null}
                                className={`w-full p-4 text-left rounded-lg border shadow-md transition-all duration-300 text-gray-900 hover:shadow-lg hover:bg-gray-200 ${
                                    selectedOption === option 
                                        ? option.isCorrect 
                                            ? "bg-green-500 text-white"
                                            : "bg-red-500 text-white"
                                        : ""
                                }`}
                            >
                                {option.text}
                            </button>
                        ))}
                    </div>
                    {selectedOption && (
                        <button
                            onClick={handleNext}
                            className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-lg w-full shadow-md hover:shadow-lg"
                        >
                            Next Question
                        </button>
                    )}
                </div>
            ) : (
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
                    <p className="text-xl">Your score: {score} out of {quiz.questions.length}</p>
                    <div className="mt-4 space-x-4">
                        <button 
                            onClick={handleNextQuiz} 
                            className="bg-teal-700 text-white px-4 py-2 rounded-lg"
                        >
                            Next Quiz
                        </button>
                        <button 
                            onClick={() => navigate('/')} 
                            className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuizPage;



