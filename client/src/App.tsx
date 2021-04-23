import React from "react";
import { useState } from "react";

import "./App.css";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
// import types 
import { Todoitem } from './types';

function App() {
  // в дженереке прописываем type или допустим массив типов
  const [list, setList] = useState<Todoitem[]>([]);// useState должен принимать массив объектов
  const [activeItem, setActiveItem] = useState<Todoitem | null>(null); // useState может быть или объектом с полями из type TodoItem

  // когда отправляем форму 
const onSubmit = (value: string) => {
  setList([{
    id: `${Math.random()}${Date.now()}`,
    title: value,
    createdAt: new Date(),
    isDone: false,
  },...list])
}

  // const onSubmit = (value: string) => {
  //   if (activeItem) {
  //     setList(list.splice(
  //       list.findIndex((item) => item.id === activeItem.id),
  //       1,
  //       { ...activeItem, title: value }
  //     ));
  //     setActiveItem(null);
  //   } else {
  //     setList([{
  //       id: `${Math.random()}${Date.now()}`,
  //       title: value,
  //       createdAt: new Date(),
  //       isDone: false
  //     }, ...list]);
  //   }
  // }

  return (
    <div className="App">
      {/* <Form initialValue={activeItem?.title} onSubmit={onSubmit} /> */}
      <Form onSubmit={onSubmit} />
      <List data={list} />
    </div>
  );
}

export default App;
