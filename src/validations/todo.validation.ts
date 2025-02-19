import { z } from "zod";

export const createTodoSchema = z.object({
    title: z.string().min(3, "Title must be at least 3 characters long"),
});

export const deleteTodoSchema = z.object({
    id: z.string().regex(/^\d+$/, "Invalid todo ID"),
});
