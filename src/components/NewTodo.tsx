import { useRef } from "react";
type TodoProp = {
addTodo: (t: string) => void
}

const NewTodo: React.FC <TodoProp>= props => {
  const textRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const newText = textRef.current!.value
    props.addTodo(newText)
    
  };
  return (
    <form onSubmit={todoSubmitHandler}>
      <div>
        <label htmlFor="todo-text">Todo Text</label>
        <input type="text" id="todo-text" ref={textRef} />
      </div>
      <button type="submit">Add Todo</button>
    </form>
  );
};
export default NewTodo;
