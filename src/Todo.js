import React from 'react'

function Todo(props){
    const MySty = {
        color: "gold",
    }
    return (
        <div id="todo">
            <input id={props.id} type="checkbox" checked = {props.completed} onChange = {()=>props.handleChange(props.id)}></input>
            <label style={props.completed ? MySty : null} for={props.id}>{props.desc}</label>
        </div>
    )
}

export default Todo