import React from 'react'
import "../styles/doctor.css"
import zik from "../assets/zikziza.png";
import jay from "../assets/Dr jay.png"
import ajay from "../assets/Dr Ajay.png"
import aisha from "../assets/Dr Aisha.png"
import stella from "../assets/Dr stella.png"
import chat from "../assets/Chat.png"
import call from "../assets/Call.png"
import live from "../assets/Live Chat.png"
const Doctors = () => {
  return (
    <div>
      <div className="doctorA">
        <h1>MEET OUR DOCTORS</h1>
        <img src={zik} alt="" />
        <div className="flex-doctors">
          <div className="jay">
            <img className="b1" src={jay} alt="" />
            <h1>Dr. Jay Stephen</h1>
            <p>Optometrist</p>
            <div className="A
            k1">
              <img src={call} alt="" />
              <img src={chat} alt="" />
              <img src={live} alt="" />
            </div>
          </div>

          <div className="ajay">
            <img className="b1" src={ajay} alt="" />
            <h1>Dr. Ajay Verma</h1>
            <p>Optometrist</p>

            <div className="k2">
              <img src={call} alt="" />
              <img src={chat} alt="" />
              <img src={live} alt="" />
            </div>
          </div>

          <div className="aisha">
            <img className="b1" src={aisha} alt="" />
            <h1>Dr. Aisha Joe</h1>
            <p>Paediatrician</p>
            <div className="k3">
              <img src={call} alt="" />
              <img src={chat} alt="" />
              <img src={live} alt="" />
            </div>
          </div>

          <div className="stella">
            <img className="b1" src={stella} alt="" />
            <h1>Dr. Stella Maris</h1>
            <p>General Physician</p>
            <div className="k4">
              <img src={call} alt="" />
              <img src={chat} alt="" />
              <img src={live} alt="" />
            </div>
          </div>
        </div>
        <div className="down">
          <h1>Patients Say</h1>
          <div className="down-part">
            <div className="wordA">
              <p>
                “I had a wonderful experience with Medkit. They ensured my
                health was greatly taken care of. I highly recommend Medkit.”
              </p>
              <h5>Aliya Roll</h5>
            </div>
            <div className="wordB">
              <p>
                “My treatment was second to none and the staffs of Medkit were
                polite and caring”
              </p>
              <h5>Elo Zona</h5>
            </div>
          </div>
          <img src= {zik} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Doctors