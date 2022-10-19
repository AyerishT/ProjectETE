import React from "react";
import "./About.css";
import { AiFillSignal,AiOutlinePoweroff,AiFillHeart,AiOutlineFileDone,AiTwotoneHighlight,AiFillSafetyCertificate,AiFillTool } from "react-icons/ai";
import {BsGlobe2} from "react-icons/bs";
// import { FaGlobeAmericas } from "react-icons/ai";
const About = () => {
  return (
    <>
 <div className="container-fluid text-center aboutDiv">
  <h2>About</h2>
  <h4>What we offer</h4>
  <br/>
  <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-off logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiOutlinePoweroff/></span>
      <h4>Core Strentgh</h4>
      <p>Core stability refers to a person's ability to stabilize their core.</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-heart logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiFillHeart/></span>
      <h4>Heart rate Monitor</h4>
      <p>Heart rate monitors are devices that detect and measure your heart or pulse rate. </p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-lock logo-small" style={{color: "#f4511e",fontSize: "50px"}}><AiOutlineFileDone/></span>
      <h4>Diet PLan</h4>
      <p>A healthy diet is a diet that maintains or improves overall health. </p>
    </div>
  </div>
   <br></br>
    <div className="row">
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-leaf logo-small"><AiTwotoneHighlight/></span>
      <h4>Hitech GYM</h4>
      <p>Latest Machineries and fully equipped gym.</p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-certificate logo-small"><AiFillSafetyCertificate/></span>
      <h4>CERTIFIED</h4>
      <p>Proper Certification by NCCA. </p>
    </div>
    <div className="col-sm-4">
      <span className="glyphicon glyphicon-wrench logo-small"><AiFillTool/></span>
      <h4 style={{color:"#303030"}}>HARD WORK</h4>
      <p>Hard work by both client and trainer is done. </p>
    </div>
  </div>
</div>
</>
  )

};

export default About;
