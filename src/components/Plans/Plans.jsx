import React from "react";
import "./Plans.css";
import { plansData } from "../../data/plansData";
import { WhiteTick } from "../../assets";

const Plans = () => {
  return (
    <div className="plans-container">
      <div className="programs-header">
        <span className="stroke-text">Ready to start</span>
        <span>Your journey</span>
        <span className="stroke-text">Now with us</span>
      </div>
      <div className="plans">
        {plansData.map((planData, i) => (
          <div className="plan" key={i}>
            {planData.icon}
            <span>{planData.name}</span>
            <span>${planData.price}</span>
            <div className="features">
              {planData.features.map((feature, index) => (
                <div className="feature">
                  <img src={WhiteTick} alt="" />
                  <span key={i}>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benefits </span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
