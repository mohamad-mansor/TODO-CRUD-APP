import { useState } from "react";

const TodoForm = ({ onAdd }) => {
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim() === "") return;
    onAdd(newTodo);
    setNewTodo("");
  };

  return (
    <div className="todo-form">
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add new todo"
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoForm;
