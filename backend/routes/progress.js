const express = require("express");
const Score = require("../models/progressTracking");
const { authenticateUser } = require("../middleware/auth");

const router = express.Router();

// Existing route for saving scores
router.post("/api/scores", authenticateUser, async (req, res) => {
    const { userId } = req;
    const { quizId, score } = req.body;

    try {
        // Assign badges based on the score
        let badge = "Normal";
        if (score >= 80) badge = "Gold";
        else if (score >= 45) badge = "Silver";
        else if (score >= 25) badge = "Bronze";

        // Save the score and badge in the database
        const newScore = new Score({ userId, quizId, score, badge });
        await newScore.save();

        res.status(201).json(newScore);
    } catch (error) {
        res.status(500).json({ error: "Failed to save the score." });
    }
});

// Add your new route for total scores
router.get("/api/scores/total", authenticateUser, async (req, res) => {
    const { userId } = req; // Assuming userId is attached from the authenticateUser middleware

    try {
        const totalScore = await Score.aggregate([
            { $match: { userId: userId } },
            { $group: { _id: null, total: { $sum: "$score" } } }
        ]);

        // Return 0 if no scores found
        res.json({ total: totalScore.length ? totalScore[0].total : 0 });
    } catch (error) {
        res.status(500).json({ error: "Failed to retrieve total score." });
    }
});

module.exports = router;


