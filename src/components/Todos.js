//holds all of our todos 

import React from 'react';
import Todo from './Todo';
import { List, ListItem, ListItemText } from '@mui/material';
import './styles/Todos.css'

function Todos({ text, todos, todo, setTodos, filteredTodos }) {

  return (
    <div >
      <List className="todos-container">
        {filteredTodos.map((todo) => (
          <Todo
            todos={todos}
            setTodos={setTodos}
            text={todo.text}
            todo={todo}
            key={todo.id} />

        ))}


      {/* <Todo /> */}

      {/* <ListItemText primary={props.todos} secondary="deadline"/> */}


      </List >

    </div >

  )
}

export default Todos
