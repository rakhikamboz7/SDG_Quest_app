const Score = require("../models/Score");
const User = require("../models/user");

exports.submitScore = async (req, res) => {
  console.log(req.body)
  try {
    const { userId, quizId, score, totalQuestions } = req.body;
    // Validate input
    if (!userId || !quizId || score === undefined || !totalQuestions) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // Save the score in the database
    const newScore = new Score({
      userId,
      quizId,
      // goalId: 1,
      score,
      totalQuestions
    });

    await newScore.save();

    // Calculate reward points (10 points per correct answer)
    const pointsEarned = score * 10;

    // Update user's reward points
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ error: "User not found" });

    user.rewardPoints += pointsEarned;
    await user.save();

    res.json({ message: "Score submitted successfully", score, pointsEarned, totalPoints: user.rewardPoints });
  } catch (error) {
    console.error("Error submitting score:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};










exports.getScores = async (req, res) => {
  try {
      const { userId } = req.params;
      console.log(userId)
      const userScores = await Score.find({ userId });
      console.log(userScores)
      if (!userScores || userScores.length === 0) {
          return res.status(404).json({ message: "No scores found for this user" });
      }

      // const totalScore = userScores.reduce((sum, score) => sum + score.score, 0);

      res.json({ userScores });
  } catch (error) {
      console.error("Error fetching user score:", error);
      res.status(500).json({ message: "Internal server error" });
  }
};

