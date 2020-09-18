import React from "react";
import { Button } from "../lib/Button/Button";

import "../../App.css";
import "../HomeSection/HomeSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <h1>Mon Web CV</h1>
      <p>Pour AD-PREVOYANCE</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Ca commence
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          C'est par ici que ça ce passe ! <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
