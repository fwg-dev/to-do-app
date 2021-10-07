//holds all of our todos 

import React from 'react';
import Todo from './Todo';
import { List, ListItem, ListItemText  } from '@mui/material';

function Todos(props) {
 
  return (
    <List>
    <ListItem>

    <Todo />
                  
     <ListItemText primary={props.todos} secondary="deadline"/>

     </ListItem>
    </List>
  )
}

export default Todos
