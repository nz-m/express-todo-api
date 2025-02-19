import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { createUser, findUserByUsername } from "./auth.model";

export const registerUser = async (username: string, password: string) => {
    const hashedPassword = await bcrypt.hash(password, 10);
    return await createUser(username, hashedPassword);
};

export const loginUser = async (username: string, password: string) => {
    const user = await findUserByUsername(username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        throw new Error("Invalid credentials");
    }

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
        throw new Error("JWT_SECRET is not defined in the environment variables");
    }

    return jwt.sign({ id: user.id }, secretKey, { expiresIn: "1h" });
};
