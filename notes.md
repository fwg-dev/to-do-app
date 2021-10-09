
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



        --------------------------------------------------------

      {/* <ListItemText primary={props.todos} secondary="deadline"/> */}  





      -----------


 onClick={completeTodo }


      ----------------- // "Build a todo app",
    // "Build a static login page",
    // "Brush up on React fundamentals",
    // "make a dental appointment",



    ----------------------------------

     <ListItem className={`todo-item ${todo.completed  ? "completed" : "" }`}>

     <List className={`todo-item ${todo.completed  ? "completed" : '' }`}>
     
     ------------------------------------------------------

       <Button
        disabled={!input}
        variant="contained"
        type="submit"
        onClick={addTodo}
      >
      
        + Add todo
      </Button>

      ------------------------------