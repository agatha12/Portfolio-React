import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import logo from './logo.svg';
import './App.css';
import About from './about'
import Contact from './Contact'

class App extends Component {
  render() {
    return (
      <div>
         <section id="header">
      <button onClick={aboutMe}  type="button" className="hvr-wobble-top" id="about">About</button>
      <button onClick={contact} type="button" className="hvr-wobble-top" id="contact">Contact</button>
      <button type="button" className="hvr-wobble-top" id="portfolio">Portfolio</button>
      <button type="button" className="hvr-wobble-top" id="resume">Resume</button>
  </section >
    
    <section id="display">
      <div id="home">
        <div id="hometext" className="animated bounce">
          <p>Agatha Kiecun</p>
          <br></br>
           <p>Full Stack Developer</p></div>
    
      </div>
     


    </section>
      </div>
    );
  }
}

function aboutMe(){
  ReactDOM.render(<About />, document.getElementById("root"));

}

function contact(){
  ReactDOM.render(<Contact />, document.getElementById("root"));

}

export default App;
