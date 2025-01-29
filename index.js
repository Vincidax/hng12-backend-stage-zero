const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle CORS
app.use(cors());

// Endpoint to return the required information
app.get("/", (req, res) => {
  const response = {
    email: "vincentdx18@gmail.com", // Replace with your registered email
    current_datetime: new Date().toISOString(), // Dynamically generated ISO 8601 timestamp
    github_url: "https://github.com/Vincidax/hng12-stage1.git",
  };

  res.status(200).json(response);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
