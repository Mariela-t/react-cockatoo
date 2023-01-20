import React from "react";

let todoList = [
  { id: 1, title: "Homework" },
  { id: 2, title: "Exercise" },
  { id: 3, title: "Study" },
];

let list = todoList.map((item) => <li key={item.id}>{item.title}</li>);

function TodoList() {
  return (
    <div>
      <ul>{list}</ul>
    </div>
  );
}

export default TodoList;
