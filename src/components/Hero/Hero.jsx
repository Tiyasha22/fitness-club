import React from "react";
import "./Hero.css";
import Header from "../Header/Header";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero" id="Home">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <motion.div
            initial={{ left: mobile ? "165px" : "238px" }}
            whileInView={{ left: "9px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
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
            <span>
              <NumberCounter end={150} start={100} delay="4" preFix="+" />
            </span>
            <span>Expert coaches</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={978} start={800} delay="4" preFix="+" />
            </span>
            <span>Members joined</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={50} start={30} delay="4" preFix="+" />
            </span>
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
        <motion.div
          transition={transition}
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          className="heart-rate"
        >
          <img src={Heart} alt="" />
          <span>Heart rate</span>
          <span>116BPM</span>
        </motion.div>
        <img src={hero_image} alt="Banner Image" className="hero-image" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
          src={hero_image_back}
          alt=""
          className="hero-image-back"
        />
        <div className="calories">
          <img src={Calories} />
          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
          >
            <span>Calories Burnt</span>
            <span>220kcal</span>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
