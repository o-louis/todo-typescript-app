import React from "react";
// Components
import TodoListItem, { Todo } from "./TodoListItem";
// Modules
import styled from "styled-components";

type Props = {
  todos: Array<Todo>;
  deleteTodo: (todo: Todo) => void;
  editTodo: (todo: Todo) => void;
  toggleCompleted: (todo: Todo) => void;
};

const List = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  editTodo,
  toggleCompleted,
}) => {
  return (
    <List>
      {todos.map((todo, index) => (
        <TodoListItem
          key={index}
          todo={todo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          toggleCompleted={toggleCompleted}
        />
      ))}
    </List>
  );
};

export default TodoList;
