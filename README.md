# N-Tier MERN App

This simple example demonstrates a basic **N-Tier Architecture** which is a design pattern where the components of an application are separated into different layers or tiers, each with its own specific responsibilities. Typically, it includes:

- **Presentation Tier**: The user interface or client that interacts with users.
- **Application Tier**: The business logic, APIs, and core application functionality.
- **Data Tier**: The database or storage system.

In **MERN** stack (**MongoDB, Express.js, React.js, Node.js**), the application is divided into distinct layers:

1. **Frontend (Presentation Tier)**: **React.js** is used for building the user interface
2. **Backend (Application Tier)**: **Express.js** (running on Node.js) handles API requests and serves data to the frontend.
3. **Database (Data Tier)**: **MongoDB** stores the application's data.

### Steps to Run the MERN Application

- Install Docker and Docker Compose (if not installed).
- `docker-compose up --build`

This command will:

- Build and run the MongoDB service.
- Build and run the backend service with Express and connect it to MongoDB.
- Build and run the frontend service with React.

- The frontend React app will be available at: http://localhost:3000
- The backend Express API will be available at: http://localhost:3001/api/todos
- The MongoDB database is running internally, accessible to the backend at mongodb://mongo:27017/mern_todo.
