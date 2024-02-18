import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const authMiddleware = async (req, res, next) => {
  // Extract the JWT token from the request headers
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  try {
    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.userId);

    if (!user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Attach the user object to the request for further processing
    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid token" });
  }
};

export const isAdmin = (req, res, next) => {
  // Check if the user object exists in the request (set by the authentication middleware)
  if (!req.user) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  // Check if the user role is 'admin'
  if (req.user.role !== "admin") {
    return res
      .status(403)
      .json({ message: "Access denied: User is not an admin" });
  }

  // If the user is an admin, allow access to the next middleware or route handler
  next();
};

export default authMiddleware;
