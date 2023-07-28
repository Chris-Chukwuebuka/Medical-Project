import React from "react";
import "../styles/banner.css";
import vaccine from "../assets/Vaccine.png";
import doc from "../assets/Doctorban.png";
const Banner = () => {
  return (
    <div>
      <div className="Banner1">
        <div className="king">
          <h1>Get Access to Quick And Confidential Medical Services</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper nullam
            lacus tristique diam.  <br /> Nulla sed rhoncus cras neque pulvinar. Pretium
            et adipiscing sociis commodo sit sem.  <br /> Ac fusce vel facilisis <br />
            pellentesque aliquam elentum. Massa morbi phasellus viverra nisi id.
          </p>
        </div>
        <button type="">Get Started</button>
      </div>
      <div className="Desktop">
        <div className="desktop-banner">
          <div className="doctor-image">
            <img src={doc} alt="Doctors image" />
          </div>
          <div className="writting">
            <h1>Get Access to Quick And Confidential Medical Services</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ante est ulmcorper 
              lacus tristique diam. Nulla sed rhoncus cras neque pulvinar.
              Pretium et adipiscing sociis commodo sit sem. Ac fusce vel
              facilisis pellentes aliquam elentum. Massa morbi phasellus
              viverra nisi id.
            </p>
            <button type="">Get Started</button>
          </div>
        </div>
        <div className="shaped-color">
          <div className="doc-name">
            <h1>Dr. Raj Spencer</h1>
            <b>Consultant</b>
          </div>
          <div className="btn">
            <button type="submit">Book Appointment</button>
          </div>
        </div>
      </div>
      <div className="Banner2">
        <div className="Queen">
          <img src={vaccine} alt="vaccine image" />
                  </div>
        <div className="Q2">
          <h1>
            COVID-19 VACCINE ADMINISTRATION
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dictum massa <br /> feugiat
            feugiat mauris ipsum risus. Vulputate elit vel dui <br />
            fames auctor ultrices. Quis pellentesque amet massa sed <br /> purus
            adipiscing. Ornare faucibus sed id scelerisque odio <br /> habitant
            urna in nibh. Gravida nulla elit arcu scelerisque. <br /> Viverra
            lectus ullamcorper duis sed leo habitasse. Ace <br /> getvenenatis
            lacinia netus eros amet nunc.Vitae blanunc
            <br /> velit pretium et vitae morbi consequat. Id mi amet dui non{" "}
            <br /> leotellusnu pulvinar. Tortor in justo a in egestas proin{" "}
            <br /> ipsum. Lectus ut lobortis
          </p>
        <button type="">Register Now</button>
        </div>
        </div>
      </div>
  );
};

export default Banner;
