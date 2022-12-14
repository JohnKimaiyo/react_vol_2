import React from "react";
import "./App.css";
import BookList from "./components/BookList";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <BookList/>
      <Navbar/>
    </div>
  );
}

export default App;
