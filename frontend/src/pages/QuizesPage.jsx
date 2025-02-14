// import { useState, useEffect } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { motion } from "framer-motion";

// function QuizPage() {
//     const { goalId } = useParams();
//     const navigate = useNavigate();
    
//     const [quiz, setQuiz] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [currentQuestion, setCurrentQuestion] = useState(0);
//     const [selectedOption, setSelectedOption] = useState(null);
//     const [score, setScore] = useState(0);
//     // const [totalPoints, setTotalPoints] = useState(0);

//     const [showResult, setShowResult] = useState(false);
//     const [allQuizzes, setAllQuizzes] = useState([]);
//     const [isAllQuizzesCompleted, setIsAllQuizzesCompleted] = useState(false);

//     // Reset states when goalId changes
//     useEffect(() => {
//         setCurrentQuestion(0);
//         setSelectedOption(null);
//         setScore(0);
//         setShowResult(false);
//         setLoading(true);
//     }, [goalId]);

//     useEffect(() => {
//         const fetchQuizzes = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:5005/api/quizzes/1`);
//                 console.log(response.data)
//                 setAllQuizzes(response.data);
                
//                 // Find the quiz for current goalId
//                 // const foundQuiz = response.data.find(
//                 //     (q) => String(q.goalId) === String(goalId)
//                 // );
                
//                 // if (foundQuiz) {
//                     setQuiz(response.data);
//                 // } else {
//                 //     console.log("No quiz found for goalId:", goalId);
//                 // }
//             } catch (error) {
//                 console.error("Error fetching quizzes:", error);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchQuizzes();
//         // fetchTotalPoints();
//     }, [goalId]);

//     const handleOptionSelect = (option) => {
//         setSelectedOption(option);
//         if (option.isCorrect) {
//             setScore(score + 1);
//         }
//     };

//     const handleNext = async () => {
//         if (currentQuestion < quiz.length - 1) {
//             setCurrentQuestion(currentQuestion + 1);
//             setSelectedOption(null);
//         } else {
//             setShowResult(true);
            
//             // Save the current quiz score
//             await saveScore(score); 
    
//             // Fetch updated total points after saving score
//             // await fetchTotalPoints();
//         }
//     };
    
//     const saveScore = async (quizScore) => {
//         try {
//             const token = localStorage.getItem('token');
//             if (!token) {
//                 alert("No token found!");
//                 return;
//             }
    
//             // const userId = localStorage.getItem('userId');  // Assuming you stored userId in localStorage
//             // if (!userId) {
//             //     alert("User not logged in!");
//             //     return;
//             // }
    
//             const response = await axios.post('http://localhost:5005/api/scores', {
//                 userId,             
//                 quizId: "679f53b42151bff9a541565c",     
                           
//                 score: quizScore,
//                 totalQuestions: quiz.questions.length  // Ensure you send this value
//             },
//             //  {
//             //     headers: {
//             //         'Authorization': `Bearer ${token}`
//             //     }
//             );
    
//             console.log('Score saved successfully:', response.data);
//         } catch (error) {
//             console.error('Error saving score:', error);
//             alert("Error saving score. Please try again later.");
//         }
//     };
    

// //   const fetchTotalPoints = async () => {
// //       try {
// //           const token = localStorage.getItem('token');
// //           if(!token){
// //             console.error("No token found!")
// //             return;
// //           }
// //           const response = await axios.get('http://localhost:5005/api/scores/total', {
// //               headers: { 'Authorization': `Bearer ${token}` }
// //           });
// //           setTotalPoints(response.data.totalPoints);
// //       } catch (error) {
// //           console.error('Error fetching total points:', error);
// //           setTotalPoints(0); //Set to 0 to prevent displaying undefined
// //           alert("Error fetching total points. Please try again later.");
// //       }
// //   };

  
//     const handleNextQuiz = () => {
//         const currentQuizIndex = allQuizzes.findIndex(
//             q => String(q.goalId) === String(goalId)
//         );
        
//         if (currentQuizIndex !== -1 && currentQuizIndex < allQuizzes.length - 1) {
//             const nextQuiz = allQuizzes[currentQuizIndex + 1];
           
