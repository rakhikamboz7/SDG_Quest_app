const express = require("express");
const router = express.Router();
 // Import your model


const{getAllQuizzes} =require("../controllers/quiz");
router.route("/").get(getAllQuizzes);
// router.get("/api/quizzes", async (req, res) => {
//     try {
//       const quizzes = await Quiz.find();
//       console.log(quizzes)
//       res.json(quizzes); // Returns an array of quizzes
//     } catch (error) {
//       console.error("Error fetching quizzes:", error);
//       res.status(500).json({ error: "Internal Server Error" });
//     }
//   });
  

module.exports = router;

