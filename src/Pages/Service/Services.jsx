import React from "react";
import { Link } from "react-router-dom";
import './Services.css';
import Banner from "../../Components/Banner/Banner";
import banner from '../../Assets/images/slider2.jpg';

const Services = () => {
  return (
    <div className="services-page">
      {/* Banner Section */}
      <div id="banner">
        <Banner banner={banner} />
      </div>

      {/* Main Content Section */}
      <div id="All_PAGE_Service_New">
        <div id="All_page_INSIDE">

          {/* Sidebar Menu */}
          <div id="All_page_INSIDE_left">
            <div id="About_Us-Menu">Services</div>
            <div id="All_page_INSIDE_left_menu">
              <ul>
                <li><Link to="/services/1">IT Software Training</Link></li>
                <li><Link to="/services/2">Online IT Software Training</Link></li>
                <li><Link to="/services/3">Consulting & Placement</Link></li>
                <li><Link to="/services/4">Business Process Outsourcing</Link></li>
                <li><Link to="/services/5">Certification Consultation</Link></li>
                <li><Link to="/services/6">Quality Management</Link></li>
                <li><Link to="/services/7">Web Designing and Hosting</Link></li>
                <li><Link to="/services/9">Project Management</Link></li>
                <li><Link to="/services/8">Testimonials</Link></li>
              </ul>
            </div>
          </div>

          {/* Main Services Content */}
          <div id="All_page_INSIDE_right">
            <div id="Services-page-Heading">- IT Software Training</div>
            <div id="Services-page" className="copyright">
              <p>
                <strong>DATABASE / DATAWAREHOUSE DESIGN & DEVELOPMENT</strong><br /><br />
                Basic Computer, Awareness of Onsite/Onshore/Offshore, SDLC Concepts<br />
                SQL (Entry level and Expert level)<br />
                PL/SQL (Entry level and Expert level), Query Optimization and tuning<br />
                Utilities: SQL*Loader, Import, Export, TKProf, Autotrace<br />
                Concepts: ETL & Datawarehouse, Data Mining, DataMart, ETL Mapping b/w source & target,<br />
                Dimensional & Multi-dimensional Modeling, OLTP & OLAP Concepts.<br />
                ERWIN: Data Modeling, CDM/LDM/PDM/Modalmart.<br />
                ER Diagrams: One to One, One to Many, Many to Many.
              </p>

              <p>
                <strong>QA MANUAL & AUTOMATION TESTING</strong><br /><br />
                QA Manual and Automation, Various Types of Testing,<br />
                White-Box Testing Technique & Black-Box Testing Technique.<br />
                QTP & VB Script (Entry level and Expert level)<br />
                WinRunner (TSL & C Language)<br />
                LoadRunner (Entry level and Expert level)<br />
                Test Management tool/Defect tracking tool: Test Director/Quality Center.
              </p>

              <p>
                <strong>BUSINESS SYSTEM ANALYST / BUSINESS ANALYST</strong><br /><br />
                Concepts: UML Modeling, JAD Session, RSM,<br />
                MS Office - MS-WORD, MS-EXCEL, MS-POWERPOINT, MS-VISIO.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Services;
