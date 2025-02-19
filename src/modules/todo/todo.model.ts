import db from "../../config/db";

export const createTodo = async (title: string, userId: number) => {
    return db("todos").insert({title, user_id: userId});
};

export const getUserTodos = async (userId: number) => {
    return db("todos").where({user_id: userId});
};

export const deleteTodo = async (id: number, userId: number) => {
    return db("todos").where({id, user_id: userId}).del();
};
