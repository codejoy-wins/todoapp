import React from 'react';
import todosdata from './todosdata';
import Todo from './Todo';
import './App.css';

function App() {
  const todos = todosdata.map(todo=>{
    return(
      <Todo key={todo.id} desc = {todo.desc}/>
    )
  })
  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        {todos}
      </div>
    </div>
  );
}

export default App;
