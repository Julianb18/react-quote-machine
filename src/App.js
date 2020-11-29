import React, { useState } from "react";
import "./App.css";

const quotes = [
  "In the jungle",
  "We're no strangers to love",
  "We could all use a little change",
  "I'll be back",
];

function App() {
  const [counter, setCounter] = useState(2);
  return (
    <div className="container">
      <h2>{quotes[counter % quotes.length]}</h2>
      <button className="btn" onClick={(event) => setCounter(counter + 1)}>
        Change quote
      </button>
    </div>
  );
}

export default App;
