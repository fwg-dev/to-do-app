import React, { useState, useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@mui/material";

import Todos from "./Todos";

function Form({todos, setTodos}) {

    const [input, setInput] = useState("");
    // console.log(input);
  
    const addTodo = (event) => {
      //happens when we click the button
      event.preventDefault(); //Prevents form from refresshing everytime we click submit
      setTodos([...todos, {text: input, completed: false, id: Math.random() * 1000 }]);
      setInput(""); //clears input, sets it back to blank
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

      <Button
        disabled={!input}
        variant="contained"
        type="submit"
        onClick={addTodo}
      >
        Add todo
      </Button>

      {/* <ul>
        {todos.map((todo) => (
          <Todos todos={todo} />
          //<li>{todo}</li>
        ))}
      </ul> */}

  </div>
  );
}


export default Form;
