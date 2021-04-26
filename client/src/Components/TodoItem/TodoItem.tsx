import React, { VFC } from "react";

import { Todoitem } from "../../types";
import styles from "./style.module.css"

// мы расширяем type - через & и в расширяемом объекте свойства могут
// как присутствовать так и не
type TodoItemProps = Todoitem & {
  onActivate?: () => void;
  onClickDone: (id:string) => void;
  onClickDelete: (id:string)=> void;

}

// прописываем тип пропсов у компонента
const TodoItem: VFC<TodoItemProps> = ({ id, title, isDone, onClickDelete, onClickDone}) => {

  const handleClick = ():void => {
    onClickDelete(id);
  }
  return (
    <li className={`list-group-item d-flex justify-content-start align-items-center ${isDone? styles.done:null}`}>
      <input onClick={()=> {
        onClickDone(id)
      }}
        className="form-check-input me-1"
        type="checkbox"
        value=""
        aria-label="..."
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
