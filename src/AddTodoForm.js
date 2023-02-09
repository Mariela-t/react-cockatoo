import React, { useState } from "react";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");
  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    console.log(newTodoTitle);
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    // const todoTitle = event.target[0].value;
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
    // event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">
          Title:
          <input
            type="text"
            name="title"
            id="todoTitle"
            value={todoTitle}
            onChange={handleTitleChange}
          />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddTodoForm;
