import React from "react";
import Banner from "../components/Nav/Banner/Banner";
import { faEnvelope, faGlobe, faHeart, faMap, faMobile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Contact.css";
import FormContact from "./FormContact";

const Contact = () => {
  return (
    <>
      <Banner title="Contact" smtitle="Contact" />
      <section className="contact-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">

                <FormContact/>

              <form>
                <div className="form-control">
                  <input placeholder="Your Name" />
                </div>
                <div className="form-control">
                  <input placeholder="Your Email" />
                </div>
                <div className="form-control">
                  <input placeholder="Phone Numbers" />
                </div>
                <select>
                  <option>Select Department</option>
                  <option>One</option>
                  <option>Two</option>
                  <option>Three</option>
                </select>
                <div className="form-control">
                  <textarea placeholder="Message"></textarea>
                </div>
                <button>submit</button>
              </form>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="side">
                <div className="overlay">
                  <h3>Contact Us For Any Informations</h3>
                  <li>
                    <FontAwesomeIcon icon={faMap} />
                    Location
                  </li>
                  <hr />
                  <p>2005 Stokes Isle Apt. 896, Venaville 10010, USA</p>
                  <li>
                    <FontAwesomeIcon icon={faEnvelope} />
                    Email & Phone
                  </li>
                  <hr />
                  <p>otmaneanna2020@gmail.com</p>
                  <p>0762283014</p>
                  <li>
                    <FontAwesomeIcon icon={faGlobe} />
                   Follow Us
                  </li>
                  <ul>
                    <li><FontAwesomeIcon icon={faHeart}/></li>
                    <li><FontAwesomeIcon icon={faGlobe}/></li>
                    <li><FontAwesomeIcon icon={faMobile}/></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