//             navigate(`/quiz/${nextQuiz.goalId}`);
//         } else {
            
//           setIsAllQuizzesCompleted(true); 
//         }
//     };
//     if (isAllQuizzesCompleted) {
//       return (
//           <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//               <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-md">
//                   <h2 className="text-3xl font-bold text-teal-700 mb-4">
//                       Congratulations! 🎉
//                   </h2>
//                   <p className="text-xl text-gray-700 mb-6">
//                       You have completed all available quizzes!
//                   </p>
//                   <div className="space-y-4">
//                       <p className="text-gray-600">
//                           Thank you for participating in our SDG quiz journey.
//                       </p>
//                       <button 
//                           onClick={() => navigate('/')} 
//                           className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors"
//                       >
//                           Return to Home
//                       </button>
//                   </div>
//               </div>
//           </div>
//       );
//   }

//     if (loading) {
//         return (
//             <div className="flex justify-center items-center h-screen">
//                 <div className="text-center p-4">
//                     <div className="spinner">Loading...</div>
//                 </div>
//             </div>
//         );
//     }

//     // Show error if no quiz found
//     if (!quiz) {
//         return (
//             <div className="text-center p-4">
//                 <p>No quiz found for this goal</p>
//                 <button 
//                     onClick={() => navigate('/')} 
//                     className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-lg"
//                 >
//                     Back to Home
//                 </button>
//             </div>
//         );
//     }

//     return (
//       <div className="flex flex-col items-center mt-8 p-4 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
//       <div className="w-full flex justify-between items-center mb-4">
//           <h1 className="text-2xl font-bold">Quiz for Goal {goalId}</h1>
//           {/* <div className="bg-teal-700 text-white px-4 py-2 rounded-lg">
//               Total Points: {totalPoints}
//           </div> */}
//       </div>

//             {/* Progress Bar */}
//             <div className="w-full bg-gray-300 h-2 rounded-full mb-4 relative">
//                 <motion.div
//                     initial={{ width: 0 }}
//                     animate={{ width: `${((currentQuestion + 1) / quiz.question?.length) * 100}%` }}
//                     transition={{ duration: 0.5 }}
//                     className="bg-teal-500 h-2 rounded-full"
//                 ></motion.div>
//             </div>

//             {/* Question and Options */}
//             {!showResult ? (
//                 <div className="w-full p-4 text-center">
//                     <h2 className="text-2xl font-bold text-teal-700 mb-6">
//                         {quiz[currentQuestion].question}
//                     </h2>
//                     <div className="grid grid-cols-1 gap-4">
//                         {quiz[currentQuestion].options.map((option, index) => (
//                             <button
//                                 key={index}
//                                 onClick={() => handleOptionSelect(option)}
//                                 disabled={selectedOption !== null}
//                                 className={`w-full p-4 text-left rounded-lg border shadow-md transition-all duration-300 text-gray-900 hover:shadow-lg hover:bg-gray-200 ${
//                                     selectedOption === option 
//                                         ? option.isCorrect 
//                                             ? "bg-green-500 text-white"
//                                             : "bg-red-500 text-white"
//                                         : ""
//                                 }`}
//                             >
//                                 {option.text}
//                             </button>
//                         ))}
//                     </div>
//                     {selectedOption && (
//                         <button
//                             onClick={handleNext}
//                             className="mt-4 bg-teal-700 text-white px-4 py-2 rounded-lg w-full shadow-md hover:shadow-lg"
//                         >
//                             Next Question
//                         </button>
//                     )}
//                 </div>
//             ) : (
//                 <div className="text-center">
//                     <h2 className="text-2xl font-bold mb-4">Quiz Complete!</h2>
//                     <p className="text-xl">Your score: {score} out of {quiz.questions.length}</p>
//                     <div className="mt-4 space-x-4">
//                         <button 
//                             onClick={handleNextQuiz} 
//                             className="bg-teal-700 text-white px-4 py-2 rounded-lg"
//                         >
//                             Next Quiz
//                         </button>
//                         <button 
//                             onClick={() => navigate('/')} 
//                             className="bg-gray-500 text-white px-4 py-2 rounded-lg"
//                         >
//                             Back to Home
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default QuizPage;



































