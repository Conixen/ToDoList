import { useState, useEffect } from 'react';
import ToDoList from './Components/ToDoList';
import ToDoInput from './Components/ToDoInput';
import './App.css';

function App() {
  const [toDo, setToDo] = useState([]);

  const newToDo = (text) => {
    setToDo([...toDo, { id: Date.now(), text, isDone: false }]);
  };

  const removeToDo = (id) => {
    setToDo(toDo.filter((toDo) => toDo.id !== id));
  };

  const isDone = (id) => {
    setToDo(
      toDo.map((toDo) =>
        toDo.id === id ? { ...toDo, isDone: !toDo.isDone } : toDo
      )
    );
  };

  useEffect(() => {
    const storedList = JSON.parse(localStorage.getItem("toDo")) || [];
    setToDo(storedList);
  }, []);

  useEffect(() => {
    localStorage.setItem("toDo", JSON.stringify(toDo));
  }, [toDo]);

  return (
    <div className='to-do-app'>
      <h1>Min To-do lista</h1>
      <ToDoInput newToDo={newToDo} />
      <ToDoList toDo={toDo} removeToDo={removeToDo} isDone={isDone} />
    </div>
  );
}

export default App;
