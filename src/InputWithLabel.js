import React, { useEffect, useRef } from "react";

const InputWithLabel = ({ children, todoTitle, handleTitleChange }) => {
  // console.log(children);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <>
      <label htmlFor="todoTitle">{children}:</label>
      <input
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
