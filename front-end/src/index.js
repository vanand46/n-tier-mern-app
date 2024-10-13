import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  const BASE_URL = "http://localhost:3001";

  useEffect(() => {
    axios
      .get(`${BASE_URL}/api/todos`)
      .then((response) => {
        setTodos(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to load todos.");
        setLoading(false);
      });
  }, [BASE_URL]);

  const addTodo = () => {
    if (!newTodo.trim()) {
      alert("Todo cannot be empty");
      return;
    }
    axios
      .post(`${BASE_URL}/api/todos`, { task: newTodo })
      .then((response) => {
        setTodos([...todos, response.data]);
        setNewTodo("");
      })
      .catch((error) => {
        console.error(error);
        setError("Failed to add a new todo.");
      });
  };

  return (
    <div>
      <h1>Todo List</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="New Todo"
          />
          <button onClick={addTodo}>Add Todo</button>
          <ul>
            {todos.map((todo) => (
              <li key={todo._id}>{todo.task}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
