import React from 'react';
import todosdata from './todosdata';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      night: false
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    console.log(`changing ${id}`)
  }

  render(){
    const todos = todosdata.map(todo=>{
      return(
        <Todo id={todo.id} key={todo.id} desc = {todo.desc} completed = {todo.completed} handleChange={this.handleChange}/>
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
  
}

export default App;
