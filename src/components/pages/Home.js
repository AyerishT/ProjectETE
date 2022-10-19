import React, { useState, useEffect } from "react";
import "../pages/home.css"
// import tech from "./tech.jpeg";
const Home = () => {
  return (
    <React.Fragment >
              <video className="homeVideo" autoPlay muted loop id="myVideo">
                <source src="bgVideo.mp4" type="video/mp4" />
              </video>
      <div className="homeStyle container">
        <h1 className="text-center  text-capitalize my-4 homeStyle-heading">Easy with our Gym</h1>
        <div className="container ">
          <div className="row my-1">
            <div className="col-sm ">
               <div className="card bg-transparent  cardStyle" >
                {/* <div class="bg-image hover-zoom"> */}
                {/* <a href="https://en.wikipedia.org/wiki/Computer_security" target="blank"> */}
                <img src="crossfit.png" alt="..." height="250px" className="card-img-top" />
                {/* </a> */}
                {/* <a src="https://en.wikipedia.org/wiki/Computer_security"> */}
                {/* <div class="mask" style="background-color: rgba(57, 192, 237, 0.2)"></div> */}
                {/* </a> */}
                {/* </div> */}
                <div className="card-body">
                  <h5 className="card-title homeStyle-para">CrossFit</h5>
                  <p className="card-text homeStyle-content">CrossFit is a branded fitness regimen that involves constantly varied functional movements performed at high intensity.</p>
                  <a href="https://en.wikipedia.org/wiki/CrossFit" target="blank" className="btn btn-primary">Open</a>
                </div>
              </div>
            </div>
            <div className="col-sm"><div className="card bg-transparent  cardStyle">
              {/* <a href="https://en.wikipedia.org/wiki/Artificial_intelligence" target="blank"> */}
              <img src="weight.png" className="card-img-top" alt="..." height="250px" />
              {/* </a> */}
              <div className="card-body">
                <h5 className="card-title homeStyle-para">Weight training</h5>
                <p className="card-text homeStyle-content">Weight training is a common type of strength training for developing the strength and size of skeletal muscles.</p>
                <a href="https://en.wikipedia.org/wiki/Weight_training" target="blank" className="btn btn-primary">Open</a>
              </div>
            </div></div>
            <div className="col-sm"><div className="card bg-transparent  cardStyle">
              <img src="calisthenics.png" className="card-img-top" alt="..." height="250px" />
              <div className="card-body">
                <h5 className="card-title homeStyle-para">Calisthenics</h5>
                <p className="card-text homeStyle-content"> They are intended to increase strength, fitness, and flexibility, through movements such as pulling, pushing, bending, jumping, or swinging, using one's body weight for resistance.</p>
                <a href=" https://en.wikipedia.org/wiki/Calisthenics" target="blank" className="btn btn-primary">Open</a>
              </div>
            </div></div>
          </div><br />
          <div className="row">
            <div className="col-sm"><div className="card bg-transparent  cardStyle">
              <img src="cardio.png" className="card-img-top" alt="..." height="250px" />
              <div className="card-body">
                <h5 className="card-title homeStyle-para">Cardio</h5>
                <p className="card-text homeStyle-content">Cardio is defined as any type of exercise that gets your heart rate up and keeps it up for a prolonged period of time. </p>
                <a href="https://en.wikipedia.org/wiki/Cardio" target="blank" className="btn btn-primary">Open</a>
              </div>
            </div></div>
            {/* </div> */}
            {/* <div className="row"> */}
            <div className="col-sm"><div className="card bg-transparent  cardStyle">
              <img src="suppliments.png" className="card-img-top" alt="..." height="250px" />
              <div className="card-body">
                <h5 className="card-title homeStyle-para">Suppliments</h5>
                <p className="card-text homeStyle-content">Among the most widely used are high protein drinks, pre-workout blends, branched-chain amino acids (BCAA), glutamine, arginine, essential fatty acids, creatine, HMB, whey protein, ZMA, and weight loss products.</p>
                <a href="https://en.wikipedia.org/wiki/Bodybuilding_supplement" target="blank" className="btn btn-primary">Open</a>
              </div>
            </div></div>
            <div className="col-sm"><div className="card bg-transparent  cardStyle">
              <img src="pt.png" className="card-img-top" alt="..." height="250px" />
              <div className="card-body">
                <h5 className="card-title homeStyle-para">Personal Training</h5>
                <p className="card-text homeStyle-content">A personal trainer is an individual who creates and delivers safe and effective exercise programs for apparently healthy individuals and groups, or those with medical clearance to exercise.
                </p>
                <a href="https://en.wikipedia.org/wiki/Personal_trainer" target="blank" className="btn btn-primary">Open</a>
              </div>
            </div></div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
};

export default Home;
