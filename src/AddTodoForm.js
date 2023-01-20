import React from "react";

function AddTodoForm() {
  return (
    <div>
      <form>
        <label htmlFor="todoTitle">
          Title:
          <input type="text" id="todoTitle" />
        </label>
        <button>Add</button>
      </form>
    </div>
  );
}
export default AddTodoForm;
