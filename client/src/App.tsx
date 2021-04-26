import React, { useState, useEffect, useCallback } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Navbar from "./Components/Navbar/Navbar";
// import types
import { Todoitem } from "./types";

function App() {
  // в дженереке прописываем type или допустим массив типов
  const [newlist, setNewList] = useState<Todoitem[]>([]);
  // useState должен принимать массив объектов
  const [activeItem, setActiveItem] = useState<Todoitem | null>(null); // useState может быть или объектом с полями из type TodoItem
  useEffect(() => {

    // from localStorage we recived a string but we need to save Todoitem[] and if get
    // null from localStorge we JSON.parse('[]')
    const saved = JSON.parse(
      localStorage.getItem("todos") || "[]"
    ) as Todoitem[];
    setNewList(saved);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(newlist));
  }, [newlist]);

  // когда отправляем форму
  const onSubmit = useCallback(() =>(value: string) => {
if(activeItem) {
  // const item:Todoitem|undefined = newlist.find(el=> el.id = activeItem.id)
  const arr = newlist.map((el)=> {
    if(el.id === activeItem.id) return {...el, title:value }
    return el
  }) 
  setNewList(arr)
  setActiveItem(null)
} else {
  setNewList([
    {
      id: `${Math.floor(Math.random() * 100000)}`,
      title: value,
      createdAt: new Date(),
      isDone: false,
    },
    ...newlist,
  ]);
}
  }, [ activeItem, newlist])

  

  const onClickDelete = useCallback(()=>(id: string): void => {
    const confirmDelete = window.confirm('Вы уверены что хотите удалить?')
    if(confirmDelete === true) {
      setNewList((pre) => pre.filter((el) => el.id !== id));
    }
  }, [])
  const onClickEdit = useCallback(()=>(id: string): void => {
    if (activeItem) {
      setActiveItem(null);
    } else {
      const activeEl: Todoitem | undefined = newlist.find((el) => el.id === id);
      setActiveItem(activeEl || null);
    }
  },[activeItem, newlist])
  
  const onClickDone = useCallback((id: string): void => {
    const arr = newlist.map((el, i) => ({
      ...el,
      isDone: el.id === id ? !el.isDone : el.isDone,
    }));

    setNewList(arr.sort((a: any, b: any) => a.isDone - b.isDone));
  },[newlist]);

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
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            {/* <Form initialValue={activeItem?.title} onSubmit={onSubmit} /> */}
            <Form onSubmit={onSubmit} activeItem={activeItem} />
            <List
              data={newlist}
              onClickDelete={onClickDelete}
              onClickDone={onClickDone}
              onClickEdit={onClickEdit}
            />
          </Route>
          <Route path="/others">
            <h1>here smth very different</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
