import React from 'react'
import './NavItems.css'
import HomePage from '../../Pages/Home/HomePage'
import About from '../../Pages/About/About'
import Services from '../../Pages/Service/Services'
import Contact from '../../Pages/Contact/Contact'
import {Link} from 'react-router-dom'

const NavItems = () => {
  return (
    <div id="navigation">
        <div id="logo-name">
          <a href="/">Data Smart Technologies</a>
        </div>
        <div id="menu">
          <div id="menuinside">
            <div id="menulink">
              <ul id="nav-list">
                <li><Link to="/" element={<HomePage/>}>Home</Link></li>
                <li><Link to="/about" element={<About/>}>About</Link></li>
                <li><Link to="/services" element={<Services/>}>Services</Link></li>
                <li><Link to="/contact" element={<Contact/>}>Contact</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  )
}

export default NavItems
