# Todo App

Simple full-stack todo list with **Next.js** frontend and **Express** backend.

## Project structure

```
todo/
├── todo-api/        # Express + MongoDB backend
└── todo-frontend/   # Next.js frontend
```

## Setup

### 1. Backend

```bash
cd todo-api
cp .env.example .env
```

Add your MongoDB Atlas URL to `.env`:

```
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>.mongodb.net/todo?retryWrites=true&w=majority
PORT=5000
```

Then install and run:

```bash
npm install
npm run dev
```

API runs at `http://localhost:5000`

### 2. Frontend

```bash
cd todo-frontend
cp .env.example .env
npm install
npm run dev
```

Frontend runs at `http://localhost:3000`

## API Endpoints

| Method | Endpoint        | Description      |
|--------|-----------------|------------------|
| GET    | `/api/todos`    | Get all todos    |
| GET    | `/api/todos/:id`| Get one todo     |
| POST   | `/api/todos`    | Create todo      |
| PUT    | `/api/todos/:id`| Update todo      |
| DELETE | `/api/todos/:id`| Delete todo      |
| GET    | `/api/health`   | Health check     |

### Create todo body

```json
{ "title": "Buy groceries" }
```

### Update todo body

```json
{ "title": "Buy milk", "completed": true }
```
