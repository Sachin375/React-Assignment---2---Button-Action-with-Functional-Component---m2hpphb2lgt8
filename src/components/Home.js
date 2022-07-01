import React, { useState } from 'react'
function Home() {
  const [data, setData] = useState("");
  const shoot = () => {
    setData("Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy");
  }
  return (
    <div>
    <p>{data}</p>
      <button onClick={shoot}>Take the Shot!</button>
    </div>
  )
}

export default Home;
