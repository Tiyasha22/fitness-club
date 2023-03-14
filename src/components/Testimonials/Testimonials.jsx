import React, { useState } from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { LeftArrow, RightArrow } from "../../assets";
import { motion } from "framer-motion";
const Testimonials = () => {
  const [selected, setSelected] = useState(0);
  const testimonialLength = testimonialsData.length;
  const transition = { type: "spring", duration: 3 };
  return (
    <div className="Testimonials">
      <div className="left-t">
        <soan>Testimonials</soan>
        <span className="stroke-text">What they </span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[selected].name}
          </span>{" "}
          - {testimonialsData[selected].status}
        </span>
      </div>
      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
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
              selected === testimonialLength - 1
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
