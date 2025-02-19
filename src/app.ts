import express from "express";
import authRoutes from "./modules/auth/auth.routes";
import todoRoutes from "./modules/todo/todo.routes";

const app = express();
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/todos", todoRoutes);

export default app;
