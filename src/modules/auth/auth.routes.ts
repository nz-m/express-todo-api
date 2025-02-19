import { Router } from "express";
import { register, login } from "./auth.controller";
import { successResponse } from "../../shared/response";
import { validate } from "../../middlewares/validate.middleware";
import { registerSchema, loginSchema } from "../../validations/auth.validation";

const router = Router();

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Creates a new user account with a username and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "Neaz M"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       201:
 *         description: User registered successfully.
 *       400:
 *         description: Invalid input or user already exists.
 */
router.post("/register", validate(registerSchema), register);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: User login
 *     description: Authenticates a user and returns a token.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 example: "Neaz M"
 *               password:
 *                 type: string
 *                 example: "password123"
 *     responses:
 *       200:
 *         description: User logged in successfully, returns a token.
 *       401:
 *         description: Invalid credentials.
 */
router.post("/login", validate(loginSchema), login);

/**
 * @swagger
 * /api/auth/logout:
 *   post:
 *     summary: User logout
 *     description: Logs out the authenticated user.
 *     responses:
 *       200:
 *         description: User logged out successfully.
 */
router.post("/logout", (req, res) => {
    return successResponse(res, "User logged out successfully");
});

export default router;
