import React from "react";


const Todo = (props) =>{

    return(
        <div 
        className={`Todo${props.Todo.finished ? " true" : " false"}`}
        onClick={()=> props.toggleItem(props.Todo.key)}
        >
            {props.Todo.name}
        </div>
    );
};
export default Todo