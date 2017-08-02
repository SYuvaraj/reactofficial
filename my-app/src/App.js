import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    const HelloWorld = <h1>Hello World </h1>
    function Welcome(props){
      return <h1>Welcome, {props.name}</h1>;
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Welcome name="Yuvaraj" />
        <Welcome name="Vinay" />
        <Welcome name="JD" />
      </div>
    );
  }
}

export default App;