import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
// import { useParams } from "react-router-dom";

function QuizPage() {
    const { goalId } = useParams();
    const navigate = useNavigate();

    const [quiz, setQuiz] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [allQuizzes, setAllQuizzes] = useState([]);

    // const { id } = useParams()

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
                const response = await axios.get("http://localhost:5005/api/quizzes");
                setAllQuizzes(response.data);

                // Find quiz based on goalId
                const foundQuiz = response.data.find(q => String(q.goalId) === String(goalId));
                if (foundQuiz) {
                    setQuiz(foundQuiz);
                } else {
                    console.log("No quiz found for goalId:", goalId);
                    setQuiz(null);
                }
            } catch (error) {
                console.error("Error fetching quizzes:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchQuizzes();
    }, [goalId]);

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        if (option.isCorrect) {
            setScore(prevScore => prevScore + 1);
        }
    };

    const handleNext = async () => {
        if (quiz && currentQuestion < quiz.questions.length - 1) {
            setCurrentQuestion(prev => prev + 1);
            setSelectedOption(null);
        } else {
            setShowResult(true);
            await saveScore(score, quiz._id);
        }
    };

    const saveScore = async (quizScore) => {
      try {
          const token = await localStorage.getItem('token');
          const userId = await localStorage.getItem("userId"); // Ensure userId is stored in localStorage
          // console.log("vsahahjbsh",userId)
          console.log(userId)
          if (!token || !userId) {
              alert("User not authenticated!");
              navigate('/login'); // Redirect to login if not authenticated
              return;
          }

  
          const response = await axios.post(
              'http://localhost:5005/api/scores/submit',
              {
                  userId,
                  goalId: goalId,
                  quizId: "679f53b42151bff9a541565c",  // Use the actual quiz ID
                  score: quizScore,
                  totalQuestions: quiz.questions.length
              },
              {
                  headers: {
                      'Authorization': `Bearer ${token}`,
                      'Content-Type': 'application/json'
                  }
              }
          );
  
          console.log('Score saved successfully:', response.data);
      } catch (error) {
          console.error('Error saving score:', error);
          alert("Error saving score. Please try again later.");
      }
  };
  

    const handleNextQuiz = () => {
        const currentQuizIndex = allQuizzes.findIndex(q => String(q.goalId) === String(goalId));

        if (currentQuizIndex !== -1 && currentQuizIndex < allQuizzes.length - 1) {
            const nextQuiz = allQuizzes[currentQuizIndex + 1];
            navigate(`/quiz/${nextQuiz.goalId}`);
        } else {
            navigate("/");
        }
    };

    if (loading) {
        return <div className="text-center p-4">Loading...</div>;
    }

    if (!quiz) {
        return (
            <div className="text-center p-4">
                <p>No quiz found for this goal.</p>
                <button onClick={() => navigate("/")} className="bg-teal-700 text-white px-4 py-2 rounded-lg">
                    Back to Home
                </button>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center mt-8 p-4 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
            <h1 className="text-2xl font-bold">Quiz for Goal {goalId}</h1>

            <div className="w-full bg-gray-300 h-2 rounded-full mb-4">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className="bg-teal-500 h-2 rounded-full"
                />
            </div>

            {!showResult ? (
                <div className="w-full p-4 text-center">
                    <h2 className="text-2xl font-bold text-teal-700 mb-6">{quiz.questions[currentQuestion]?.question}</h2>
                    <div className="grid grid-cols-1 gap-4">
                        {quiz.questions[currentQuestion]?.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => handleOptionSelect(option)}
                                disabled={selectedOption !== null}
                                className={`w-full p-4 text-left rounded-lg border shadow-md transition-all duration-300 ${
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
                        <button onClick={handleNextQuiz} className="bg-teal-700 text-white px-4 py-2 rounded-lg">
                            Next Quiz
                        </button>
                        <button onClick={() => navigate("/")} className="bg-gray-500 text-white px-4 py-2 rounded-lg">
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default QuizPage;
