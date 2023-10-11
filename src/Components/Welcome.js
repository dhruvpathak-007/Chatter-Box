import React from 'react';
import logo from "../Images/canva4.png";


function Welcome() {
  return (
    <div className='welcome-container'>
      <img src={logo} alt="logo"  className='welcome-logo'/>
      <p>View and text directly to the people present in the chat Rooms</p>
    </div>
  )
}

export default Welcome;
