import React, { Component } from 'react';
import Home from './components/home/home';
import Nav from './components/NavBar/nav'
import About from './components/About/about'
import Skills from './components/Skills/skills'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import './App.css';
import 'materialize-css'


require('materialize-css/dist/css/materialize.css')
class App extends Component {
  render() {
    
    return (
      <div className="App">

      <Home/>
      <Nav/>
      <About/>
      <Skills/>
      <Portfolio/>
      <Contact/>

      </div>
    );
  }
}

export default App;
