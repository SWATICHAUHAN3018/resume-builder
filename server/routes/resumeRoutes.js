const express = require("express");

const {
  createResume,
  getResume,
  updateResume,
  deleteResume,
} = require("../controllers/resumeController");

const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Create Resume
router.post("/create", protect, createResume);

// Get Logged-in User Resume
router.get("/", protect, getResume);

// Update Resume
router.put("/:id", protect, updateResume);

// Delete Resume
router.delete("/:id", protect, deleteResume);

module.exports = router;