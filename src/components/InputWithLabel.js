import React, { useEffect, useRef } from "react";
import styles from "./InputWithLabel.module.css";
import PropTypes from "prop-types";

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label className={styles.label} htmlFor="todoTitle">
        {children}:
      </label>
      <input
        className={styles.input}
        type="text"
        name="title"
        id="todoTitle"
        value={todoTitle}
        onChange={handleTitleChange}
        ref={inputRef}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  children: PropTypes.string,
  todoTitle: PropTypes.string,
  handleTitleChange: PropTypes.func,
};

export default InputWithLabel;
