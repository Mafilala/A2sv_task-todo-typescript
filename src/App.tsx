import React, { useState } from "react";
import "./App.css";
import InputField from "./components/inputField/InputField";
import { Todo } from "./model";
import TodoList from "./components/TodoList/TodoList";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  return (
    <article className="todo-app">
      <h1>Todo App</h1>
      <InputField
        todo={todo}
        todos={todos}
        setTodo={setTodo}
        setTodos={setTodos}
      />
      <TodoList todos={todos} setTodos={setTodos} />
    </article>
  );
};

export default App;
