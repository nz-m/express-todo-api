import {NextFunction, Request, Response} from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
    id: number;
    username: string;
}

declare module "express-serve-static-core" {
    interface Request {
        user?: JwtPayload;
    }
}

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    try {
        const authHeader = req.header("Authorization");

        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            res.status(401).json({ error: "Access denied, token missing" });
            return;
        }

        const token = authHeader.split(" ")[1];

        req.user = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

        next();
    } catch (error) {
        res.status(401).json({ error: "Invalid or expired token" });
    }
};
