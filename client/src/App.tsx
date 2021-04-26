import React from "react";
import { useState } from "react";

import "./App.css";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";

const App: React.FC = () => {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);
  const handlerInput: (event: any) => void = (event: any) => {
    setInput(event.target.value);
  };
  const handlerAddButton: (event: any) => void = (event: any) => {
    if (input) {
      setList((pre) => {
        return [...pre];
      });
    }
  };
  return (
    <div className="App">
      <Form input={input} handlerInput={handlerInput} />
      <List />
    </div>
  );
};

export default App;
