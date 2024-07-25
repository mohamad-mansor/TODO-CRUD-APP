import { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./components/TodoItem";
import TodoForm from "./components/TodoForm";
import "./styles.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      const res = await axios.get("/api/todos");
      setTodos(res.data);
    };
    fetchTodos();
  }, []);

  const handleAddTodo = async (title) => {
    const res = await axios.post("/api/todos", { title });
    setTodos([...todos, res.data]);
  };

  const handleUpdateTodo = async (updatedTodo) => {
    const res = await axios.put(`/api/todos/${updatedTodo._id}`, updatedTodo);
    setTodos(
      todos.map((todo) => (todo._id === updatedTodo._id ? res.data : todo))
    );
  };

  const handleDeleteTodo = async (id) => {
    await axios.delete(`/api/todos/${id}`);
    setTodos(todos.filter((todo) => todo._id !== id));
  };

  return (
    <div className="app">
      <h1>TODO-CRUD-APP</h1>
      <TodoForm onAdd={handleAddTodo} />
      <div className="todo-list">
        {todos.map((todo) => (
          <TodoItem
            key={todo._id}
            todo={todo}
            onUpdate={handleUpdateTodo}
            onDelete={handleDeleteTodo}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
