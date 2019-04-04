import React from 'react'
import './skills.css'
import { Col, Row, CardPanel } from 'react-materialize'
import { Icon, InlineIcon } from '@iconify/react';
import languageJsx from '@iconify/react/mdi/language-jsx';
import materializecssIcon from '@iconify/react/logos/materializecss';

const Skills = () => {
    return (
        <div id="skills">
            <Row>
                <br></br>
                <h2 className="title">Skills</h2>
                <br></br>
            </Row>
            <Row>
                <p className="smallTitle">HTML and CSS</p>
            </Row>
            <Row>
                <Col className="skill">
                    <i className="skillIcon fab fa-html5"></i>
                    <p>HTML 5</p>
                </Col>
                <Col className="skill">
                <Icon className="skillIcon" icon={languageJsx} />
                    <p>JSX</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-css3"></i>
                    <p>CSS 3</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-bootstrap"></i>
                    <p>Bootstrap.css</p>
                </Col>
                <Col className="skill">
                <Icon className="skillIcon" icon={materializecssIcon} />
                <p>Materialize.css</p>
                </Col>
            </Row>
            <Row>
                <p className="smallTitle">Javascript</p>
            </Row>
            <Row>
                <Col className="skill">
                    <i className="skillIcon fab fa-js"></i>
                    <p>Javascript</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-jquery"></i>
                    <p>jQuery</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-node"></i>
                    <p>Node.js</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-react"></i>
                    <p>React.js</p>
                </Col>
                <Col className="skill">
                    <span class="iconify skillIcon" data-icon="simple-icons:redux" data-inline="false"></span>
                    <p>Redux.js</p>
                </Col>

            </Row>
            <Row>
                <p className="smallTitle">Back-End</p>
            </Row>
            <Row>
                <Col className="skill">
                    <i className="skillIcon fab fa-mysql"></i>
                    <p>MySQL</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-mongodb"></i>
                    <p>MongoDB</p>
                </Col>
            </Row>
                <Row>
                    <p className="smallTitle">Other</p>
                </Row>
                <Row>
                <Col className="skill">
                    <i className="skillIcon fab fa-firebase"></i>
                    <p>Firebase</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-github"></i>
                    <p>GitHub</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-heroku"></i>
                    <p>Heroku</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-photoshop"></i>
                    <p>Photoshop</p>
                </Col>
                </Row>
            
        
        </div>

            )
        }
        
export default Skills