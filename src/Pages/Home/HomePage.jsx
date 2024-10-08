import React, { useState } from "react";
import './HomePage.css';
import banner from '../../Assets/images/bcb.gif';
import welcome from '../../Assets/images/welcome.gif';
import more from '../../Assets/images/more.gif';
import news from '../../Assets/images/news-events.jpg';
import services from '../../Assets/images/services.jpg';
import consulting from '../../Assets/images/consulting.jpg';
import Banner from "../../Components/Banner/Banner";
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="homepage">
      <div id="banner">
        <Banner banner={banner} />
      </div>

      <div className="content">
        {/* Section 1 */}
        <div className="content-section">
          <div className="section-left">
            <img className="welcome-image" src={welcome} alt="Welcome" />
            <p className="section-text">
              We are building relationships with both our Clients and Consultants since 2000, bringing them together efficiently. Our Research and Development team consists of software experts working with innovative ideas to bring the best software solutions to the IT field.
            </p>
            <Link to="/about">
              <img className="more-button" src={more} alt="Read More" />
            </Link>
          </div>
          <div className="section-right">
            <img className="section-title" src={news} alt="News & Events" />
            <div 
              className={`marquee ${isPaused ? 'paused' : ''}`} 
              onMouseOver={() => setIsPaused(true)} 
              onMouseOut={() => setIsPaused(false)}>
              <div className="marquee-content">
                News and Events will be displayed here.
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 */}
        <div className="content-section">
          <div className="section-left">
            <img className="section-title" src={services} alt="Our Services" />
            <p className="section-text">
              IT Software Training (Classroom Sessions) <br />
              Online IT Software Training <br />
              Consulting &amp; Placement <br />
              Business Process Outsourcing <br />
              Web Designing and Hosting <br />
              Project Management
            </p>
            <Link to="/services">
              <img className="more-button" src={more} alt="Read More" />
            </Link>
          </div>
          <div className="section-right">
            <img className="section-title" src={consulting} alt="Consulting & Placement" />
            <p className="section-text">
              Oracle SQL/PLSQL Design &amp; Developer <br />
              Oracle Forms and Reports Developer <br />
              Java/J2EE/Swing/Struts Developer <br />
              ASP.Net, VB.Net, C# Developer <br />
              QA Test Engineer (Manual &amp; Automation)
            </p>
            <Link to="/consulting">
              <img className="more-button" src={more} alt="Read More" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
