import React from 'react';
import todosdata from './todosdata';
import Todo from './Todo';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      todos: todosdata,
      night: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(id){
    console.log(`changing ${id}`)
    this.setState(prevState=>{
      const updatedTodos = prevState.todos.map(todo=>{
        if(todo.id === id){
          todo.completed = !todo.completed
        }
        return todo
      })
      return {
        todos: updatedTodos,
        night: prevState.night
      }
    })
  }

  handleClick(){
    console.log("toggling mode")
    if(this.state.night){
      document.getElementById("main").style="color:white; background-color: black;"
      console.log("night time")
      this.setState(prevState=>{
        return{
          todos: prevState.todos,
          night: !prevState.night
        }
      })
    }else{
      document.getElementById("main").style="color:black;"
      console.log("day time");
      this.setState(prevState=>{
        return{
          todos: prevState.todos,
          night: !prevState.night
        }
      })
    }
    

  }

  render(){
    const todos = todosdata.map(todo=>{
      return(
        <Todo id={todo.id} key={todo.id} desc = {todo.desc} completed = {todo.completed} handleChange={this.handleChange}/>
      )
    })
    return (
      <div id="main" className="App">
        <h1>Todo App</h1>
        <div>
          {todos}
        </div>
        <button className="blue" onClick={this.handleClick}>Toggle Night Mode</button>
      </div>
    );
  }
  
}

export default App;
