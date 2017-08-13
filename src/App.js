import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
