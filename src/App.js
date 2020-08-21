import React, { Component } from "react";
import {Route} from "react-router-dom";
import Home from "./components/home"
import User from "./components/user";
import NavBar from "./components/navbar";
import "./App.css";



class App extends Component {

  render() {
    return (
      <React.Fragment>
      <div>
        <NavBar />
       <div>
        <Route path="/" exact component={Home} />
        <Route path="/User" exact component={User} />
        </div>
      </div>
    </React.Fragment>
      );
  }
}

export default App;