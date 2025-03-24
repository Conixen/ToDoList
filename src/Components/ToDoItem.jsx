import React from "react";

function ToDoItem({ newToDo, removeToDo, isDone }) {
  return (
    <li>
      <span
        onClick={() => isDone(newToDo.id)}
        style={{
          textDecoration: newToDo.isDone ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {newToDo.text}
      </span>
      <button onClick={() => removeToDo(newToDo.id)}>✖</button>
    </li>
  );
}

export default ToDoItem;
