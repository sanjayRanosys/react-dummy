import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends Component {
  /*handleClick = () => {
    console.log('this is:', this);
  }*/

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    console.log('this is this :', this)
    console.log('this is e :', e)
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>Click me</button>

        <ul>
           <li>Home</li>
           <li>About</li>
           <li>Contact</li>
        </ul>
            
       {this.props.children}
      </div>
    );
  }
}

export default App;
