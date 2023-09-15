import "./InputField.css";
import React, { FormEvent } from "react";
import { Todo } from "../../model";

interface InputProps {
  todo: string;
  todos: Todo[];
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const InputField: React.FC<InputProps> = ({
  todo,
  todos,
  setTodo,
  setTodos,
}) => {
  return (
    <form
      className="input-area"
      onSubmit={(e: FormEvent) => {
        e.preventDefault();
        setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
        setTodo("");
      }}
    >
      <input
        type="text"
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value);
        }}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default InputField;
