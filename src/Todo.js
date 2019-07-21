import React from 'react'

function Todo(props){
    return (
        <div>
            <input type="checkbox"></input>
            {props.desc}
        </div>
    )
}

export default Todo