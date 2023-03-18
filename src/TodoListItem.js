import React from "react";

function TodoListItem({ item, onRemoveTodo }) {
  return (
    <>
      <li>
        {" "}
        {item.fields.Title}{" "}
        <button type="button" onClick={() => onRemoveTodo(item)}>
          Remove
        </button>{" "}
      </li>
    </>
  );
}

export default TodoListItem;
