// stylesheet
import "../stylesheets/contributions.css";
import "../stylesheets/experience.css";

// images
import vegaTouchAppHvac from "../resources/vegatouchcapphvac.jpg";

// components
import BugSquasher from "./BugSquasher";
import Education from "./Education";

// libraries
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Contributions() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(".hvac-photo", {
      scrollTrigger: {
        trigger: ".hvac-photo",
        start: "top 90%",
      },
      duration: 1,
      transform: "translateX(0px)",
      opacity: 1,
    });

    gsap.to(".hvac-p", {
      scrollTrigger: {
        trigger: ".hvac-p",
        start: "bottom 100%",
      },
      duration: 1,
      transform: "translateX(0px)",
      opacity: 1,
    });
  }, []);
  return (
    <div className="">
      <div className="experience-grid">
        <div className="hvac-description">
          <p className="hvac-p">
            I implement controls for new heating and cooling systems.
          </p>
        </div>
        <div className="hvac-photo">
          <img
            className="hvac-photo"
            src={vegaTouchAppHvac}
            alt="vegatouch mira app screenshot of the HVAC page from firefly integrations"
          ></img>
        </div>
      </div>
      <div className="features-flexbox">
      <h3 className="fold-down-text-smaller">
            So what features did I contribute?
          </h3>
          <h3>Internal Tool - App Diag Can Trace</h3>
          <p id="feature-info-text">I added a diagnostics page that allows technicians to diagnose specific hardware related issues in a unit while assisting end users.</p>
          <p>[Insert Image of app change here]</p>
          <br/>
          <h3>Feature - Adding Faults To Exterior Pages</h3>
          <p id="feature-info-text">I added a safety feature for some units to show slide and awning faults on the exterior page to warn end-users of a mechnical failure.</p>
          <p>[Insert Image of app change here]</p>
          <h3>BugFix - MessageCenter Additional Messages</h3>
          <p id="feature-info-text">I fixed a previously non-functional feature in VegaTouch Eclipse that now allows custom fault messages to appear in the message center. This feature is used for warning users of hardware failures, and parts that need to be replaced.</p>
          <p>[Insert Image of app change here]</p>
          
          </div>
      <BugSquasher />
      <Education />
    </div>
  );
}
