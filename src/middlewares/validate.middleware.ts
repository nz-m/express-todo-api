import { Request, Response, NextFunction, RequestHandler } from "express";
import { ZodSchema } from "zod";

export const validate = (schema: ZodSchema<any>): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): void => {
        const result = schema.safeParse(req.body);

        if (!result.success) {
            res.status(400).json({
                errors: result.error.errors.map((err) => ({
                    path: err.path.join("."),
                    message: err.message,
                })),
            });
            return;
        }

        next();
    };
};
