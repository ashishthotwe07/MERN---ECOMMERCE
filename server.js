// Import required modules
import express from "express";
import dotenv from "dotenv";
import morgan from "morgan";
import db from "./config/db.js";

dotenv.config();

//database config
db();

// Create an instance of Express
const app = express();

//  middlewares
app.use(express.json());
app.use(morgan("dev"));

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
