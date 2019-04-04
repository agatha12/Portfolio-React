import React, { Component } from 'react';
import Home from './components/home/home';
import Nav from './components/NavBar/nav'
import MobileNav from './components/NavBar/mobileNav'
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
      <Row  className="hide-on-med-and-up">
      <MobileNav/>
      </Row>
        <Row>

          <Col m={2} s={0} className="hide-on-small-only">
            <Nav />
          </Col>
          
          <Col m={10} s={12}>
          <div id="content">
            
            <Home />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            </div>
            </Col>
            

        </Row>
      </div>
    );
  }
}

export default App;
