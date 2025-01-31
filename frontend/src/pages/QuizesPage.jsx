import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

const quizQuestions = [
  {
    question: "What is the main objective of SDG 1?",
    options: [
      { text: "End Poverty", isCorrect: true },
      { text: "Quality Education", isCorrect: false },
      { text: "Climate Action", isCorrect: false },
      { text: "Gender Equality", isCorrect: false }
    ]
  },
  {
    question: "What is the key focus of SDG 2?",
    options: [
      { text: "Zero Hunger", isCorrect: true },
      { text: "Clean Water", isCorrect: false },
      { text: "Life Below Water", isCorrect: false },
      { text: "Affordable Energy", isCorrect: false }
    ]
  },
  {
    question: "Which SDG focuses on Clean Water & Sanitation?",
    options: [
      { text: "SDG 6", isCorrect: true },
      { text: "SDG 4", isCorrect: false },
      { text: "SDG 8", isCorrect: false },
      { text: "SDG 10", isCorrect: false }
    ]
  },
  {
    question: "Which SDG focuses on Climate Action?",
    options: [
      { text: "SDG 13", isCorrect: true },
      { text: "SDG 12", isCorrect: false },
      { text: "SDG 9", isCorrect: false },
      { text: "SDG 3", isCorrect: false }
    ]
  },
  {
    question: "What is the aim of SDG 5?",
    options: [
      { text: "Gender Equality", isCorrect: true },
      { text: "Life on Land", isCorrect: false },
      { text: "Industry & Innovation", isCorrect: false },
      { text: "Peace & Justice", isCorrect: false }
    ]
  }
];

function SDGQuiz() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsCorrect(option.isCorrect);
  };

  const handleSubmit = () => {
    if (selectedOption) {
      if (isCorrect) {
        setCorrectCount(correctCount + 1);
      } else {
        setWrongCount(wrongCount + 1);
      }
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsCorrect(null);
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {!quizStarted ? (
        <div className="bg-[#036666] p-10 rounded-lg shadow-lg text-center border border-[#025f5f] text-white">
          <h1 className="text-3xl font-bold text-white drop-shadow-md">
            Sustainable Development Goals Quiz
          </h1>
          <p className="mt-3 text-gray-200 text-lg">
            Test your knowledge about the SDGs!
          </p>
          <button
            className="bg-yellow-500 text-white px-5 py-3 rounded-md text-lg mt-5 hover:bg-yellow-600 transition duration-300 shadow-md"
            onClick={() => setQuizStarted(true)}
          >
            Start Quiz
          </button>
        </div>
      ) : (
        <div
          className="bg-white p-8 rounded-lg shadow-xl text-left border border-gray-300 w-3/4 max-w-2xl relative"
          style={{ boxShadow: "0 5px 15px rgba(0,0,0,0.35)" }}
        >
          <h2 className="text-2xl font-semibold text-[#036666]">
            Question {currentQuestion + 1}
          </h2>
          <p className="mt-4 text-lg text-gray-700">
            {quizQuestions[currentQuestion].question}
          </p>
          <div className="mt-6 space-y-3">
            {quizQuestions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`w-full flex items-center justify-between bg-gray-100 py-3 px-5 rounded-lg text-lg font-medium text-gray-800 shadow-md hover:bg-[#036666] hover:text-white transition-all duration-300 ${
                  selectedOption === option
                    ? isCorrect
                      ? "bg-green-500 text-white"
                      : "bg-red-500 text-white"
                    : ""
                }`}
                onClick={() => handleOptionClick(option)}
              >
                {option.text}
                {selectedOption === option &&
                  (isCorrect ? (
                    <CheckCircle className="text-white" />
                  ) : (
                    <XCircle className="text-white" />
                  ))}
              </button>
            ))}
          </div>
          <div className="flex space-x-4 mt-6">
            <button
              className="bg-yellow-500 text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-yellow-600 transition-all duration-300"
              onClick={handleSubmit}
            >
              Submit Answer
            </button>
            {selectedOption && currentQuestion < quizQuestions.length - 1 && (
              <button
                className="bg-[#036666] text-white px-6 py-3 rounded-lg text-lg shadow-md hover:bg-[#025f5f] transition-all duration-300"
                onClick={handleNext}
              >
                Next Question
              </button>
            )}
          </div>
          <p className="mt-4 text-sm text-gray-600">
            ✅ Correct: {correctCount} | ❌ Wrong: {wrongCount}
          </p>
        </div>
      )}
    </div>
  );
}

export default SDGQuiz;
