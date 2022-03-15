// import './App.css';
import { useEffect, useState } from "react";
import CallGetApi from "./components/CallGetApi";
import Todo from "./components/Todo";
import axios from "axios";

function App() {
  
 
  return (
    <div className="App">
      {/* <Todo/> */}
      <CallGetApi />
    </div>
  );
}

export default App;
