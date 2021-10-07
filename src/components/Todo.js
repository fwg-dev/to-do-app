//holds a single row of to do
//here we can implement CRUD for one sinlge todo

import React from "react";
import { List, ListItem, ListItemText, IconButton, Checkbox } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function Todo({text}) {
  return (
    <div>
      <List>
      <ListItem primary={text} secondary="deadline">
     {text}
        <Checkbox />
           <IconButton edge="end" aria-label="delete">
               <DeleteIcon />
               </IconButton>
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;


