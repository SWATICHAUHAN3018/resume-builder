const resumeRoutes = require("./routes/resumeRoutes");
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");

// Load Environment Variables
dotenv.config();

// Connect Database
connectDB();

// Create Express App
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/resume", resumeRoutes);

// Test Route
app.get("/", (req, res) => {
  res.send("Resume Builder Backend is Running 🚀");
});

// Server Port
const PORT = process.env.PORT || 5000;

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});