import express from "express";
const router = express.Router();
import UserController from "../controllers/auth.controller.js";
import authMiddleware, { isAdmin } from "../middlewares/auth.middleware.js";
const userController = new UserController();

router.post("/register", userController.registerUser);
router.post("/login", userController.loginUser);
router.get("/test", authMiddleware, isAdmin, userController.testC);

export default router;
