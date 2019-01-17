import React, { Component } from 'react';


// import logo from './logo.svg';
// import './App.css';

class Contact extends Component {
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
                    <div id="conactdiv"
                    ><p className="space"></p>
                    <h1>Contact Info</h1>
                    <p>Email: agkiecun@gmail.com</p><p><a href="https://github.com/agatha12" className="contactlink" target="blank">GitHub</a></p>
                    <p><a href="https://www.linkedin.com/in/agatha-kiecun-783a625b/" className="contactlink" target="blank">LinkedIn</a></p>
                    <button id="modalbutton" type="button" data-toggle="modal" className="btn btn-primary" data-target="#exampleModal">Click to send me a message</button>
                    <p className="space"></p></div>
                </section>
            </div>
        );
    }
}


export default Contact;


