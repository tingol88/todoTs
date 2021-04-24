import React, { VFC } from "react";
import { Todoitem } from "../../types";

// мы расширяем type - через & и в расширяемом объекте свойства могут
// как присутствовать так и не
type TodoItemProps = Todoitem & {
  onActivate?: () => void;
  onDone?: () => void;
  onClickDelete?: (id:string|undefined)=> void;
}

// прописываем тип пропсов у компонента
const TodoItem: VFC<TodoItemProps> = ({ id, title, isDone, onClickDelete,}) => {

  const handleClick = ():void => {
    onClickDelete?.(id);
  }
  return (
    <li className="list-group-item d-flex justify-content-start align-items-center">
      <input
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
        data-id={id}
        defaultChecked={isDone}
      />
      {title}
      <button
      onClick={()=>{
        handleClick()
      }}
        style={{ width: "50px", height: '40px', marginLeft: 'auto', marginRight: '15px',}}
        type="submit"
        className="btn btn-primary ml-auto p-2 bd-highlight"
      ><i className="fas fa-trash"></i></button>
    </li>
  );
};
export default TodoItem;
