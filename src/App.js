import React, { Component } from 'react';
import logo from './logo.svg';
// window.fetch polyfill
import 'whatwg-fetch';
import './App.css';

class App extends Component {
  constructor(props, context) {
    super(props, context)
    this.state = {

    }
  }
  onChange (e, type) {
    this.setState({
      [type]: e.target.value
    })
  }
  click () {
    fetch('http://localhost:3011/users', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
      },
      body: JSON.stringify({
        name: 'Hubot干啥呢',
        login: 'hubot<script></script>',
      })
      // body: 'name=Hubot干啥呢&login=hubot<script></script>'
    })
  }
  onSubmit () {
    return false
  }
  submit () {
    let form = document.getElementById('forms')
    form.submit()
    return false;
  }
  render() {
    let {description, myFile} = this.state;
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
        <h3>form submit</h3>
        <form action="http://localhost:3011/formDataSumit" method="post" encType="multipart/form-data" onSubmit={this.onSubmit} id="forms">
          <input type="text" name="description" value={description} onChange={(e) => this.onChange(e, 'description')}/>
          <input type="file" name="myFile" value={myFile} onChange={(e) => this.onChange(e, 'myFile')}/>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
