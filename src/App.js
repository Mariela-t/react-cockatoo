import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

//Grid%20view&sort[0][field]=Title&sort[0][direction]=asc

function App() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [order, setOrder] = useState(true);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((result) => {
        order
          ? result.records.sort((objectA, objectB) => {
              if (objectA.fields.Title < objectB.fields.Title) return -1;
              else if (objectA.fields.Title === objectB.fields.Title) return 0;
              else return 1;
            })
          : result.records.sort((objectA, objectB) => {
              if (objectA.fields.Title < objectB.fields.Title) return 1;
              else if (objectA.fields.Title === objectB.fields.Title) return 0;
              else return -1;
            });

        setTodoList(result.records);
        setIsLoading(false);
      })
      .catch((error) => console.warn(error));
  }, [order]);

  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList, isLoading]);

  const addTodo = (newTodo) => {
    fetch(url, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
      body: JSON.stringify({ fields: { Title: newTodo.title } }),
    })
      .then((response) => response.json())
      .then((data) => {
        const newTodo = {
          id: data.id,
          title: data.fields.Title,
        };
        setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
      });
  };

  const removeTodo = (id) => {
    const urlD = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;

    fetch(urlD, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then(() => {
        const handleRemove = todoList.filter((todo) => todo.id !== id);
        setTodoList(handleRemove);
      })
      .catch((error) => console.error(error));
  };

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={styles.container}>
              <h1 className={styles.h1}>Todo list</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <button type="button" onClick={() => setOrder(!order)}>
                {" "}
                button
              </button>
              {isLoading ? (
                <p> Loading... </p>
              ) : (
                <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
              )}
            </div>
          }
        />
        <Route path="/new" element={<h1>New Todo List</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
