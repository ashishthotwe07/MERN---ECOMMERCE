import express from "express";
const router = express.Router();
import UserController from "../controllers/auth.controller.js";
const userController = new UserController();

router.post("/register", userController.registerUser);

export default router;
