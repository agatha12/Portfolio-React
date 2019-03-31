import React from 'react'
import './skills.css'
import { Col, Row, CardPanel } from 'react-materialize'

const Skills = () => {
    return (
        <div id="skills">
         <Row>
                <br></br>
                <h2>Skills</h2>
                <br></br>
            </Row>
            <Row>
                <Col s={12}>
                <CardPanel>
                <i className="skill material-icons md-48">account_circle</i>
                <i className="skill material-icons md-48">account_circle</i>
                <i className="skill material-icons md-48">account_circle</i>
                <i className="skill material-icons md-48">account_circle</i>
                <i className="skill material-icons md-48">account_circle</i>
                </CardPanel>
                </Col>
            </Row>
        
        </div>

    )
}

export default Skills