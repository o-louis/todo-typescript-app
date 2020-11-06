import React from "react";

type Props = {
  todo: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const TodoInput: React.FC<Props> = ({ todo, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todo">Add a todo</label>
      <input
        id="todo"
        name="todo"
        type="text"
        value={todo}
        onChange={handleChange}
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoInput;
