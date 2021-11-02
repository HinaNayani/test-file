import './List.css';
import { useState} from 'react';

const List = (props) => {
  const [todos, setTodos] = useState(props.todos);
  return (
    <div className="List">
      <ol className="rounded-list">
              {todos.map((todo) => <li key={todo.id}><a href={todo.href}>{todo.title}</a></li>)}
      </ol>
      </div>
  );
};

export default List;
