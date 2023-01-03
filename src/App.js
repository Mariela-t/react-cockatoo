import React from "react";

let todoList = [
  { id: 1, title: "Homework" },
  { id: 2, title: "Exercise" },
  { id: 3, title: "Study" },
];

let list = todoList.map((item, index) => (
  <li key={index}>
    {" "}
    {item.id} : {item.title}{" "}
  </li>
));

function App() {
  return (
    <div>
      <h1>Todo list</h1>
      <ul>{list}</ul>
    </div>
  );
}

export default App;
