import "./App.css";
import Header from "./Compoonents/Header/header";
import Home from "./Compoonents/Body/Home/home";
import Button from "./Compoonents/Body/Button/button";
import Details from "./Compoonents/Body/Details/details";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <div className="App">
        <Home></Home>
        <Button></Button>
        <Details></Details>
      </div>
    </React.Fragment>
  );
}

export default App;
