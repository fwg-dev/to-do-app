import React, {useState} from 'react';
import './App.css';


function App() {

  const [todos, setTodos] = useState(['Build a todo app', 'Build a todo app', 'Build a todo app']); 


  return (
    <div className="App">
     <h1>ToDo App </h1> 

<input/>
<button>Add Task</button>
<ul>

  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ul>
    </div>
  );
}

export default App;
