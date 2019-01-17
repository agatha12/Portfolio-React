import React, { Component } from 'react';
import agpic from "./agpic.jpg"

// import logo from './logo.svg';
// import './App.css';

class About extends Component {
  render() {
    return (
      <div>
         <section id="header">
      <button type="button" className="hvr-wobble-top" id="about">About</button>
      <button type="button" className="hvr-wobble-top" id="contact">Contact</button>
      <button type="button" className="hvr-wobble-top" id="portfolio">Portfolio</button>
      <button type="button" className="hvr-wobble-top" id="resume">Resume</button>
  </section >
    
    <section id="aboutdisplay">
    <div id="agpic">
    <img src={agpic} alt="pic"></img>
    <p>Shedrick Pelt sdotpdotmedia.com social media: @sdotpdotmedia</p>
    </div>
    
     <p id="brand">    Enthusiastic full stack developer with a background in Quality Control and Management. Highly motivated, fast learner eager to expand my knowledge of the field and contribute to your company in a meaningful way. Great communicator with experience collaborating on a team to creatively solve problems and produce a quality product on a tight deadline. Detail oriented and neat programer who thrives in a fast paced environment. Proficient in CSS, JavaScript and Node and highly adept at learning new technologies.</p>


    </section>
      </div>
    );
  }
}


export default About;
