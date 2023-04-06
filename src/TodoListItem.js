import React from "react";
import styles from "./TodoListItem.module.css";

function TodoListItem({ item, onRemoveTodo }) {
  return (
    <>
      <li className={styles.ListItem}>
        {" "}
        {item.fields.Title}{" "}
        <button
          className={styles.button}
          type="button"
          onClick={() => onRemoveTodo(item)}
        >
          Remove
        </button>{" "}
      </li>
    </>
  );
}

export default TodoListItem;
