import React from 'react'
import './skills.css'
import { Col, Row, CardPanel } from 'react-materialize'
import { Icon, InlineIcon } from '@iconify/react';
import firebaseIcon from '@iconify/react/mdi/firebase';
import mongodbIcon from '@iconify/react/simple-icons/mongodb';
import jqueryIcon from '@iconify/react/mdi/jquery';
import languageJsx from '@iconify/react/mdi/language-jsx';
import materializecssIcon from '@iconify/react/logos/materializecss';
import reduxIcon from '@iconify/react/simple-icons/redux';
import mysqltwoIcon from '@iconify/react/whh/mysqltwo';
import herokuIcon from '@iconify/react/simple-icons/heroku';
import photoshopIcon from '@iconify/react/whh/photoshop';



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
                <Icon className="skillM" icon={materializecssIcon} />
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
                <Icon className="skillIcon" icon={jqueryIcon} />
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
                <Icon className="skillIcon" icon={reduxIcon} />
                    <p>Redux.js</p>
                </Col>

            </Row>
            <Row>
                <p className="smallTitle">Back-End</p>
            </Row>
            <Row>
                <Col className="skill">
                <Icon className="skillIcon" icon={mysqltwoIcon} />
                    <p>MySQL</p>
                </Col>
                <Col className="skill">
                <Icon className="skillIcon" icon={mongodbIcon} />
                    <p>MongoDB</p>
                </Col>
            </Row>
                <Row>
                    <p className="smallTitle">Other</p>
                </Row>
                <Row>
                <Col className="skill">
                <Icon className="skillIcon" icon={firebaseIcon} />
                    <p>Firebase</p>
                </Col>
                <Col className="skill">
                    <i className="skillIcon fab fa-github"></i>
                    <p>GitHub</p>
                </Col>
                <Col className="skill hide-on-small-only">
                <Icon className="skillIcon" icon={photoshopIcon} />  
               <p>Photoshop</p>
                </Col>
                <Col className="skill">
                <Icon className="skillIcon" icon={herokuIcon} />
                    <p>Heroku</p>
                </Col>
            
                </Row>

            
        
        </div>

            )
        }
        
export default Skills