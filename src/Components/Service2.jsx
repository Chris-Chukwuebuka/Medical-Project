import React from "react";
import "../styles/service2.css";
 import Vac from "../assets/Rectangle 39.png";
import car from "../assets/Van.png";
import belly from "../assets/Belle.png";
import child from "../assets/Baby.png";
import lens from "../assets/glass.png";
 import inject from "../assets/omo.png";

const Service2 = () => {
  return (
    <div className="whole">
      <div className="covid container d-flex justify-content-between align-items-center g-1">
        <div className="covidd container">
          <div className="line1"></div>

          <h3 className="text-center">COVID-19 Vaccine Administration</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
            utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
            sit senectus.
          </p>
          <button className=""> See Details</button>
        </div>
        <div className="drugx">
          <div className="drugxx">
            <img src={Vac} alt="covid-pills" />
          </div>
        </div>
      </div>
      <div className="covid container d-flex justify-content-between align-items-center g-1">
        <div className="drugx">
          <div className="drugxx">
            <img src={car} alt="" />
          </div>
        </div>
        <div className="covidd container">
          <div className="line1"></div>
          <h3 className="text-start ">Ambulance</h3>
          <p className=" ">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
            utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
            sit senectus.
          </p>
          <button className=""> See Details</button>
        </div>
      </div>
      <div className="covid container d-flex justify-content-between align-items-center g-1">
        <div className="covidd container ">
          <div className="line1"></div>

          <h3 className="text-start ">Gynecology</h3>
          <p className="">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
            utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
            sit senectus.
          </p>
          <button className=""> See Details</button>
        </div>
        <div className="drugx">
          <div className="drugxx">
            <img src={belly} alt="" />
          </div>
        </div>
      </div>
      <div className="covid container d-flex justify-content-between align-items-center g-1">
        <div className="drugx">
          <div className="drugxx">
            <img src={child} alt="" />
          </div>
        </div>
        <div className="covidd container">
          <div className="line1"></div>

          <h3 className="text-start ">Paediatrics</h3>
          <p className=" baby-text  ">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
            utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
            sit senectus.
          </p>
          <button className=""> See Details</button>
        </div>
      </div>
      <div className="covid container d-flex justify-content-between align-items-center g-1">
        <div className="covidd container">
          <div className="line1"></div>

          <h3 className="text-start ">Optometry</h3>
          <p className=" ">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
            utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
            sit senectus.
          </p>
          <button className=""> See Details</button>
        </div>
        <div className="drugx">
          <div className="drugxx">
            <img src={lens} alt="" />
          </div>
        </div>
      </div>
      <div className="covid container d-flex justify-content-around align-items-center g-1">
        <div className="drugx">
          <div className="drugxx">
            <img src={inject} alt="" />
          </div>
        </div>

        <div className="covidd container">
          <div className="line1"></div>

          <h3 className="text-start  ">General Physician</h3>
          <p className=" ">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper sodales
            utnetusamcorperquisque.Phasellus lectus ut suspendisse tortor eget
            sit senectus.
          </p>
          <button className=""> See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Service2;
