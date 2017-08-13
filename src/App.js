import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Form from './components/Form';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Form />
      </div>
    );
  }
}

export default App;
