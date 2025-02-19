import dotenv from "dotenv";
import morgan from "morgan";
import knex from "knex";
import { setupSwagger } from "./config/swagger";
import app from "./app";

dotenv.config();

app.use(morgan("dev"));

setupSwagger(app);

const db = knex({
    client: "mysql2",
    connection: {
        host: process.env.DB_HOST || "127.0.0.1",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASS || "",
        database: process.env.DB_NAME || "todo",
    },
});

// Test Database Connection
db.raw("SELECT 1")
    .then(() => console.log("Database connection successful."))
    .catch((error) => {
        console.error("Database connection failed:", error.message);
        process.exit(1);
    });


app.get("/", (req, res) => {
    res.send("Welcome to the Todo API");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
