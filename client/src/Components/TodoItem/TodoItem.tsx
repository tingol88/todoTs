import React, { VFC } from "react";
import { Todoitem } from "../../types";

type TodoItemProps = Todoitem & {
  onActivate?: () => void;
  onDone?: () => void;
}

const TodoItem: VFC<TodoItemProps> = ({ title, isDone }) => {
  return (
    <li className="list-group-item d-flex justify-content-start">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
        defaultChecked={isDone}
      />
      {title}
    </li>
  );
};
export default TodoItem;
