import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.response.use(
  (response) => response.data,
  (error) => {
    const message = error.response?.data?.message || "Something went wrong";
    return Promise.reject(new Error(message));
  }
);

export function getTodos() {
  return api.get("/api/todos");
}

export function createTodo(title) {
  return api.post("/api/todos", { title });
}

export function updateTodo(id, data) {
  return api.put(`/api/todos/${id}`, data);
}

export function deleteTodo(id) {
  return api.delete(`/api/todos/${id}`);
}
