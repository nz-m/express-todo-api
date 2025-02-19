import db from "../../config/db";

export const createUser = async (username: string, password: string) => {
    return db("users").insert({username, password});
};

export const findUserByUsername = async (username: string) => {
    return db("users").where({username}).first();
};
