import React from "react";

export interface Todo {
  id: number;
  name: string;
  completed: boolean;
}

type Props = {
  todo: Todo;
  deleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  toggleCompleted: (todo: Todo) => void;
};

const TodoListItem: React.FC<Props> = ({
  todo,
  deleteTodo,
  editTodo,
  toggleCompleted,
}) => (
  <li>
    <input
      type="checkbox"
      id={`checkbox-${todo.id}`}
      onChange={() => toggleCompleted(todo)}
      checked={todo.completed}
    />
    <label
      htmlFor={`checkbox-${todo.id}`}
      className={todo.completed ? "done" : undefined}
    >
      {todo.name}
    </label>
    <button onClick={() => editTodo(todo)}>EDIT</button>
    <button onClick={() => deleteTodo(todo)}>DELETE</button>
  </li>
);

export default TodoListItem;
