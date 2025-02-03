const mongoose = require('mongoose');

const quizSchema = new mongoose.Schema({
  goalId: {
    type: Number,  // Changed from Number to String
    required: true,
    unique: true,
  },
    goalName: {
      type: String,
      required: true,
    },
    questions: [{
      question: {  // Changed from questionText
        type: String,
        required: true
      },
      options: [{
        text: {     // Added nested structure for options
          type: String,
          required: true
        },
        isCorrect: {
          type: Boolean,
          required: true
        }
      }]
    }]
  });
  

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;

