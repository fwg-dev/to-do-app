import React, { useState, useEffect } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  NativeSelect,
  IconButton,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import Todos from "./Todos";

function Form({ todos, setTodos }) {
  const [input, setInput] = useState("");
  // console.log(input);

  const addTodo = (event) => {
    //happens when we click the button
    event.preventDefault(); //Prevents form from refresshing everytime we click submit
    setTodos([
      ...todos,
      { text: input, completed: false, id: Math.random() * 1000 },
    ]);
    setInput(""); //clears input, sets it back to blank
  };

  const StatusHandler = (event) => {
    console.log(event);
  };
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  return (
    <div>
      <FormControl>
        <InputLabel>Write your task here</InputLabel>
        <Input
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </FormControl>

      <IconButton
        disabled={!input}
        variant="contained"
        type="submit"
        onClick={addTodo}
      >
        <AddCircleIcon />
      </IconButton>
      
      <NativeSelect>
        <option> All</option>
        <option> Completed</option>
        <option> Not Completed</option>
      </NativeSelect>

    </div>
  );
}

export default Form;