import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import Footer from './components/Footer/Footer';

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
