import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  NativeSelect,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import './styles/Form.css';


function Form({ todos, setTodos, setStatus }) {
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

  const statusHandler = (event) => {
    setStatus(event.target.value);
  };


  return (
    <div className="todo-form" >
      <form className="form-container"
        onSubmit={addTodo}>


        <FormControl className="input-form">
          <InputLabel>Write your task here</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
          {/* <IconButton
          disabled={!input}
          variant="contained"
          type="submit"
          onClick={addTodo}
        >
          <AddCircleIcon />
        </IconButton> */}

        </FormControl>
      </form>


      <NativeSelect className="select-container"
        onChange={statusHandler}
      >
        <option value="all"> All</option>
        <option value="completed"> Completed</option>
        <option value="uncompleted"> Not Completed</option>
      </NativeSelect>

    </div>
  );
}

export default Form;