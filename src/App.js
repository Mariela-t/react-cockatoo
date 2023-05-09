import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import styles from "./App.module.css";
import Navbar from "./components/Navbar";
import { MdOutlineSortByAlpha } from "react-icons/md";
import Quote from "./components/Quote";

const url = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default`;

//could add at the end of url for sorting instead of using JS
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
          ? result.records.sort((a, b) => {
              if (a.fields.Title < b.fields.Title) return -1;
              else if (a.fields.Title === b.fields.Title) return 0;
              else return 1;
            })
          : result.records.sort((a, b) => {
              if (a.fields.Title < b.fields.Title) return 1;
              else if (a.fields.Title === b.fields.Title) return 0;
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
          createdTime: data.createdTime,
        };
        setTodoList((previousTodoList) => [...previousTodoList, newTodo]);
      });
  };

  const removeTodo = (id) => {
    const urlD = `https://api.airtable.com/v0/${process.env.REACT_APP_AIRTABLE_BASE_ID}/Default/${id}`;
    setIsLoading(true);
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
        setIsLoading(false);
      })
      .catch((error) => console.error(error));
  };

  function FormattedDate() {
    const date = new Date();
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return (
      <div>
        <h4 className={styles.currentDay}>
          Today is {date.toLocaleString("en-US", options)}{" "}
        </h4>
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className={styles.container}>
              <h1 className={styles.h1}>To do list</h1>
              <FormattedDate />
              <AddTodoForm onAddTodo={addTodo} />

              <button
                type="button"
                className={styles.order}
                onClick={() => setOrder(!order)}
              >
                <MdOutlineSortByAlpha />
              </button>

              {isLoading ? (
                <p> Loading... </p>
              ) : (
                <TodoList
                  todoList={todoList}
                  onRemoveTodo={removeTodo}
                  isLoading={isLoading}
                />
              )}
            </div>
          }
        />
        <Route path="/quote" element={<Quote />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
