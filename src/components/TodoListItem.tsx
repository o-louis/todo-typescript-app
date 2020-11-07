import React from "react";
// Modules
import styled from "styled-components";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";

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

const TodoItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 1rem;
  &:hover {
    background: #f3fbfb;
  }

  input {
    display: none;
  }
`;

const Label = styled.label`
  flex: 1 1 100%;
  padding: 10px;
  cursor: pointer;

  &.done {
    text-decoration: line-through;
    color: #a2a4b0;
  }
`;

const ButtonIcon = styled.button`
  font-size: 1.3rem;
  margin-left: 20px;

  &:hover svg {
    color: #4299e1;
    cursor: pointer;
  }

  &:nth-of-type(2) {
    margin-right: 10px;
    &:hover svg {
      color: #e53e3e;
      cursor: pointer;
    }
  }
`;

const TodoListItem: React.FC<Props> = ({
  todo,
  deleteTodo,
  editTodo,
  toggleCompleted,
}) => (
  <TodoItem>
    <input
      type="checkbox"
      id={`checkbox-${todo.id}`}
      onChange={() => toggleCompleted(todo)}
      checked={todo.completed}
    />
    <Label
      htmlFor={`checkbox-${todo.id}`}
      className={todo.completed ? "done" : undefined}
      dangerouslySetInnerHTML={{ __html: todo.name }}
    />
    <ButtonIcon onClick={() => editTodo(todo)}>
      <AiOutlineEdit />
    </ButtonIcon>
    <ButtonIcon onClick={() => deleteTodo(todo)}>
      <AiOutlineDelete />
    </ButtonIcon>
  </TodoItem>
);

export default TodoListItem;
