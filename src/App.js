import React from "react";
import "./App.css";

import Clock from "./components/Clock/Clock";
import LoginPanel from "./components/Panels/Login/LoginPanel";

function App() {
  return (
    <div className="App">
      <header className="App-header">This is the header.</header>
      <body className="App-body">
        {" "}
        <Clock />
        <Clock />
        <Clock />
        <LoginPanel />
      </body>
      <footer className="App-footer"> And this is the footer.</footer>
    </div>
  );
}

export default App;
