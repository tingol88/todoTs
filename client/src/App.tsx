import React, { useState } from "react";

import "./App.css";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
// import types
import { Todoitem } from "./types";

function App() {
  // в дженереке прописываем type или допустим массив типов
  const [newlist, setNewList] = useState<Todoitem[]>([
    {
      id: "123455",
      title: "deal",
      isDone: false,
      createdAt: new Date(),
    },
    {
      id: "12345675",
      title: "real deal",
      isDone: true,
      createdAt: new Date(),
    },
  ]); // useState должен принимать массив объектов
  // const [activeItem, setActiveItem] = useState<Todoitem | null>(null); // useState может быть или объектом с полями из type TodoItem

  // когда отправляем форму
  const onSubmit = (value: string) => {
    setNewList([
      {
        id: `${Math.floor(Math.random() * 100000)}`,
        title: value,
        createdAt: new Date(),
        isDone: false,
      },
      ...newlist,
    ]);
  };

  const onClickDelete = (id: string): void => {
    console.log("onClickDelete", id);
    setNewList((pre) => pre.filter((el) => el.id !== id));
  };
  const onClickDone = (id: string): void => {
    console.log("onClickDone", id);

    const arr = newlist.map((el, i) => ({
      ...el,
      isDone: el.id === id ? !el.isDone : el.isDone,
      // if (el.id === id) {
      //   el.isDone = !el.isDone
      // }
      // return el
    }));
    console.log("arr", arr);

    setNewList(arr);
  };

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
  console.log("list", newlist);

  return (
    <div className="App">
      {/* <Form initialValue={activeItem?.title} onSubmit={onSubmit} /> */}
      <Form onSubmit={onSubmit} />
      <List
        data={newlist}
        onClickDelete={onClickDelete}
        onClickDone={onClickDone}
      />
    </div>
  );
}

export default App;
