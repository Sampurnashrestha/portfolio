import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css";

function Nav() {
  return (
    <>
    
    <nav>
   
    <NavLink to ="/home" className="navigation" >Home</NavLink>
    <NavLink to ="/about" className="navigation" >About</NavLink>
    <NavLink to ="/project" className="navigation">Project</NavLink>
    <NavLink to ="/contact" className="navigation">Contact</NavLink>

    </nav>
    
    </>
  )
}

export default Nav
