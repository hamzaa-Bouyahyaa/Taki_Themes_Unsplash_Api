import React from "react";
// import { Buttons } from "../../Buttons/Buttons";
import "./HeroSection.scss";
// import "../../App.css";
import { motion } from "framer-motion";
// import "../../Buttons/Buttons.css";

const transition = {
  duration: 2,
  ease: [0.43, 0.13, 0.23, 0.96],
  delay: 1.5,
};

const buttonsVariants = {
  exit: { y: "50%", opacity: 0, transition },
  enter: {
    y: "0%",
    opacity: 1,
    transition,
  },
};

function HeroSection() {
  return (
    <div className="hero-container">
      {/* <video src="/videos/med01.mp4" autoPlay loop muted />  */}
      <div
        style={{
          textAlign: "center",
        }}
      >

      </div>

      <span
        style={{
          color: "#fff",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",
        }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.5 }}
          style={{ fontSize: "50px" }}
        >
          Discover the world’s top designers & creatives
        </motion.h1>
      </span>
      <hr className="hr" />

      <span
        style={{
          color: "#fff",
          fontFamily: "sans-serif",
          display: "flex",
          marginLeft: "auto",
          marginRight: "auto",
          justifyContent: "center",

        }}
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            fontSize: "27px",
            fontFamily: "sans-serif",
          }}
        >
          Taki Themes is the leading destination to find & showcase creative work and home to the world's best design professionals.
        </motion.p>
      </span>

      <motion.div
        initial="exit"
        animate="enter"
        exit="exit"
        variants={buttonsVariants}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {/* <Buttons
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          link="/search"
        >
          Prendre rendez-vous
        </Buttons> */}
      </motion.div>
      <i
        class="fas fa-arrow-down"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          color: "#F3BC70",
        }}
      ></i>


    </div>
  );
}

export default HeroSection;