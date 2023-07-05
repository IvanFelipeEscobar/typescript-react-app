interface TodoListProp {
  items: { id: string; text: string }[];
  deleteHandler: (id:string) => void;
}
const TodoList: React.FC<TodoListProp> = (props) => {
  return (
    <ul>
      {props.items.map((t) => (
        <li key={t.id}>
          <span>{t.text}</span>
          <button onClick={props.deleteHandler.bind(null, t.id)}>DELETE</button>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
