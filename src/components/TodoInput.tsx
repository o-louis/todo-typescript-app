import React from "react";
// Modules
import styled from "styled-components";
import { IoMdAdd } from "react-icons/io";

type Props = {
  todo: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 1.2rem;
`;

const Field = styled.div`
  display: flex;
  padding: 10px 0px;
`;

const Input = styled.input`
  padding: 10px 10px;
  background: #f3fbfb;
  flex: 1 1 100%;
  font-size: 1rem;
`;

const ButtonAdd = styled.button`
  background: #1e2b3a;
  color: #fff;
  flex: 0 1 10%;
`;

const TodoInput: React.FC<Props> = ({ todo, handleChange, handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <Label htmlFor="todo">Add a todo</Label>
      <Field>
        <Input
          id="todo"
          name="todo"
          type="text"
          value={todo}
          onChange={handleChange}
        />
        <ButtonAdd type="submit">
          <IoMdAdd />
        </ButtonAdd>
      </Field>
    </Form>
  );
};

export default TodoInput;
