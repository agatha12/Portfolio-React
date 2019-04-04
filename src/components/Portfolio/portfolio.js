import React from 'react'
import { CardPanel, Row, Col } from 'react-materialize'
import './portfolio.css'
import TripPal from '../../images/ScreenshotHome.png'

const Portfolio = () => {
    return (
        <div id="portfolio">
              <Row>
                <br></br>
                <h2 className="title">Portfolio</h2>
                <br></br>
            </Row>
            <Row>
      
                <Col m={6} s={11}>
                    <CardPanel className="projectCard cyan darken-4">
                    <img className="cardImg" alt="Trip Pal" src={TripPal}></img><br></br>
                    <p>Trip Pal is an application that caters to many of our user's travel needs in one place. It is designed to provide a place where users can store all of their travel information in an itinerary which can be updated to keep up with any last minute changes. Users can also store their travel photos in albums and search for airport weather, flight status and hotels.</p>
                        <a href="https://boiling-sea-88261.herokuapp.com/">View the site</a><br></br>
                        <a href="https://github.com/agatha12/Travel-App">GitHub</a>
                    </CardPanel>
                </Col>
                <Col m={6} s={11}>
                    <CardPanel className="projectCard cyan darken-4">
                    <img className="cardImg" alt="Trip Pal" src={TripPal}></img><br></br>
                    <p>Trip Pal is an application that caters to many of our user's travel needs in one place. It is designed to provide a place where users can store all of their travel information in an itinerary which can be updated to keep up with any last minute changes. Users can also store their travel photos in albums and search for airport weather, flight status and hotels.</p>
                        <a href="https://boiling-sea-88261.herokuapp.com/">View the site</a><br></br>
                        <a href="https://github.com/agatha12/Travel-App">GitHub</a>
                    </CardPanel>
                </Col>
   
            </Row>
            <Row>
      
      <Col m={6} s={11}>
          <CardPanel className="projectCard cyan darken-4">
          <img className="cardImg" alt="Trip Pal" src={TripPal}></img><br></br>
          <p>Trip Pal is an application that caters to many of our user's travel needs in one place. It is designed to provide a place where users can store all of their travel information in an itinerary which can be updated to keep up with any last minute changes. Users can also store their travel photos in albums and search for airport weather, flight status and hotels.</p>
              <a href="https://boiling-sea-88261.herokuapp.com/">View the site</a><br></br>
              <a href="https://github.com/agatha12/Travel-App">GitHub</a>
          </CardPanel>
      </Col>
      <Col m={6} s={11}>
          <CardPanel className="projectCard cyan darken-4">
          <img className="cardImg" alt="Trip Pal" src={TripPal}></img><br></br>
          <p>Trip Pal is an application that caters to many of our user's travel needs in one place. It is designed to provide a place where users can store all of their travel information in an itinerary which can be updated to keep up with any last minute changes. Users can also store their travel photos in albums and search for airport weather, flight status and hotels.</p>
              <a href="https://boiling-sea-88261.herokuapp.com/">View the site</a><br></br>
              <a href="https://github.com/agatha12/Travel-App">GitHub</a>
          </CardPanel>
      </Col>

  </Row>
  <Row>
      
      <Col m={6} s={11}>
          <CardPanel className="projectCard cyan darken-4">
          <img className="cardImg" alt="Trip Pal" src={TripPal}></img><br></br>
          <p>Trip Pal is an application that caters to many of our user's travel needs in one place. It is designed to provide a place where users can store all of their travel information in an itinerary which can be updated to keep up with any last minute changes. Users can also store their travel photos in albums and search for airport weather, flight status and hotels.</p>
              <a href="https://boiling-sea-88261.herokuapp.com/">View the site</a><br></br>
              <a href="https://github.com/agatha12/Travel-App">GitHub</a>
          </CardPanel>
      </Col>
      <Col m={6} s={11}>
          <CardPanel className="projectCard cyan darken-4">
          <img className="cardImg" alt="Trip Pal" src={TripPal}></img><br></br>
          <p>Trip Pal is an application that caters to many of our user's travel needs in one place. It is designed to provide a place where users can store all of their travel information in an itinerary which can be updated to keep up with any last minute changes. Users can also store their travel photos in albums and search for airport weather, flight status and hotels.</p>
              <a href="https://boiling-sea-88261.herokuapp.com/">View the site</a><br></br>
              <a href="https://github.com/agatha12/Travel-App">GitHub</a>
          </CardPanel>
      </Col>

  </Row>


        </div>

    )
}

export default Portfolio