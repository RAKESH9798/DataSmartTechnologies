import React from "react";
import banner from '../../Assets/images/slider3.jpg';
import Banner from "../../Components/Banner/Banner";
import './Contact.css';  // Import the CSS file for styling

const Contact = () => {
  return (
    <div>
      <div id="banner">
        <Banner banner={banner} />
      </div>
      <div id="All_PAGE_MAIN">
        <div id="All_page_INSIDE">
          <div id="contact_Us_Content">
            <div id="contact_Us_Menu">Contact Us</div>
            <div id="contact_Us_Content_address">
              <p>
                <strong>XecuteSmart L.L.C.</strong>,<br />
                (Located at Union Hills &amp; N 25th Ave.), Phoenix, AZ 85023.
                <br />
                <span>Er.Raj Sugee</span> - Tel: 602.761.7697
                <br />
                Director
                <br />
              </p>
              <div>
                <div>
                  <span>CREDENTIALS:</span> BE(ECE)., MBA(IS &amp; HR).,
                  OCP(Adv.Apps)., Brainbench(PLSQL &amp; VB Script).,
                  Mainframe Certified., OCA(DBA), Toast Master Member...
                </div>
                <div>
                  <br />
                  <span>Corporate Training Undergone:</span> MCSD, MS Windows
                  2000 for VB, Advanced QA Testing, Smalltalk, C++, Java/J2EE,
                  Unix Shell,
                </div>
                <div>
                  ETL OWB, Informatica Power Center &amp; BIRT Actuate,
                  Microstrategy with good hands-on IT experience from
                  India, Malaysia, and USA.
                </div>
              </div>
              <p>
                Email&nbsp;&nbsp;&nbsp;:{" "}
                <a className="email_contact" href="mailto:xecutesmart.raj@gmail.com">
                  xecutesmart.raj@gmail.com
                </a>
                <br />
                (IT Live &amp; Global Online Training and Placements)
                <br />
                Email&nbsp;&nbsp;&nbsp;:{" "}
                <a className="email_contact" href="mailto:EverGreenIT1995@Gmail.com">
                  EverGreenIT1995@Gmail.com
                </a>
                (Outsourcing)
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
