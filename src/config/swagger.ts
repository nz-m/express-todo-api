import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";


export const setupSwagger = (app: Express) => {
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "Todo API",
                version: "1.0.0",
                description: "A todo API with Swagger documentation",
            },
            servers: [
                {
                    url: "http://localhost:3000",
                },
            ],
        },
        apis: ["./src/modules/**/*.routes.ts"],
    };

    const swaggerSpec = swaggerJSDoc(options);
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
