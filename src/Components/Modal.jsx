import React from 'react'
import Bell from "../assets/Bell.png"
const Modal = () => {
  return (
    <div>
      <div className="modal">
        <div className="sect1">
          <h1>Appointment Successful!</h1>
        </div>
        <div className="solid">
          <img src={Bell} alt="" />
          <b>Go back to home page</b>
              </div>
              <hr />
      </div>
    </div>
  );
}

export default Modal