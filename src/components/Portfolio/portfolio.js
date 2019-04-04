import React from 'react'
import { CardPanel, Row, Col } from 'react-materialize'
import './portfolio.css'
import TripPal from '../../images/ScreenshotHome.png'
import Shop from '../../images/Screenshot (55).png'
import Click from '../../images/Screenshot (58).png'
import Jobs from '../../images/dreamjob.png'


const Portfolio = () => {
    return (
        <div data-aos="fade" data-aos-duration="3000" id="portfolio">
            <Row >
                <br></br>
                <h2 className="title">Portfolio</h2>
                <br></br>
            </Row>
            <Row>

                <Col m={6} s={12}>
                    <CardPanel className="projectCard cyan darken-4">
                        <h4>Trip Pal</h4>
                        <img className="cardImg" alt="Trip Pal" src={TripPal}></img><br></br>
                        <p>Trip Pal is an application that caters to many of our user's travel needs in one place.
                             It is designed to provide a place where users can store all of their travel information in an
                             itinerary which can be updated to keep up with any last minute changes. Users can also store
                             their travel photos in albums and search for airport weather, flight status and hotels.
                             The user must be logged in to access any of the sites featues.
                             Create an account and sign up or use the guest credentials provided below to log in.

email: guest@trippal.com

password: guest1</p>
                        <a target="blank" href="https://boiling-sea-88261.herokuapp.com/">View the site</a><br></br>
                        <a target="blank" href="https://github.com/agatha12/Travel-App">GitHub</a>
                    </CardPanel>
                </Col>
                <Col m={6} s={12}>
                    <CardPanel className="projectCard cyan darken-4">
                        <h4>Dev Tauks</h4>
                        <img className="cardImg" alt="Dev Tauks" src={Shop}></img><br></br>
                        <p>A website that showcases and sells clothing by up and coming high fashion designers.
                        The site also features a supervisor view where items in the store can be added, deleted and modified.
                        We also have a testimonals page, a page about the featured designers and a page about the site developers. 
                        The user must be logged in to access any of the sites featues.
                        Create an account and sign up or use the supervisor credentials provided below to log in.
                        email: supervisor@supervisor.com
                        password: supervisor
                        
                        </p>
                        <a target="blank" href="https://frozen-atoll-67387.herokuapp.com/">View the site</a><br></br>
                        <a target="blank" href="https://github.com/agatha12/Project2">GitHub</a>
                    </CardPanel>
                </Col>

            </Row>
            <Row>

                <Col m={6} s={12}>
                    <CardPanel className="projectCard cyan darken-4">
                        <h4>Marvel Clicky Game</h4>
                        <img className="cardImg" alt="Trip Pal" src={Click}></img><br></br>
                        <p>A memory game created in React.js where users must click on 12 unique images and try not to click the same one twice.</p>
                        <a target="blank" href="https://murmuring-shore-75631.herokuapp.com/">Play the game</a><br></br>
                        <a target="blank" href="https://github.com/agatha12/Clicky-Game">GitHub</a>
                    </CardPanel>
                </Col>
                <Col m={6} s={12}>
                    <CardPanel className="projectCard cyan darken-4">
                        <h4>Dream Job Finder</h4>
                        <img className="cardImg" alt="Trip Pal" src={Jobs}></img><br></br>
                        <p>An interactive job search website that calls to multiple APIs (AuthenticJobs, Twitter, GitHub Jobs, and the News API). The site displays job search results in two containers with buttons that reveal information about the various positions. We also search The News API for recent articles about jobs and displays links to those articles. Lastly we have a community section for additional support.</p>
                        <a target="blank" href="https://agatha12.github.io/Job-Search-Site/">View the site</a><br></br>
                        <a target="blank" href="https://github.com/agatha12/Job-Search-Site">GitHub</a>
                    </CardPanel>
                </Col>

            </Row>

        </div>

    )
}

export default Portfolio