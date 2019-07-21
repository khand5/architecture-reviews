import React from "react";
import "./App.css";

import Clock from "./components/Clock/Clock";
import LoginPanel from "./components/Panels/Login/LoginPanel";
import ChessboardContainer from "./components/ChessboardContainer/ChessboardContainer";

function App() {
  return (
    <div className="App">
      <header className="App-header">This is the header.</header>
      <body className="App-body">
        {" "}
        <Clock />
        <ChessboardContainer />
        <LoginPanel />
      </body>
      <footer className="App-footer"> And this is the footer.</footer>
    </div>
  );
}

export default App;
