import React from "react";
import "./Reasons.css";
import {
  ReasonsImg1,
  ReasonsImg2,
  ReasonsImg3,
  ReasonsImg4,
  Nb,
  Adidas,
  Nike,
  Tick,
} from "../../assets";
const Reasons = () => {
  return (
    <div className="Reasons" id="reasons">
      <div className="left-r">
        <img src={ReasonsImg1} alt="" />
        <img src={ReasonsImg2} alt="" />
        <img src={ReasonsImg3} alt="" />
        <img src={ReasonsImg4} alt="" />
      </div>
      <div className="right-r">
        <span>Some reasons</span>
        <div>
          <span className="stroke-text">Why</span>
          <span> Choose Us? </span>
        </div>
        <div className="details-r">
          <div>
            <img src={Tick} alt=""></img>
            <span>OVER 140+ EXPERT COACHES</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>TRAIN SMARTER AND FASTER THAN BEFORE</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>ONE FREE PROGRAM FOR NEW MEMBER</span>
          </div>
          <div>
            <img src={Tick} alt="" />
            <span>RELIABLE PARTNERS</span>
          </div>
        </div>
        <span style={{ color: "var(--gray)", fontWeight: "normal" }}>
          OUR PARTNERS
        </span>
        <div className="partners">
          <img src={Nb} alt="" />
          <img src={Adidas} alt="" />
          <img src={Nike} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Reasons;
