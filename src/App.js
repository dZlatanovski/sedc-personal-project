import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import {Home, Login, Signup} from "./components/all-components.js";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route path="/" component={Home} exact/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
