import React from 'react'

function Todo(props){
    return (
        <div>
            <input type="checkbox" checked = {props.completed} onChange = {()=>props.handleChange(props.id)}></input>
            {props.desc}
        </div>
    )
}

export default Todo