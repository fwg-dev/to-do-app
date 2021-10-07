import { Button, FormControl, InputLabel, Input } from "@mui/material";
import React, { useState } from "react";
import "./App.css";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([
    "Build a todo app",
    "Build a static login page",
    "Brush up on React fundamentals",
    "make a dental appointment",
  ]);
  const [input, setInput] = useState("");
  console.log(input);

  const addTodo = (event) => {
    //happens when we click the button
    event.preventDefault(); //Prevents form from refresshing everytime we click submit
    console.log("the button is working");
    setTodos([...todos, input]);
    setInput(""); //clears input, sets it back to blank
  };

  return (
    <div className="App">
      <h1>ToDo App </h1>

      <FormControl>
        <InputLabel>Write your task here</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>

      <Button
        disabled={!input}
        variant="contained"
        type="submit"
        onClick={addTodo}
      >
        Add Task
      </Button>

      {/* <button  type="submit" onClick={addTodo} >Add Task</button> */}

      <ul>
        {todos.map((todo) => (
          <Todos todos={todo} />
          //<li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;