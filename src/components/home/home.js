import React from 'react'
import { Col } from 'react-materialize'
import './home.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


const Home = () => {
return (
<div id="home">

<br></br>

<Col>
    <div id='hometext'>
        <p data-aos="zoom-in">Hi, I'm Agatha,</p>
        <p data-aos="zoom-in" data-aos-duration="1000">a Full Stack Developer.</p>
        <button data-aos="zoom-in" data-aos-duration="2000" id ="explore" onClick={() => {
        window.location.href="#about"
        }}>Explore my Portfolio...</button>
    </div>
    </Col>
</div>
)
}


export default Home