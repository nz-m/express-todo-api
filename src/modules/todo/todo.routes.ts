import { Router } from "express";
import { createTodo, getTodos, deleteTodo } from "./todo.controller";
import { authMiddleware } from "../../middlewares/auth.middleware";
import { validate } from "../../middlewares/validate.middleware";
import { createTodoSchema, deleteTodoSchema} from "../../validations/todo.validation";

const router = Router();

/**
 * @swagger
 * /api/todos:
 *   post:
 *     summary: Create a new todo
 *     description: Adds a new todo item for the authenticated user.
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Learn TypeScript"
 *     responses:
 *       201:
 *         description: Todo created successfully.
 *       400:
 *         description: Invalid input.
 *       401:
 *         description: Unauthorized.
 */
router.post("/", authMiddleware, validate(createTodoSchema), createTodo);

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get all todos
 *     description: Retrieves all todos for the authenticated user.
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: A list of user's todos.
 *       401:
 *         description: Unauthorized.
 */
router.get("/", authMiddleware, getTodos);

/**
 * @swagger
 * /api/todos/{id}:
 *   delete:
 *     summary: Delete a todo
 *     description: Deletes a specific todo by ID for the authenticated user.
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The ID of the todo to delete.
 *     responses:
 *       200:
 *         description: Todo deleted successfully.
 *       401:
 *         description: Unauthorized.
 *       404:
 *         description: Todo not found.
 */
router.delete("/:id", authMiddleware, validate(deleteTodoSchema), deleteTodo);

export default router;
