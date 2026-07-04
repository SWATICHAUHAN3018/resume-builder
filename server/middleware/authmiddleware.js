const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
  try {
    // Get token from request header
    const token = req.headers.authorization;

    // Check if token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Access Denied. No token provided.",
      });
    }

    // Remove "Bearer " from token
    const jwtToken = token.split(" ")[1];

    // Verify token
    const decoded = jwt.verify(jwtToken, process.env.JWT_SECRET);

    // Save logged-in user information
    req.user = decoded;

    // Continue to next function
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid Token",
    });
  }
};

module.exports = protect;