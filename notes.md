
{/* // <button  type="submit" onClick={addTodo} >Add Task</button>  */}

      {/* <ul>
        {todos.map((todo) => (
          <Todos todos={todo} />
          //<li>{todo}</li>
        ))}
      </ul> */}


       <ul>
        {todos.map((todo) => (
          <Todos todos={todo} />
          //<li>{todo}</li>
        ))}
      </ul>--

      ------------------------------------------------------

        setTodos([...todos, {text: input, completed: false, id: Math.random() * 1000 }]);
         or setTodos([...todos, input])