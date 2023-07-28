import React from 'react'
import "../styles/Section1.css"
import zik from "../assets/zikziza.png"
import Ambu from "../assets/Ambulance.png"
import Nurse from "../assets/Nurse.png"
import Clock from "../assets/Clock.png"
const Section1 = () => {
  return (
    <div>
      <div className="section-king">
        <div className="father">
          <h1>MEDKIT SPECIALITIES</h1>
          <img src={zik} alt=" linear icon" />
        </div>
        <div className="sectionA">
          <div className="kid1">
            <img src={Ambu} alt=" Ambulance icon" />
            <h1>FASTEST AMBULANCE</h1>
            <p>
              We provide you with experienced and highly professional doctors
              with the aim of providing exceptional care.
            </p>
          </div>
          <div className="kid2">
            <img src={Nurse} alt="nurse icon" />
            <h1>PROFESSIONAL DOCTORS</h1>
            <p>
              We provide you with experienced and highly professional doctors
              with the aim of providing exceptional care.
            </p>
          </div>
          <div className="kid3">
            <img src={Clock} alt="clock icon" />
            <h1>BEST SERVICES</h1>
            <p>
              We are committed to providing healthcare services with the
              consideration of patients satisfaction. Our patients come first!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1
