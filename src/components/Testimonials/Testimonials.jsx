import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { LeftArrow, RightArrow } from "../../assets";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;
  return (
    <div className="Testimonials">
      <div className="left-t">
        <soan>Testimonials</soan>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        <span>{testimonialsData[selected].review}</span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <div></div>
        <div></div>
        <img src={testimonialsData[selected].image} alt="" />
        <div className="arrows">
          <img
            src={LeftArrow}
            alt=""
            onClick={() =>
              selected === 0
                ? setSelected(testimonialLength - 1)
                : setSelected((prev) => prev - 1)
            }
          />
          <img
            src={RightArrow}
            alt=""
            onClick={() =>
              selected === testimonialLength-1
                ? setSelected(0)
                : setSelected((prev) => prev + 1)
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
