const express = require("express");
const Score = require("../models/scoresSchema"); // Import your Mongoose Score model
const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { userId, quizId,  score, totalQuestions } = req.body;
        
        if (!userId || !quizId ||  score === undefined || !totalQuestions) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        const newScore = new Score({ userId, quizId,  score, totalQuestions });
        await newScore.save();

        res.status(201).json({ message: "Score saved successfully", newScore });
    } catch (error) {
        console.error("Error saving score:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

module.exports = router;

