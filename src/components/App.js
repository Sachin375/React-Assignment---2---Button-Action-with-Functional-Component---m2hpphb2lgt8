import React, {Component, useState} from "react";
import "./../styles/App.css";
function App() {
  
  const [data, setData] = useState("");
  const shoot = () => {
    setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  
  return (
    <div id="main">
      <button id="click" onClick={shoot}>click</button>
       {data !== "" ? <p id="para">{data}</p> : null}
    </div>
  );
}


export default App;


