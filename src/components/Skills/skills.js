import React from 'react'
import './skills.css'
import { Col, Row, CardPanel } from 'react-materialize'
//import { Icon, InlineIcon } from '@iconify/react';
import { Icon } from '@iconify/react';
// import firebaseIcon from '@iconify/react/mdi/firebase';
// import mongodbIcon from '@iconify/react/simple-icons/mongodb';
// import jqueryIcon from '@iconify/react/mdi/jquery';
// import languageJsx from '@iconify/react/mdi/language-jsx';
// import materializecssIcon from '@iconify/react/logos/materializecss';
// import reduxIcon from '@iconify/react/simple-icons/redux';
// import mysqltwoIcon from '@iconify/react/whh/mysqltwo';
// import herokuIcon from '@iconify/react/simple-icons/heroku';
// import photoshopIcon from '@iconify/react/whh/photoshop';



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
                <Col data-aos="slide-down" data-aos-duration="400" className="skill">
                    <i className="skillIcon fab fa-html5"></i>
                    <p>HTML 5</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="800" className="skill">
                <Icon className="skillIcon" icon="mdi:language-jsx"
                //{languageJsx} 
                />
                    <p>JSX</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="1200" className="skill">
                    <i className="skillIcon fab fa-css3"></i>
                    <p>CSS 3</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="1600" className="skill">
                    <i className="skillIcon fab fa-bootstrap"></i>
                    <p>Bootstrap.css</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="2000" className="skill">
                <Icon className="skillM" icon="logos:materializecss" />
                <p>Materialize.css</p>
                </Col>
            </Row>
            <Row>
                <p className="smallTitle">Javascript</p>
            </Row>
            <Row>
                <Col data-aos="slide-down" data-aos-duration="400" className="skill">
                    <i className="skillIcon fab fa-js"></i>
                    <p>Javascript</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="800" className="skill">
                <Icon className="skillIcon" icon="mdi:jquery" />
                    <p>jQuery</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="1200" className="skill">
                    <i className="skillIcon fab fa-node"></i>
                    <p>Node.js</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="1600" className="skill">
                    <i className="skillIcon fab fa-react"></i>
                    <p>React.js</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="2000" className="skill">
                <Icon className="skillIcon" icon="simple-icons:redux"/>
                    <p>Redux.js</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="2000" className="skill">
                <Icon className="skillIcon" icon="cib:angular"/>
                    <p>Angualr.js</p>
                </Col>

            </Row>
            <Row>
                <p className="smallTitle">.NET</p>
            </Row>
            <Row>
                <Col data-aos="slide-down" data-aos-duration="400" className="skill">
                <Icon className="skillIcon" icon="mdi:dot-net" />
                    <p>.NET</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="800" className="skill">
                <Icon className="skillIcon" 
                //icon={mongodbIcon} 
                icon="teenyicons:c-sharp-outline"/>
                    <p>C#</p>
                </Col>
            </Row>
            <Row>
                <p className="smallTitle">Database</p>
            </Row>
            <Row>
                <Col data-aos="slide-down" data-aos-duration="400" className="skill">
                <Icon className="skillIcon" icon="simple-icons:oracle" />
                    <p>Oracle</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="400" className="skill">
                <Icon className="skillIcon" icon="simple-icons:microsoftsqlserver" />
                    <p>SQL Server</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="400" className="skill">
                <Icon className="skillIcon" icon="whh:mysqltwo" />
                    <p>MySQL</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="800" className="skill">
                <Icon className="skillIcon" 
                //icon={mongodbIcon} 
                icon="simple-icons:mongodb"/>
                    <p>MongoDB</p>
                </Col>
            </Row>
                <Row>
                    <p className="smallTitle">Other</p>
                </Row>
                <Row>
                <Col data-aos="slide-down" data-aos-duration="400" className="skill">
                <Icon className="skillIcon" icon="mdi:microsoft-azure" />
                    <p>Azure</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="400" className="skill">
                <Icon className="skillIcon" icon="mdi:firebase" />
                    <p>Firebase</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="800" className="skill">
                    <i className="skillIcon fab fa-github"></i>
                    <p>GitHub</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="1200" className="skill hide-on-small-only">
                <Icon className="skillIcon" icon="whh:photoshop" />  
               <p>Photoshop</p>
                </Col>
                <Col data-aos="slide-down" data-aos-duration="1600" className="skill">
                <Icon className="skillIcon" icon="simple-icons:heroku" />
                    <p>Heroku</p>
                </Col>
            
                </Row>

            
        
        </div>

            )
        }
        
export default Skills