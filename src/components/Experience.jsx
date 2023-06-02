// components
import Contributions from "./Contributions";

// stylesheets
import "../stylesheets/experience.css";

// libraries
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images
import vegaTouchApp from "../resources/vegatouchapp.jpg";

export default function Experience() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".fold-down", {
      scrollTrigger: {
        trigger: ".fold-down",
        start: "top 100%",
      },
      transformOrigin: "top",
      rotateX: "0deg",
      duration: 1,
      ease: "bounce",
      onComplete: () => {
        gsap.to(".underline", {
          width: "100%",
          duration: 0.3,
          onComplete: () => {
            gsap.to(".fold-down-2", {
              scrollTrigger: {
                start: "top 100%",
              },
              transformOrigin: "top",
              rotateX: "0deg",
              duration: 0.3,
              ease: "bounce",
            });
          },
        });
      },
    });

    gsap.to(".lynx-photo", {
      scrollTrigger: {
        trigger: ".lynx-photo",
        start: "top 100%",
      },
      duration: 1,
      transform: "translateX(0px)",
      opacity: 1,
    });

    gsap.to(".lynx-description", {
      scrollTrigger: {
        trigger: ".lynx-description",
        start: "top 100%",
      },
      duration: 1,
      transform: "translateX(0)",
      opacity: 1,
    });
  }, []);
  return (
    <div className="experience-container">
      <h1 className="experience-text">Experience</h1>
      <div className="fold-down-container">
        <div className="fold-down">
          <h2 className="fold-down-text">Firefly Integrations</h2>
          <p className="underline"></p>
        </div>
        <div className="fold-down-2">
          <h3 className="fold-down-text-smaller">So what do I do there?</h3>
        </div>
        <div className="fresh-water"></div>
        <div className="experience-grid">
          <div className="lynx-photo">
            <img
              className="lynx-screen"
              src={vegaTouchApp}
              alt="vegatouch mira app screenshot from firefly integrations"
            ></img>
          </div>
          <div className="lynx-description">
            <p className="lynx-text">
              This is the VegaTouch Mira App. I help build the interface.
            </p>
          </div>
        </div>
        <div className="fold-down-3">
          <h3 className="fold-down-text-smaller">
            So what features do I contribute?
          </h3>
        </div>
        <Contributions />
      </div>
    </div>
  );
}
