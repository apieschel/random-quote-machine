import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            &ldquo;After some further crooked questions from these bourgeois, the secret of their 'sympathy' for widows, poor families and so on emerges into the daylight.&rdquo;
          </p>
        </header>
      </div>
    );
  }
}

export default App;
