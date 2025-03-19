import React from "react";
import Banner from "../components/Nav/Banner/Banner";

const Contact = () => {
  return (
    <>
      <Banner title="Contact" smtitle="Contact"/>
      <section className="contact-us">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <form>
                        <div className="form-control">
                            <input placeholder="Your Name"/>

                        </div>
                    </form>
                    
                </div>
                <div className="col-lg-6 col-md-6">

                </div>
            </div>
        </div>
      </section>
    </>
  );
};
export default Contact;
