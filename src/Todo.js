import React from 'react'

function Todo(props){
    return (
        <div id="todo">
            <input id={props.id} type="checkbox" checked = {props.completed} onChange = {()=>props.handleChange(props.id)}></input>
            <label for={props.id}>{props.desc}</label>
        </div>
    )
}

export default Todo