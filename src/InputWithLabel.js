import React, { useEffect, useRef } from "react";

function InputWithLabel(props, { children }) {
  const inputRef = useRef();

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return (
    <>
      <label htmlFor="todoTitle">
        {children}
        <input
          ref={inputRef}
          type="text"
          name="title"
          id="todoTitle"
          value={props.todoTitle}
          onChange={props.handleTitleChange}
        />
      </label>
    </>
  );
}

export default InputWithLabel;
