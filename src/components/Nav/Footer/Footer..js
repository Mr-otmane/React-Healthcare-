import React from "react";
import footerlogo from "../../../Assists/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import facebook from '../../../Assists/téléchargement.png'
import twitter from '../../../Assists/téléchargement (1).png'
import instagram from '../../../Assists/téléchargement (2).png'
import linkedin from '../../../Assists/téléchargement (3).png'

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <img src={footerlogo} />
          <p>
            Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore
            smod tempor incididunt ut labore et
          </p>
          <div className="footer-contact">
            <div className="footer-icon">
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div className="footer-text">
              <h6>Contact Us</h6>
              <h4>+212699919306</h4>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
            <h2>Quick Links</h2>
            <ul>
                <li><a href="#"></a>About Us</li>
                <li><a href="#"></a>Services</li>
                <li><a href="#"></a>Booking</li>
                <li><a href="#"></a>Faq's</li>
                <li><a href="#"></a>Blogs</li>
                <li><a href="#"></a>Out Team</li>
            </ul>
        </div>
        <div className="col-md-3 col-sm-6">
        <h2>Our Service</h2>
            <ul>
                <li><a href="#"></a>Dental Care</li>
                <li><a href="#"></a>Cardiac Clinic</li>
                <li><a href="#"></a>Massege Therapy</li>
                <li><a href="#"></a>Cardiology</li>
                <li><a href="#"></a>Precise Diagnosis</li>
                <li><a href="#"></a>Abmbulance Services</li>
            </ul>
            <div className="col-md-3 col-sm-6">
                <h2>Subscribe</h2>
                <form>
                    <input type="email"/>
                    <button type="submit">subscribe now</button>
                    
                </form>
                <ul className="social">
                    <li><a href="#"><img src={facebook}/></a></li>
                    <li><a href="#"><img src={twitter}/></a></li>
                    <li><a href="#"><img src={instagram}/></a></li>
                    <li><a href="#"><img src={linkedin}/></a></li>

                </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
