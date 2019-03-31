import React, { Component } from 'react';
import Home from './components/home/home';
import Nav from './components/NavBar/nav'
import About from './components/About/about'
import Skills from './components/Skills/skills'
import Portfolio from './components/Portfolio/portfolio'
import Contact from './components/Contact/contact'
import { Row, Col } from "react-materialize"
import './App.css';
import 'materialize-css'


require('materialize-css/dist/css/materialize.css')
class App extends Component {
  render() {

    return (
      <div className="App">
        <Row>

          <Col s={2}>
            <Nav />
          </Col>
          <div id="content">
          
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            </div>

        </Row>
      </div>
    );
  }
}

export default App;
