require("dotenv").config();
const express = require("express");
const cors = require("cors");
const multer = require("multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const Quiz = require("./models/quiz");
const scoreRoutes = require('./routes/scoreRoutes');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5005;
const JWT_SECRET = process.env.JWT_SECRET || "your_secret_key";

// Database Connection
const connectDB = require("./db/connect");


// User Schema and Model
const UserSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  image: String,
});

const User = mongoose.model("User", UserSchema);

// const ImageSchema = new mongoose.Schema({
//   profilePicture: String,

// });

// const Image = mongoose.model("Image", ImageSchema)

const storage = multer.diskStorage({
  destination: "./uploads/", // Store images in 'uploads' folder
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// // API to upload and update user profile image
// router.post("/upload-profile", upload.single("profilePicture"), async (req, res) => {
//   try {
//     const { userId } = req.body;
//     const imagePath = `/uploads/${req.file.filename}`; // Save the image path

//     const user = await User.findByIdAndUpdate(userId, { profilePicture: imagePath }, { new: true });

//     res.json({
//       message: "Profile image updated successfully",
//       profilePicture: `http://localhost:5005${user.profilePicture}`,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error uploading image", error });
//   }
// });



// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(scoreRoutes);

// Middleware to verify token and extract userId
const authenticateUser = async (req, res, next) => {
  try {
    console.log("Tokemn----->", token)
      const token = req.headers.authorization?.split(' ')[1];
      
      if (!token) {
          return res.status(401).json({ error: 'No token provided' });
      }

      const decoded = jwt.verify(token, JWT_SECRET);
      req.userId = decoded.id;  // Add userId to request object
      next();
  } catch (error) {
      res.status(401).json({ error: 'Invalid token' });
  }
};

// Use middleware in routes
app.post('/api/scores', async (req, res) => {
  // Now you can access req.userId here
  const { points, quizId } = req.body;
  const userId = req.userId;  // Get userId from middleware

  try {
      const newScore = new Score({
          userId,
          quizId,
          points
      });
      await newScore.save();
      res.json({ message: 'Score saved successfully' });
  } catch (error) {
      res.status(500).json({ error: 'Error saving score' });
  }
});




// Test Route
app.get("/", (req, res) => {
  res.send("Hi, I am live");
});

// Register Endpoint
app.post("/register", upload.single("image"), async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image: req.file ? req.file.path : null,
    });
    await newUser.save();
    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  console.log(email)
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ error: "User not found" });

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) return res.status(401).json({ error: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, JWT_SECRET);
    res.json({ 
      token,
      userId: user._id  // Send userId in response
    });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});




// User Data Endpoint
app.get("/user", async (req, res) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    const user = await User.findById(decoded.id);
    if (!user) return res.status(404).json({ error: "User not found" });

    res.json({
      name: user.name,
      email: user.email,
      image: user.image,
    });
  } catch (err) {
    res.status(401).json({ error: "Invalid or missing token" });
  }
});



const quizRoutes= require("./routes/quizRoutes");
app.use("/api/quizzes", quizRoutes);


app.post('/api/scores', async (req, res) => {
  try {
      const { userId, score } = req.body; // Extract userId and score

      if (!userId || !score) {
          return res.status(400).json({ message: "Missing userId or score" });
      }

      // Example: Save score to database
      const result = await ScoreModel.create({ userId, score });

      res.status(201).json({ message: "Score saved successfully", result });
  } catch (error) {
      console.error("Error saving score:", error);
      res.status(500).json({ message: "Internal Server Error", error });
  }
});

app.use("/api/scores", scoreRoutes);





// Start Server
const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    const PORT = process.env.PORT || 5005;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
