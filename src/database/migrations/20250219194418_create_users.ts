import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    await knex.schema.createTable("users", (table) => {
        table.increments("id").primary();
        table.string("username").notNullable().unique();
        table.string("password").notNullable();
        table.timestamps(true, true);
    });

    await knex.schema.createTable("todos", (table) => {
        table.increments("id").primary();
        table.string("title").notNullable();
        table.integer("user_id").unsigned().notNullable();
        table.foreign("user_id").references("users.id").onDelete("CASCADE");
        table.timestamps(true, true);
    });
}

export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTableIfExists("todos");
    await knex.schema.dropTableIfExists("users");
}
