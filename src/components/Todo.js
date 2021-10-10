//holds a single row of to do
//here we can implement CRUD for one sinlge todo

import React from "react";
import "./styles/Todo.css";

import { List, ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({ text, id, todo, todos, setTodos }) {

  //CRUD events 
  const deleteTodo = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
    alert("This Task has been deleted!")

  };

  const completeTodo = () => {
    setTodos(todos.map(item => {
      if (item.id === todo.id) {
        return {
          ...item,
          completed: !item.completed,
        };
      }
      return item;
    })
    );

  }

  return (
    <div>
      <List
        className={`todo-item ${todo.completed ? "completed" : ''}`}>
        <ListItem >
          {text}
          <Checkbox onChange={completeTodo} />
          <IconButton edge="end" aria-label="delete" onClick={deleteTodo} >
            <DeleteIcon />
          </IconButton>
        </ListItem>
      </List>
    </div >
  );
}

export default Todo;


