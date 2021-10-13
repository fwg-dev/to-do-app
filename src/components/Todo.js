//holds a single row of to do
//here we can implement CRUD for one sinlge todo

import React from "react";
import "./styles/Todo.css";

import { IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({ text, id, todo, todos, setTodos }) {
  //CRUD events
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    alert("This Task has been deleted!");
  };

  const completeTodo = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          // alert("This Task has been completed!")
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <Checkbox onChange={completeTodo} />
      <span className="todo-text">{text}</span>
      <IconButton
        className="delete-button"
        edge="end"
        aria-label="delete"
        onClick={deleteTodo}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}

export default Todo;