import React, { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [headerText, setHeaderText] = useState("Hello, ****!");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setHeaderText(`Hello, ${name}!`);
    setName("");
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label>
          Enter your name:
          <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <h1>{headerText}</h1>
    </div>
  );
}

export default App;
