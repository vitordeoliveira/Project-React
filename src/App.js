import React, { useState } from "react";
import Tweet from "./Tweet";
import "./App.css";

function App() {
  const [users, setUsers] = useState([
    { name: "Ed", message: "Hello there" },
    { name: "John", message: "I am the king of the north" },
    { name: "Traversy", message: "I am awasome" }
  ]);
  return (
    <div className="App">
      {users.map(user => (
        <Tweet name={user.name} message={user.message} />
      ))}
    </div>
  );
}

export default App;
