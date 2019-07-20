import React from "react";
import "./App.css";

import Clock from "./components/Clock/Clock";

function App() {
  return (
    <div className="App">
      <header className="App-header">This is the header.</header>
      <body className="App-body">
        {" "}
        This is the body. <Clock />
      </body>
      <footer className="App-footer"> And this is the footer.</footer>
    </div>
  );
}

export default App;
