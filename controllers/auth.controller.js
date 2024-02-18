import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

class UserController {
  // REGISTER USER
  async registerUser(req, res) {
    try {
      // Extract user data from request body
      const { name, email, password, phone, address } = req.body;

      // Validate user input
      if (!name || !email || !password || !phone || !address) {
        return res.status(400).json({
          success: false,
          message: "Please provide all required fields",
        });
      }

      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User with this email already exists",
        });
      }

      // Hash the password
      const hashedPassword = bcrypt.hashSync(password, 10);

      // Create a new user
      const newUser = new User({
        name,
        email,
        password: hashedPassword,
        phone,
        address,
      });

      // Save the user in the database
      await newUser.save();

      // Respond with success message
      res
        .status(201)
        .json({ success: true, message: "User registered successfully" });
    } catch (error) {
      // Handle errors
      console.error("Error registering user:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error", error });
    }
  }

  // LOGIN USER
  async loginUser(req, res) {
    try {
      // Extract email and password from request body
      const { email, password } = req.body;

      // Validate user input
      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "Please provide email and password",
        });
      }

      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid email or password" });
      }

      // Check if the password is correct
      const isPasswordValid = bcrypt.compareSync(password, user.password);
      if (!isPasswordValid) {
        return res
          .status(401)
          .json({ success: false, message: "Invalid email or password" });
      }

      // Generate JWT token
      const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
        expiresIn: "7d", // Token expires in 1 hour
      });

      // Respond with token
      res.status(200).json({
        success: true,
        message: "Login Successfully",
        token,
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          phone: user.phone,
          address: user.address,
        },
      });
    } catch (error) {
      // Handle errors
      console.error("Error logging in user:", error);
      res
        .status(500)
        .json({ success: false, message: "Internal server error", error });
    }
  }

  testC(req, res) {
    res.send("protected routes");
  }
}

export default UserController;
