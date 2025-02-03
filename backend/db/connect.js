const mongoose = require("mongoose");


uri= "mongodb+srv://SdgQuest:UIwYDuJdEJDPo8sn@sdgquest.owjvb.mongodb.net/goals?retryWrites=true&w=majority";
const connectDB = () => {
    
    console.log("conncted db");
    return mongoose.connect(uri, {
        
    });
};
``
module.exports =connectDB