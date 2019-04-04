import React from 'react'
import { Col } from 'react-materialize'
import './home.css'


const Home = () => {
return (
<div id="home" className="animated ">

<br></br>

<Col s={12}>
    <div id='hometext' className="animated jackInTheBox">
        Hi, I'm Agatha,
        <br></br>
        <p>a Full Stack Developer.</p>
        <button id ="explore" onClick={() => {
        //    const home = document.getElementById("home")
        //     home.classList.add("zoomOutLeft")
        window.location.href="#about"
        }}>Explore my Portfolio...</button>
    </div>
    </Col>
</div>
)
}


export default Home