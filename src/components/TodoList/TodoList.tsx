import "./TodoList.css";
import React from "react";
import { Todo } from "../../model";
import SingleTodo from "../Todo/Todo";

interface TodoListProps {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<TodoListProps> = ({ todos, setTodos }) => {
  return (
    <div className="todoList">
      {todos.map((todo: Todo) => (
        <SingleTodo todo={todo} todos={todos} setTodos={setTodos} />
      ))}
    </div>
  );
};

TodoList.propTypes = {};

export default TodoList;
