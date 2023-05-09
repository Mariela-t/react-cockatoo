import React, { useState } from "react";
import styles from "./TodoListItem.module.css";
import PropTypes from "prop-types";
import { MdOutlineRemoveCircleOutline } from "react-icons/md";

function TodoListItem({ item, createdTime, onRemoveTodo, isLoading }) {
  const [done, setDone] = useState(false);

  const dateSlicer = (createdTime) => {
    return createdTime.slice(5, 10);
  };

  const handleCheckBox = (e) => {
    setDone(e.target.checked);
  };

  const straightLine = {
    textDecoration: done ? "line-through" : "none",
  };

  return (
    <>
      <li className={styles.ListItem}>
        <input
          className={styles.checkbox}
          type="checkbox"
          checked={done}
          onChange={handleCheckBox}
        />

        <span style={straightLine}>
          {item.fields?.Title ? item.fields.Title : item.title}
        </span>

        <span className={styles.dateMade}>{dateSlicer(createdTime)}</span>

        {isLoading ? (
          <p> Loading... </p>
        ) : (
          <button
            className={styles.button}
            type="button"
            onClick={() => onRemoveTodo(item.id)}
          >
            <MdOutlineRemoveCircleOutline />
          </button>
        )}
      </li>
    </>
  );
}

TodoListItem.propTypes = {
  item: PropTypes.object,
  onRemoveTodo: PropTypes.func,
  isLoading: PropTypes.bool,
  createdTime: PropTypes.string,
};

export default TodoListItem;
