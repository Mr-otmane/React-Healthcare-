import React from "react";
import footerlogo from "../../../Assists/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import facebook from "../../../Assists/téléchargement.png";
import twitter from "../../../Assists/téléchargement (1).png";
import instagram from "../../../Assists/téléchargement (2).png";
import linkedin from "../../../Assists/téléchargement (3).png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <img src={footerlogo} className="footerlogo" alt="Footer Logo" />
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
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Booking</a>
              </li>
              <li>
                <a href="#">Faq's</a>
              </li>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">Out Team</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Our Service</h2>
            <ul>
              <li>
                <a href="#">Dental Care</a>
              </li>
              <li>
                <a href="#">Cardiac Clinic</a>
              </li>
              <li>
                <a href="#">Massege Therapy</a>
              </li>
              <li>
                <a href="#">Cardiology</a>
              </li>
              <li>
                <a href="#">Precise Diagnosis</a>
              </li>
              <li>
                <a href="#">Abmbulance Services</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 col-sm-6">
            <h2>Subscribe</h2>
            <form className="subscribe-form">
              <input type="email" placeholder="Enter Email" />
              <button type="submit" className="subscribe-button">
                subscribe now
              </button>
            </form>
            <ul className="social">
              <li>
                <a href="#">
                  <img src={facebook} alt="Facebook" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={twitter} alt="Twitter" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={instagram} alt="Instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src={linkedin} alt="LinkedIn" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <span>Copyright © 2025 Design & Developed by ThemeTrades</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
