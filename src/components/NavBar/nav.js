import React from 'react'
// import { Navbar, NavItem, Icon } from 'react-materialize'
import './nav.css'


const Nav = () => {
return (

    <div onScroll={() => {
  //     var navPos = $('nav').position().top;
  //     var lastPos = 0;
  //     var lockTimer

  // $(window).on('scroll', function () {

  //   var pos = $(window).scrollTop();
  //   var pos2 = pos + 50;
  //   var scrollBottom = pos + $(window).height();

  //   if (!isMobile) {
  //     if (pos >= navPos + $('nav').height() && lastPos < pos) {
  //       $('nav').addClass('fixed');
  //     }
  //     if (pos < navPos && lastPos > pos) {
  //       $('nav').removeClass('fixed');
  //     }
  //     lastPos = pos;
  //   }
  console.log(window.pageYOffset)
    }}>
    <nav id="nav">
      <div className="nav-wrapper">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="https://docs.google.com/document/d/17mbK8ZoewXg23l-SIKLE2XdMilxtAZwldfprjJcQrlA/edit?usp=sharing" target="blank">Resume</a>

        
         
         

        
      </div>
    </nav>


  </div>
)
}


export default Nav



