import React, { useState } from "react";
import InputWithLabel from "./InputWithLabel";
import styles from "./AddTodoForm.module.css";
import PropTypes from "prop-types";
import { MdAddCircleOutline } from "react-icons/md";

function AddTodoForm({ onAddTodo }) {
  const [todoTitle, setTodoTitle] = useState("");

  function handleTitleChange(event) {
    const newTodoTitle = event.target.value;
    setTodoTitle(newTodoTitle);
  }

  function handleAddTodo(event) {
    event.preventDefault();
    onAddTodo({ title: todoTitle, id: Date.now() });
    setTodoTitle("");
  }

  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <InputWithLabel
          handleTitleChange={handleTitleChange}
          todoTitle={todoTitle}
        >
          Task
        </InputWithLabel>
        <button className={styles.button} type="submit">
          <MdAddCircleOutline />
        </button>
      </form>
    </div>
  );
}

AddTodoForm.propTypes = {
  onAddTodo: PropTypes.func,
};

export default AddTodoForm;
