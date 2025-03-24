import { useState, useEffect } from 'react';
import ToDoList from './Components/ToDoList';
import ToDoInput from './Components/ToDoInput';
import './App.css';

function App() {
  const [toDo, setToDo] = useState(() => {
    const savedTodos = localStorage.getItem("toDo");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const newToDo = (text) => {
    const updatedTodos = [...toDo, { id: Date.now(), text, isDone: false }];
    setToDo(updatedTodos);
  };

  const removeToDo = (id) => {
    const updatedTodos = toDo.filter((todo) => todo.id !== id);
    setToDo(updatedTodos);
  };

  const isDone = (id) => {
    const updatedTodos = toDo.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setToDo(updatedTodos);
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("toDo")) || [];
    setToDo(storedList);
  }, []);

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
