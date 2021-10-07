// import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Todos from "./components/Todos";


function App() {
  
  
  const [todos, setTodos] = useState([
    "Build a todo app",
    "Build a static login page",
    "Brush up on React fundamentals",
    "make a dental appointment",
  ]);

  return (
    <div className="App">
    <header>
    <h1>ToDo App </h1>
    </header>
    

      <Form todos={todos} setTodos={setTodos} />
      {/* <Todos /> */}
     
    </div>
  );
}

export default App;