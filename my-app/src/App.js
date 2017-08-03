import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Comment from './Comment.js';
import EventHandling from './components/eventHandling.js';

class App extends Component {
  render() {
    const HelloWorld = <h1>Hello World </h1>;

    function Welcome(props){
      return <h1>Welcome, {props.name}</h1>;
    }

   const comment = {
      date: new Date(),
      text: 'I hope you enjoy learning React!',
      author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/64/64'
      }
    };

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

        <Comment  date={comment.date}
                  text={comment.text}
                  author={comment.author} />

        <EventHandling />
      </div>
    );
  }
}

export default App;
