// To send dat in backend

const connectDB = require("./db/connect");
// const Quiz = require("./models/Quiz");
// const QuizJson = require("./quiz.json");
const start = async () =>{
    try{
        await connectDB(process.env.MONGODB_URL);
        // await Quiz.create(QuizJson);
        console.log("success");

    }
    catch(error){
        console.log(error);
    }
};


start();