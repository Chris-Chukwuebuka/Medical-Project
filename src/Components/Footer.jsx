import React from "react";
import image from "../assets/Logo.png";
import "../styles/footer.css";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import insta from "../assets/insta.png";
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="foot-icon">
          <img src={image} alt="icon" />
          <p>
            Access to medical services with Certified Medical Consultants on
            Medkit.
          </p>
          <p>Contact@medkit.com </p>
          <p>(233) 678-0202</p>
          <div className="icons">
            <img src={twitter} alt="Twitter icon" />
            <img src={facebook} alt="Facebook icon" />
            <img src={insta} alt="Instagram icon" />
          </div>
        </div>
        <div className="stepup">
          <div className="one1">
            <h4>Information</h4>
            <li>
              <a href="#">Blog</a>
              <a href="#">Special Offers</a>
              <a href="#">F.A.Q</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Terms and Conditions</a>
            </li>
          </div>
          <div className="two2">
            <li>
              <h4> Quick Links</h4>
              <a href="#">Our Doctors</a>
              <a href="#">Book an Appiontment</a>
              <a href="#">Free Consulation</a>
            </li>
          </div>
          <div className="three3">
            <li>
              <h4>Company</h4>
              <a href="#">About Us</a>
              <a href="#">Help Center</a>
              <a href="#">Privacy Policy</a>
            </li>
          </div>
        </div>
      </div>
      <div className="footer2">
        <h3>Find & follow us</h3>
          <img src={twitter} alt="Twitter icon" />
          <img src={facebook} alt="Facebook icon" />
          <img src={insta} alt="Instagram icon" />
        <p>Tel: (233) 678-0202</p>
        <p>Fax: 0300000025</p>
        <p>Email: medkit@gmail.com</p>

        <hr />
        <h3>Copyright © 2023 All Rights Reserved</h3>
      </div>
    </div>
  );
};

export default Footer;
