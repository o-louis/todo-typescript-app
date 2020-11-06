import React, { useState } from "react";
// Components
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
// Types
import { Todo } from "./components/TodoListItem";
// Modules
import styled, { createGlobalStyle } from "styled-components";
import { RiCalendarTodoLine } from "react-icons/ri";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    list-style-type: none;
    font-family: 'Open Sans', sans-serif;
  }
  
  button,
  input {
    border: none;
    background: none;
  }

  body {
    font-size: 62.5%;
  }

  #root {
    background: #F3FAFB;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .App {
    background: #fff;
    width: 100%;
    max-width: 400px;
    height: 600px;
    border-radius: 20px;
    padding: 40px;
  }
`;

const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  position: relative;
  margin-bottom: 30px;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 1px;
    background: #eeeeee;
    position: absolute;
    top: 130%;
  }
  svg {
    margin-right: 10px;
  }
`;

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Array<Todo>>([]);

  /*
   ** Form Handler
   */
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (todo) {
      addTodo(todo);
      setTodo("");
    }
  };

  /*
   ** Create, Update and Delete actions
   */
  const addTodo = (todo: string) => {
    const newTodos = [
      ...todos,
      { id: todos.length + 1, name: todo, completed: false },
    ];
    setTodos(newTodos);
  };

  const deleteTodo = (todo: Todo) => {
    const newTodos = todos.filter((item) => item.id !== todo.id);
    setTodos(newTodos);
  };

  const editTodo = (todo: Todo) => {
    deleteTodo(todo);
    setTodo(todo.name);
  };

  const toggleCompleted = (todo: Todo) => {
    const todoIndex = todos.findIndex((item) => item.id === todo.id);
    let newArray = [...todos];
    newArray[todoIndex] = {
      ...newArray[todoIndex],
      completed: !newArray[todoIndex].completed,
    };
    setTodos(newArray);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <Title>
        <RiCalendarTodoLine />
        Todo App
      </Title>
      <TodoInput
        todo={todo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <TodoList
        todos={todos}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
        toggleCompleted={toggleCompleted}
      />
    </div>
  );
};

export default App;
