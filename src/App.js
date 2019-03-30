import React, { Component } from 'react';
import Home from './components/home/home';
import Nav from './components/NavBar/nav'
import './App.css';
import 'materialize-css'
import { TimePicker } from 'react-materialize'
require('materialize-css/dist/css/materialize.css')

class App extends Component {
  render() {
    return (
      <div className="App">
      <Home />
      <Nav></Nav>
        
<br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <div>
        hey
      </div>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <p id="about">about</p>
      <br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <TimePicker/>
      </div>
    );
  }
}

export default App;
