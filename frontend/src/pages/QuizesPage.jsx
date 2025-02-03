import { useEffect, useState } from 'react';
import axios from 'axios';

const Quiz = () => {
  const [quizzes, setQuizzes] = useState([]);  // Should be an array
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const response = await axios.get('/api/quizzes');  // Fetch all quizzes
        setQuizzes(response.data);  // Ensure data is an array
      } catch (error) {
        console.error('Error fetching quizzes:', error);
      } finally {
        setLoading(false);  // Stop loading
      }
    };

    fetchQuizzes();
  }, []);

  const handleOptionClick = (question, option, isCorrect) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [question]: { option, isCorrect },
    }));
  };

  const calculateScore = () => {
    const correctAnswers = Object.values(selectedAnswers).filter(ans => ans.isCorrect).length;
    return `Your Score: ${correctAnswers} / ${Object.keys(selectedAnswers).length}`;
  };

  if (loading) return <p>Loading quizzes...</p>; // Handle loading state
  if (!Array.isArray(quizzes) || quizzes.length === 0) return <p>No quizzes found.</p>; // Handle empty data

  return (
    <div>
      {quizzes.map((quiz) => (
        <div key={quiz._id} className="quiz-container">
          <h2>{quiz.goalName}</h2>
          {quiz.questions.map((question, qIndex) => (
            <div key={qIndex} className="question-block">
              <h4>{question.question}</h4>
              {question.options.map((option, oIndex) => (
                <button
                  key={oIndex}
                  onClick={() => handleOptionClick(question._id, option._id, option.isCorrect)}
                  className={`option-button ${
                    selectedAnswers[question._id]?.optionId === option._id
                      ? option.isCorrect
                        ? 'correct'
                        : 'incorrect'
                      : ''
                  }`}
                >
                  {option.text}
                </button>
              ))}
            </div>
          ))}
        </div>
      ))}
      <button onClick={calculateScore} className="submit-button">Submit Quiz</button>
    </div>
  );
};

export default Quiz;



