const Quiz = require("../models/quiz");

const getAllQuizzes = async (req, res) => {
    try {
        const myData = await Quiz.find({});
        console.log("Backend Data:", myData); // Log the data
        res.status(200).json({ myData });
    } catch (error) {
        console.error("Backend Error:", error);
        res.status(500).json({ message: "Error fetching quizzes", error });
    }
};


module.exports = {getAllQuizzes};

