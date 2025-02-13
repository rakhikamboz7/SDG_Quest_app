// scoresSchema.js
const mongoose = require('mongoose');

const scoreSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // User ID (e.g., from authentication)
  quizId: { type: String, required: true },  // Quiz ID (likely your goalId)
  score: { type: Number, required: true },   // Score achieved
  timestamp: { type: Date, default: Date.now } // Timestamp for when the score was recorded
});

module.exports = mongoose.model('Score', scoreSchema);
