
import React from 'react'
import { Dropdown, Button } from 'react-materialize'
import './nav.css'
import 'materialize-css'


const MobileNav = () => {
return (
    <div  id="drop">
<Dropdown trigger={
<Button id="menu">Menu</Button>
}>
 <button className="button" onClick={() => {window.location.href="#about"}}>About</button>
<button className="button" onClick={() => {window.location.href="#skills"}}>Skills</button>
<button className="button" onClick={() => {window.location.href="#portfolio"}}>Portfolio</button>
<button className="button" onClick={() => {window.location.href ="#contact"}}>Contact</button> 
        {/* <a  href="#about"><i className="material-icons md-24">account_circle</i> About</a>
        <a  href="#skills"><i className="material-icons md-24">code</i> Skills</a>
        <a  href="#portfolio"><i className="material-icons md-24">computer</i> Portfolio</a>
        <a  href="#contact"><i className="material-icons md-24">email</i> Contact</a> */}
<button  className="button" onClick={() => {window.location.href = "https://docs.google.com/document/d/17mbK8ZoewXg23l-SIKLE2XdMilxtAZwldfprjJcQrlA/edit?usp=sharing"}}>Resume</button>

</Dropdown>


</div>

)
}


export default MobileNav








