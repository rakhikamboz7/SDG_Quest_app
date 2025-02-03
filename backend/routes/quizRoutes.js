const express = require("express");
const router = express.Router();
const Quiz = require("../models/Quiz"); // Import your model
const mongoose = require("mongoose");

// Get quiz by either goalId (Number) or _id (ObjectId)
// Get all quizzes
router.get("/api/quizzes", async (req, res) => {
    try {
      const quizzes = await Quiz.find();
      res.json(quizzes); // Returns an array of quizzes
    } catch (error) {
      console.error("Error fetching quizzes:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  

module.exports = router;

