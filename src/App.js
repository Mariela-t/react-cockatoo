import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";

const useSemiPersistentState = () => {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("savedTodoList")) || []
  );

  useEffect(() => {
    localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]);

  return [todoList, setTodoList];
};

function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  const addTodo = (newTodo) => {
    setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
  };

  const removeTodo = (id) => {
    const handleRemove = todoList.filter((todo) => id.title !== todo.title);
    setTodoList(handleRemove);
  };

  return (
    <>
      <h1>Todo list</h1>
      <AddTodoForm onAddTodo={addTodo} />

      <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
    </>
  );
}

export default App;
