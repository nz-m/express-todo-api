import { createTodo, getUserTodos, deleteTodo } from "./todo.model";

export const addTodo = async (title: string, userId: number) => {
    return await createTodo(title, userId);
};

export const listTodos = async (userId: number) => {
    return await getUserTodos(userId);
};

export const removeTodo = async (id: number, userId: number) => {
    return await deleteTodo(id, userId);
};
