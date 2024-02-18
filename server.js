// Import required modules
import express from "express";
import dotenv from "dotenv";

dotenv.config();
// Create an instance of Express
const app = express();

// Define a route
app.get("/", (req, res) => {
  res.send("Hello, World! This is my Express server.");
});

// Define port
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
