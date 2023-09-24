import { React, useState } from "react";
import TodoForm from "./Components/TodoForm";
import Todo from "./Components/Todo";
import "./App.css";
const App = () => {
  let [todos, setTodos] = useState([]);
  const [todoShow, settoShow] = useState("all");
  const [allTasksCompeleted, setAllTasksCompeleted] = useState(false);
  const updataToShow = (s) => {
    settoShow(s);
  };
  const addTasks = (todo) => {
    setTodos([todo, ...todos]);
  };
  const handelDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  if (todoShow === "active") {
    todos = todos.filter((todo) => !todo.isComplete);
  } else if (todoShow === "complete") {
    todos = todos.filter((todo) => todo.isComplete);
  }
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  const removeComplete = () => {
    setTodos(todos.filter((todo) => !todo.isComplete));
  };

  return (
    <div className="container">
      <TodoForm onSubmit={addTasks} />
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onDelete={() => handelDelete(todo.id)}
          toggleComplete={() => toggleComplete(todo.id)}
        />
      ))}

      <div className='btn-container'>
        <button className="update-btn btn allbtn" onClick={() => updataToShow("all")}>
          All
        </button>
        <button
          className="update-btn btn activebtn"
          onClick={() => updataToShow("active")}
        >
          Active
        </button>
        <button
          className="update-btn btn completebtn"
          onClick={() => updataToShow("complete")}
        >
          Complete
        </button>
      </div>

      {todos.some((todo) => todo.isComplete) ? (
        <button className="all-btn btn" onClick={removeComplete}>
          Remove all complete Tasks
        </button>
      ) : null}
      <button
        className="all-btn btn"
        onClick={() => {
          setTodos(
            todos.map((todo) => {
              return {
                ...todo,
                isComplete: !allTasksCompeleted,
              };
            })
          );
          setAllTasksCompeleted(!allTasksCompeleted);
        }}
      >
        Make All Tasks Completed {`${allTasksCompeleted}`}
      </button>
    </div>
  );
};

export default App;
