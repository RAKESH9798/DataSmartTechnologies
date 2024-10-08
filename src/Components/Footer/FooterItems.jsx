import React from "react";
import "./FooterItems.css";
import Contact from "../../Pages/Contact/Contact";
import Services from "../../Pages/Service/Services";
import About from "../../Pages/About/About";
import HomePage from "../../Pages/Home/HomePage";
import { Link } from "react-router-dom";

const FooterItems = () => {
  return (
    <div>
      <div id="footer" align="center">
        <ul id="nav-list">
          <li>
            <Link to="/" element={<HomePage />}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" element={<About />}>
              About
            </Link>
          </li>
          <li>
            <Link to="/services" element={<Services />}>
              Services
            </Link>
          </li>
          <li>
            <Link to="/contact" element={<Contact />}>
              Contact
            </Link>
          </li>
        </ul>
        &nbsp;|&nbsp;
        <span className="bottom_Link">
          <a href="Services-8.html">Testimonials</a>
        </span>
      </div>
      <div id="footer" className="copyright">
        <div id="footerleft">
          © Copyright 2024. DataSmart Technologies. All Rights Reserved.
        </div>
        <div id="footerleft" align="center">
          Best viewed in IE 11
        </div>
        <div id="footerright">
          Designed &amp; Hosted by{" "}
          <a
            target="_blank"
            className="copyrightlink"
            href="yadavrakesh.netlify.app"
          >
            Rakesh
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterItems;
