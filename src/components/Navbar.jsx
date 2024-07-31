
import React,{useState} from 'react'
import "./Navbar.css"

import {Link,NavLink} from "react-router-dom";
function Navbar() {
    const [menu , setMenu] = useState(false)
  return (
        <nav>
            <Link to="/" className="title">Portfolio</Link>
            <div className="menu" onClick={() =>{
                setMenu(!menu)
            }}>
             <i id="bar" className={menu ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
            <ul className={menu ? "open" : ""}>
            <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/education">Education</NavLink></li>
                <li><NavLink to="/skills">Skills</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    
  )
}

export default Navbar