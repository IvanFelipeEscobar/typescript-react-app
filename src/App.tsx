import { useState } from "react";
import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import { Todo } from "./todo.model";
function App() {
  const [todos, seTodos] = useState<Todo[]>([]);
  const todoAdd = (text: string) => {
    seTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };
  const deleteHandler = (todoId: string) => {
seTodos(prevTodos => {
  return prevTodos.filter(todo => todo.id !== todoId)
})
  }
  return (
    <div className="App">
      <NewTodo addTodo={todoAdd}/>
      <TodoList items={todos} deleteHandler={deleteHandler}/>
    </div>
  );
}

export default App;
