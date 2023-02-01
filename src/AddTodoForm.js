import React from "react";

function AddTodoForm(props) {
  function handleAddTodo(event) {
    event.preventDefault();
    let todoTitle = event.target[0].value;
    console.log(todoTitle);
    props.onAddTodo(todoTitle);
    event.target.reset();
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <label htmlFor="todoTitle">
          Title:
          <input type="text" name="title" id="todoTitle" />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
export default AddTodoForm;
