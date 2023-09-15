import "./Todo.css";
import { Todo } from "../../model";
import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { MdOutlineDeleteForever, MdOutlineDoneAll } from "react-icons/md";

interface TodoProps {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo: React.FC<TodoProps> = ({ todo, todos, setTodos }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedNote, setEditedNote] = useState<string>(todo.todo);

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo: Todo) => todo.id != id));
  };

  const handleToggle = (id: number) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleSubmit = (id: number) => {
    setTodos(
      todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, todo: editedNote } : todo
      )
    );
    setIsEditing(false);
  };

  return (
    <div className="todo">
      {isEditing ? (
        <form
          onSubmit={() => {
            handleSubmit(todo.id);
          }}
        >
          <input
            className="edit-input"
            value={editedNote}
            onChange={(e) => {
              setEditedNote(e.target.value);
            }}
          />
        </form>
      ) : todo.isDone ? (
        <s>{todo.todo}</s>
      ) : (
        <span>{todo.todo}</span>
      )}
      <div className="icon-group">
        <span
          className="icon"
          onClick={() => {
            handleToggle(todo.id);
          }}
        >
          <MdOutlineDoneAll />
        </span>
        <span className="icon" onClick={() => setIsEditing(true)}>
          <BiEditAlt />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <MdOutlineDeleteForever />
        </span>
      </div>
    </div>
  );
};

export default SingleTodo;
