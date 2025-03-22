import ToDoItem from "./ToDoItem";

function ToDoList({ toDo, removeToDo, isDone }) {
  return (
    <div>
      <ul>
        {toDo.map((todos) => (
          <ToDoItem
            key={todos.id}
            newToDo={todos}
            removeToDo={removeToDo}
            isDone={isDone}
          />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
