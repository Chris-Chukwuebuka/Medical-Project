import React from "react";
import "../styles/contact.css";
import B1 from "../assets/B1.png";
import B2 from "../assets/B2.png";
import B3 from "../assets/B3.png";
import B4 from "../assets/B4.png";
import map from "../assets/Group 79.png";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Contact = () => {
  return (
    <div className="exx1">
      <Header/>
      <div className="body">
        <div className="contact">
          <div className="sect1">
            <h1>Contact Us</h1>
          </div>
          <div className="box-them">
            <div className="B1">
              <img src={B1} alt="" />
              <p>1, Ogunlesi str, onipanu, Lagos.</p>
            </div>
            <div className="B2">
              <img src={B2} alt="" />
              <p>(233) 768-0202 (234) 799-1020</p>
            </div>
            <div className="B3">
              <img src={B3} alt="" />
              <p>www.medkit.com info@medkit.com</p>
            </div>
            <div className="B4">
              <img src={B4} alt="" />
              <p>24 Hours a Day 7 Days a Week</p>
            </div>
          </div>
          <div className="map">
            <img src={map} alt="" />
          </div>
          <div className="input">
            <h1 id="kk">Send Us a message</h1>
            <div className="in1">
              <input type="text" placeholder="Your Name*" />
              <input type="text" placeholder="Phone*" />
            </div>
            <div className="in3">
              <input type="email" name="" id="" placeholder="Email*" />
              <textarea name="" id="" cols="30" rows="10"></textarea>{" "}
            </div>
            <button type="submit">Send Message</button>
          </div>
        </div>
      </div>
      <div className="white">
        <div id="t44">
        <h1>Subscribe</h1>
        <h4>Get our latest news & update regularly</h4>
        </div>
        <div className="merged">
          <input type="email" name="" id="" placeholder="Type Email Address" />
          <button type="button">Subscribe</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Contact;
