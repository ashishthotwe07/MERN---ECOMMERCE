import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

class UserController {
  async registerUser(req, res) {
    try {
      // Extract user data from request body
      const { name, email, password, phone, address } = req.body;

      // Validate user input
      if (!name || !email || !password || !phone || !address) {
        return res
          .status(400)
          .json({ error: "Please provide all required fields" });
      }

      // Check if user with the same email already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res
          .status(400)
          .json({ error: "User with this email already exists" });
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
      res.status(201).json({ message: "User registered successfully" });
    } catch (error) {
      // Handle errors
      console.error("Error registering user:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

export default UserController;
