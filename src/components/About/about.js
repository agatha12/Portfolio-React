import React from 'react'
import { Col, Row, CardPanel } from 'react-materialize'
import agpic from "../../images/agpic.jpg"
import './about.css'


const About = () => {
    return (
        <div id="about">
            <Row>
                <br></br>
                <h2 className="title animated slideInDown">About Me</h2>
                <br></br>
            </Row>
            <Row >
            
                <Col s={6}>
                <div>
                    <br></br>
                <img className="animated slideInLeft" id="agpic" src={agpic} alt="Agatha Kiecun"></img>
                <p className="animated slideInLeft" id="shedPlug">Shedrick Pelt <a target="blank" href="https://www.sdotpdotmedia.com">sdotpdotmedia.com</a> social media: @sdotpdotmedia</p>
                </div>
                </Col>
                <Col s={5}>
                <CardPanel className="cyan darken-4 animated slideInRight">
                        
                        <p>Enthusiastic full stack developer with a background in Quality Control and Management. Recent graduate with certificated from Rutgers University 24-week-long intensive boot camp. A highly motivated, fast learner eager to expand my knowledge of the field and contribute in a meaningful way. Great communicator with experience collaborating on a team to creatively solve problems and produce a quality product on a tight deadline. Detail oriented programmer who thrives in a fast-paced environment. Proficient in multiple programming languages and highly adept at learning new technologies. </p>
                        
                    </CardPanel>
                </Col>           
                 </Row>
                 <Row>
                     <br></br><br></br><br></br>
                 </Row>
        </div>
    )
}

export default About 