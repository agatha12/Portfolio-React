import React from 'react'
//import { Navbar, NavItem, Icon } from 'react-materialize'
import './nav.css'
import 'materialize-css'


const Nav = () => {
return (

    <div className="site-sidebar">

      <ul id="nav">
        <li><h3 id="name">Agatha Kiecun</h3></li>
        <li><p id="title">Full Stack Developer</p></li>
        <li className="divider">&nbsp</li>
        <li><a className="navLink hvr-wobble-top" href="#about"><i className="material-icons md-24">account_circle</i> About</a></li>
        <li><a className="navLink hvr-wobble-top" href="#skills"><i className="material-icons md-24">code</i> Skills</a></li>
        <li><a className="navLink hvr-wobble-top" href="#portfolio"><i className="material-icons md-24">computer</i> Portfolio</a></li>
        <li><a className="navLink hvr-wobble-top" href="#contact"><i className="material-icons md-24">email</i> Contact</a></li>
        <li><a className="navLink hvr-wobble-top" target="blank" href="https://docs.google.com/document/d/17mbK8ZoewXg23l-SIKLE2XdMilxtAZwldfprjJcQrlA/edit?usp=sharing"><i className="material-icons md-24">description</i> Resume</a></li>

        
         
         

        
      </ul>




  </div>
)
}


export default Nav



