//holds all of our todos 

import React from 'react';
import Todo from './Todo';
import { List, ListItem, ListItemText  } from '@mui/material';

function Todos({todos}) {
 
  return (
    <List>
    <ListItem>

    <ul>
        {todos.map((todo) => (
          <Todo text={todos.text} />
        ))}
      </ul>

    {/* <Todo /> */}
                  
     {/* <ListItemText primary={props.todos} secondary="deadline"/> */}

     </ListItem>
    </List>
  )
}

export default Todos
