// import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";


function App() {
  
  
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");


  return (
    <div className="App">
    <header>
    <h1>ToDo App </h1>
    </header>
    

      <Form todos={todos} setTodos={setTodos} setStatus={setStatus} ad/>
      <Todos todos={todos} setTodos={setTodos}   />
     
    </div>
  );
}

export default App;