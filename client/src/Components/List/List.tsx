import React, { VFC } from 'react'
import TodoItem from "../TodoItem/TodoItem";
import { Todoitem } from '../../types';

type ListProps = {
  data: Todoitem[];
  onClickDelete?:(id:string|undefined)=>void;
}
// создаем component Void Functional Component и указываем у него 
const List: VFC<ListProps> = ({ data, onClickDelete }) => {
  return (
    <div className="">
      <h1>Todo list</h1>
      <div className="d-flex justify-content-center">
        <ul className="list-group d-flex col-11">
          {data.map(item => (<TodoItem {...item} key={item.id} onClickDelete={onClickDelete} />))}
        </ul>
      </div>
    </div>
  );
};

export default List;
