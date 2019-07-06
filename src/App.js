import React, { useState } from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
  const [isRed, setRed] = useState(false);
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <Tweet name="Vitor" />
      <Tweet name="Aline" />
      <Tweet name="Odir" />
      <Tweet name="Marcia" />
    </div>
  );
}

export default App;
