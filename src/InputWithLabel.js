import React, { useEffect, useRef } from "react";
import styles from "./InputWithLabel.module.css";

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  // console.log(children);
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

export default InputWithLabel;
