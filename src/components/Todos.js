//holds all of our todos 

import React from 'react';
import Todo from './Todo';
import { List, ListItem, ListItemText  } from '@mui/material';

function Todos({text, todos, todo, setTodos}) {
 
  return (
    <div>
        <List>
    <ListItem>

    <ul>
        {todos.map((todo) => (
          <Todo 
            todos={todos}
             setTodos={setTodos}
             text={todo.text} 
             todo={todo}
              key={todo.id}/>
              
        ))}
      </ul>

    {/* <Todo /> */}
                  
     {/* <ListItemText primary={props.todos} secondary="deadline"/> */}

     </ListItem>
    </List>

    </div>

  )
}

export default Todos
