// import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";


function App() {

  //states
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  //useEffect 
  useEffect(() => {
    filterHandler();

  }, [todos, status])

  //functions 

  const filterHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed == true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed == false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  return (
    <div className="App">
      <header>
        <h1>ToDo App </h1>
      </header>

      <div className="container">
        <Form todos={todos} setTodos={setTodos} setStatus={setStatus} />
        <Todos todos={todos} setTodos={setTodos} filteredTodos={filteredTodos} />
      </div>


    </div>
  );
}

export default App;