import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>The best fitness club in the town</span>
        </div>
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              In here we help you to shape and build your ideal body and live up
              your life to fullest
            </span>
          </div>
        </div>
        <div className="figures">
          <div>
            <span>150 +</span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>978+</span>
            <span>Members joined</span>
          </div>
          <div>
            <span>50 +</span>
            <span>Fitness programs</span>
          </div>
        </div>
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt=""/>
          <span>Heart rate</span><span>116BPM</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
