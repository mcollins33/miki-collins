import './App.css';
import React, { Component } from 'react';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>

    );
  }
}

export default App;
