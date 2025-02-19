import { Request, Response } from "express";
import { addTodo, listTodos, removeTodo } from "./todo.service";

export const createTodo = async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "User not authenticated" });
        }

        const todo = await addTodo(req.body.title, req.user.id);
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: "Error creating todo" });
    }
};

export const getTodos = async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "User not authenticated" });
        }

        const todos = await listTodos(req.user.id);
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: "Error retrieving todos" });
    }
};

export const deleteTodo = async (req: Request, res: Response): Promise<any> => {
    try {
        if (!req.user) {
            return res.status(401).json({ error: "User not authenticated" });
        }

        const deletedTodo = await removeTodo(Number(req.params.id), req.user.id);
        if (deletedTodo) {
            res.json({ message: "Todo deleted successfully" });
        } else {
            res.status(404).json({ error: "Todo not found" });
        }
    } catch (error) {
        res.status(500).json({ error: "Error deleting todo" });
    }
};
