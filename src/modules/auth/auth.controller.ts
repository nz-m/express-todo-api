import { Request, Response } from "express";
import { registerUser, loginUser } from "./auth.service";
import { successResponse, errorResponse } from "../../shared/response";

export const register = async (req: Request, res: Response): Promise<any> => {
    try {
        await registerUser(req.body.username, req.body.password);
        return successResponse(res, "User registered successfully");
    } catch (error) {
        return errorResponse(res, "Invalid input or user already exists");
    }
};

export const login = async (req: Request, res: Response): Promise<any> => {
    try {
        const token = await loginUser(req.body.username, req.body.password);
        res.json({ message: "Login successful", token });
    } catch (error) {
        if (error instanceof Error) {
            res.status(401).json({ error: error.message });
        } else {
            res.status(500).json({ error: "An unexpected error occurred" });
        }
    }
};
