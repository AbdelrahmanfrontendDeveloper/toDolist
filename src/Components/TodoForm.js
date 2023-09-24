import React, { useState } from "react";
import shortid from "shortid";
const TodoForm = (props) => {
  const [task, setTask] = useState("");
  const handelSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(
      {
        id: shortid.generate(), // to generate unique id
        task: task,
        toggleComplete: false,
      }, 
      setTask('')
    );
  };
  const handelChange = (e) => {
    setTask(e.target.value);
  };
  return (
    <form onSubmit={handelSubmit}>
      <input
        type="text"
        placeholder="add task here"
        className="input-field"
        onChange={handelChange}
        value={task}
      />
      <button className="btn" onClick={handelSubmit}>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
