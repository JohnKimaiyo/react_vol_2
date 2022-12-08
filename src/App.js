import React from "react";
import "./App.css";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Title from "./components/Title";
import MyName from "./components/MyName";

function App() {
  return (
    <div className="App">
      <Greet />
      <Welcome />
      <Hello />
      <Title name="Frontend Dev Kimaiyo" />
      <Title name="Mobile Dev Kimaiyo" />
      <Title name="Solidity Dev Kimaiyo" />
      <MyName/>
    </div>
  );
}

export default App;
