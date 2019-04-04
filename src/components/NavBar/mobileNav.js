
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
<button  className="button" onClick={() => {window.location.href = "https://docs.google.com/document/d/17mbK8ZoewXg23l-SIKLE2XdMilxtAZwldfprjJcQrlA/edit?usp=sharing"}}>Resume</button>

</Dropdown>


</div>

)
}


export default MobileNav








