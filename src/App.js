import React, { Component } from 'react';
import logo from './logo.svg';
// window.fetch polyfill
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  click () {
    fetch('http://localhost:3011/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'Hubot',
        login: 'hubot',
      })
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit1 <code>src/App.js</code> and save to reload.
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}
          <button className="App-link" onClick={this.click}>cors requests</button>
        </header>
      </div>
    );
  }
}

export default App;
