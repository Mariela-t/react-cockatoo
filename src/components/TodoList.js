import React from "react";
import TodoListItem from "./TodoListItem";
import PropTypes from "prop-types";

function TodoList({ todoList, onRemoveTodo, isLoading }) {
  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <TodoListItem
            key={item.id}
            item={item}
            createdTime={item.createdTime}
            onRemoveTodo={onRemoveTodo}
            isLoading={isLoading}
          />
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onRemoveTodo: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default TodoList;
