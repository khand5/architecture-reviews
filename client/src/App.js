import React from "react";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Object from "./components/Object/Object";
import SearchPanel from "./components/Panels/Search/SearchPanel";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* <SearchPanel /> */}

      {/* <body className="App-body">
        <Object />
        <Object />
        <Object />
        <Object />
        <Object />
        <Object />
        <Object />
      </body> */}
      <Footer />
    </div>
  );
}

export default App;
