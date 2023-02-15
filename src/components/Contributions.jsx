// stylesheet
import "../stylesheets/contributions.css";
import '../stylesheets/experience.css'
// images
import vegaTouchAppHvac from "../resources/vegatouchcapphvac.jpg";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Education from "./Education";

export default function Contributions() {
  useEffect(() => { 
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".hvac-photo", { 
      scrollTrigger: { 
          trigger: ".hvac-photo",
          start: "bottom 100%",
      }, 
      duration: 1,
      transform: "translateX(0px)",
      opacity: 1,
  })

  gsap.to('.hvac-p', { 
      scrollTrigger: { 
          trigger: ".hvac-p",
          start: "bottom 100%",
      },
      duration: 1, 
      transform: 'translateX(0px)',
      opacity: 1,
  })
}, [])
  return (
    <div className="zoom-in">
      <div className="experience-grid">
        <div className="hvac-description">
          <p className="hvac-p">
            I implement new heating and cooling systems.
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
      <Education/>
    </div>
  );
}
