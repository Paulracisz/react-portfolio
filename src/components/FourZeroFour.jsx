import React, { useEffect } from "react";
import Ralof from "../resources/heyyou.png";
import "../stylesheets/404.css";
import gsap from "gsap";

export default function FourZeroFour() {
  useEffect(() => {
    setTimeout(() => {
      gsap.to("#fade-box", {
        duration: 15,
        opacity: 0,
        ease: "SlowMo"
      });
      gsap.to("#ralof", {
        opacity: 1,
      });
    }, 1000);
  }, []);
  return (
    <>
      <div id="big">
        <h1>
          404
          <br />
          Page not found.
        </h1>
        <div id="fade-box-flex">
          <div id="fade-box"></div>
          <img
            id="ralof"
            alt="Ralof of riverwood, from the intro of Skyrim, saying 'hey you, you're finally awake'"
            src={Ralof}
          />
        </div>

        <a id="backhome" href="/">
          Go Back Home
        </a>
      </div>
    </>
  );
}
