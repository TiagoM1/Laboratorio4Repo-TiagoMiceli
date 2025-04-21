To-Do API

API REST para gestionar tareas, sprints y backlog. Hecha con Node.js, Express y MongoDB.

-- Instalación --

1. Navegá a la carpeta `todo-api`:
cd todo-api

2. Instalá las dependencias:
npm install

3. Configurá tu base de datos en el archivo `.env`:
MONGO_URI=mongodb://localhost:27017/todoDB

4. Iniciá el servidor:
npm start


-- Endpoints --

Tasks
- GET /tasks
- GET /tasks/:id
- POST /tasks
- PUT /tasks/:id
- DELETE /tasks/:id
- GET /tasks?estado=pending (filtro)
- Ordenados por fecha por defecto

Sprints
- GET /sprints
- GET /sprints/:id
- POST /sprints
- PUT /sprints/:id
- DELETE /sprints/:id
- PUT /sprints/:id/add-task/:taskId

Backlog
- GET /backlog
- POST /backlog
- PUT /backlog/add-task/:taskId