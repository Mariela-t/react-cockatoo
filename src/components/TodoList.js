import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo }) {
  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} item={item} onRemoveTodo={onRemoveTodo} />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
};

export default TodoList;
