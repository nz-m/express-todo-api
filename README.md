# express-todo-api
A simple todo application built with Node.js, Express.js, and MySQL

### Technologies used:
- Node.js
- Express.js
- MySQL
- Knex.js
- ZOD (for validation)
- JWT (for authentication)
- Bcrypt (for password hashing)
- Swagger (for API documentation)

### How to run the project:
1. Clone the repository
2. Run `npm install`
3. Create a `.env` file in the root directory and add the following environment variables:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=todo
JWT_SECRET
PORT
```
4. Create a database in MySQL with the name `todo`

5. Run `npm run migrate:latest` to create the database and tables

6. Run the project using `npm run dev` for development or `npm start` for production
7. Visit `http://localhost:3000/api-docs` to view the API documentation

### API Endpoints:
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout
- GET /api/todos
- POST /api/todos
- DELETE /api/todos/:id



