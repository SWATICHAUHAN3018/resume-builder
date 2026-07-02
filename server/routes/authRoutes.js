const express = require("express");

const {
  registerUser,
  loginUser,
  forgotPassword,
} = require("../controllers/authController");

const router = express.Router();

// Register API
router.post("/register", registerUser);

// Login API
router.post("/login", loginUser);

// Forgot Password API
router.post("/forgot-password", forgotPassword);

module.exports = router;