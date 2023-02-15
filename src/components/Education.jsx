// stylesheets
import "../stylesheets/education.css";

// import components
import KALogo from "../resources/kalogo.png";
import KAImg from '../resources/kaimg.jpg';
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Education() {
    useEffect(() => { 
        gsap.registerPlugin(ScrollTrigger)
        gsap.to("#img-cover-div", { 
          scrollTrigger: { 
          trigger: "#img-cover-div",
          start: "bottom 100%",
          }, 
          duration: 2,
          transform: "translateX(-4000px)",
          opacity: 1,
      })

      gsap.to("#ka-logo", { 
        scrollTrigger: { 
          trigger: "#ka-logo",
          start: "bottom 100%",
        }, 
        duration: 2,
        rotate: "1440deg",
        transform: "translateX(0px)",
        opacity: 1,
    })
    }, [])
  return (
    <>
      <div id="big-container">
        <h1 className = "education-text">Education</h1>
        <a href="https://kenzie.snhu.edu/alumni-stories/paulracisz/" target="_blank" rel="noreferrer">
          <img alt="kenzie academy logo" id="ka-logo" src={KALogo}></img>
        </a>
        <div id="ka-pic-and-text-flex">
        <p id="ka-text">Kenzie Academy is a Software Engineering (12 months), program that provided me with relevant skills training, the flexibility for self-paced learning, and a community of support that helped my find the job I love. </p>
        <div id="img-cover-div-flex">
        <img alt="kenzie academy building" id="ka-img" src={KAImg}></img>
        <div id="img-cover-div"></div>
        </div>
        </div>
      </div>
    </>
  );
}
