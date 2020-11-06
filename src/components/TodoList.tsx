import React from "react";
import TodoListItem, { Todo } from "./TodoListItem";

type Props = {
  todos: Array<Todo>;
  deleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  toggleCompleted: (todo: Todo) => void;
};

const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  editTodo,
  toggleCompleted,
}) => {
  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </ul>
  );
};

export default TodoList;
