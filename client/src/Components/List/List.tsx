import TodoItem from "../TodoItem/TodoItem";

const List = () => {
  return (
    <div className="">
      <h1>Todo list</h1>
      <div className="d-flex justify-content-center">
    <ul className="list-group d-flex col-11">
      <TodoItem />
      <TodoItem />
      
    </ul>
    </div>
    </div>
    
  );
};

export default List;
