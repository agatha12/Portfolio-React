import React from 'react'
import './home.css'


const Home = () => {
return (
<div id="home" className="animated ">
<br></br>
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

</div>
)
}


export default Home