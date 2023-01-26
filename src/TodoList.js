import React from "react";
import TodoListItem from "./TodoListItem";

// let todoList = [
//   { id: 1, title: "Homework" },
//   { id: 2, title: "Exercise" },
//   { id: 3, title: "Study" },
// ];

// let list = todoList.map((item) => <li key={item.id}>{item.title}</li>);

function TodoList() {
  let todoList = [
    { id: 1, title: "Homework" },
    { id: 2, title: "Exercise" },
    { id: 3, title: "Study" },
  ];

  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <TodoListItem key={item.id} todoList={todoList} item={item} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
