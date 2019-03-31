import React from 'react'
import { Col, Row, CardPanel } from 'react-materialize'
import agpic from "../../images/agpic.jpg"
import './about.css'


const About = () => {
    return (
        <div>
            <Row></Row>
            <Row id="about">
                <Col s={2}></Col>
                <Col s={8}>
                    <CardPanel className="white">
                        <img src={agpic} alt="Agatha Kiecun"></img>
                        <p>Shedrick Pelt sdotpdotmedia.com social media: @sdotpdotmedia</p>
                        <p>Enthusiastic full stack developer with a background in Quality Control and Management. Recent graduate with certificated from Rutgers University 24-week-long intensive boot camp. A highly motivated, fast learner eager to expand my knowledge of the field and contribute in a meaningful way. Great communicator with experience collaborating on a team to creatively solve problems and produce a quality product on a tight deadline. Detail oriented programmer who thrives in a fast-paced environment. Proficient in multiple programming languages and highly adept at learning new technologies. </p>
                        
                    </CardPanel>
                </Col>
            </Row>
        </div>
    )
}

export default About 