import React from "react";
import TodoListItem from "./TodoListItem";

function TodoList({ todoList }) {
  // let todoList = [
  //   { id: 1, title: "Homework" },
  //   { id: 2, title: "Exercise" },
  //   { id: 3, title: "Study" },
  // ];

  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
