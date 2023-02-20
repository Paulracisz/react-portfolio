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
          <p className="hvac-p">I implement new heating and cooling systems.</p>
        </div>
        <div className="hvac-photo">
          <img
            className="hvac-photo"
            src={vegaTouchAppHvac}
            alt="vegatouch mira app screenshot of the HVAC page from firefly integrations"
          ></img>
        </div>
      </div>
      <BugSquasher />
      <Education />
    </div>
  );
}
