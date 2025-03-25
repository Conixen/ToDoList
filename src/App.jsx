import { useState, useEffect } from 'react';
import ToDoList from './Components/ToDoList';
import ToDoInput from './Components/ToDoInput';
import './App.css';

function App() {
  // load to do list from local storage
  const [toDo, setToDo] = useState(() => {
    const savedTodos = localStorage.getItem("toDo");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  // add new task
  const newToDo = (text) => {
    const updatedTodos = [...toDo, { id: Date.now(), text, isDone: false }];
    setToDo(updatedTodos);
  };
  // remove task
  const removeToDo = (id) => {
    const updatedTodos = toDo.filter((todo) => todo.id !== id);
    setToDo(updatedTodos);
  };
  // mark as done cover it upp
  const isDone = (id) => {
    const updatedTodos = toDo.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setToDo(updatedTodos);
  };
  // laod to list when app starts
  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("toDo")) || [];
    setToDo(storedList);
  }, []);
  // save all the todods
  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div className="to-do-app">
      <h1>Min To-do lista</h1>
      <div className="app-container">
        <div className="input-section">
          <ToDoInput newToDo={newToDo} />
        </div>
        <div className="todo-list-section">
          <ToDoList toDo={toDo} removeToDo={removeToDo} isDone={isDone} />
        </div>
      </div>
    </div>
  );
  
}

export default App;
