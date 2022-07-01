import React, { useState } from 'react'

function Home() {
  const [data, setData] = useState();
  const [val, setVal] = useState("hidden");
  const shoot = () => {

    setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
    setVal("visible");
  }
  return (
    <div>
      <p id="para" style={{visibility:val}}>{data}</p>
      <button id="click" onClick={shoot}>Take the Shot!</button>
    </div>
  )
}

export default Home;
