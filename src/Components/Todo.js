import React from "react";

const Todo = (props) => {
  return (
    <div className="d-f">
      <div style={{textDecoration : props.todo.isComplete ? 'line-through' : 'none'}} onClick={props.toggleComplete} >
        {props.todo.task}
      </div>
      <button className="delete-btn" onClick={props.onDelete}>
        x
      </button>
    </div>
  );
};

export default Todo;
