import React from "react";
import Tilt from "react-tilt";
import Logo from "./logo1.png"
import './logo.css'

const logo = (props) => {
  return (
    <div className="ma5 mt0 ">
      <Tilt
        className=" logo Tilt p4  br2 shadow-2 box-sizing: border-box "
        options={{ max: 100 }}
        style={{ height: 140, width: 120 }}
      >
        <div className="Tilt-inner">
        
        <img  style ={{height :120 ,width:100,margin:'10px'}} alt ="logo" src={Logo} />
        </div>
      </Tilt>
    </div>
  );
};

export default logo;
