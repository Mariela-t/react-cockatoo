import React from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";

function TodoListItem({ item, onRemoveTodo }) {
  return (
    <>
      <li className={styles.ListItem}>
        {item.fields?.Title ? item.fields.Title : item.title}
        <button
          className={styles.button}
          type="button"
          onClick={() => onRemoveTodo(item.id)}
        >
          Remove
        </button>{" "}
      </li>
    </>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.object,
  onRemoveTodo: PropTypes.func,
};

export default TodoListItem;
