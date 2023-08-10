// stylesheet
import "../stylesheets/contributions.css";
import "../stylesheets/experience.css";

// images
import vegaTouchAppHvac from "../resources/vegatouchcapphvac.jpg";
import canTrace from '../resources/cantrace.png'
import messageCenter from '../resources/messageCenter.png'

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
        start: "top 100%",
      },
      duration: 1,
      transform: "translateX(0px)",
      opacity: 1,
    });
    
    gsap.to(".fly-left", {
      scrollTrigger: {
        trigger: ".fly-left",
        start: "top 100%",
      },
      duration: 1,
      transform: "translateX(0px)",
      opacity: 1,
    });
    
    gsap.to(".fly-left-2", {
      scrollTrigger: {
        trigger: ".fly-left-2",
        start: "top 100%",
      },
      duration: 1,
      transform: "translateX(0px)",
      opacity: 1,
    });
    
    gsap.to(".fly-right", {
      scrollTrigger: {
        trigger: ".fly-right",
        start: "top 100%",
      },
      duration: 1,
      transform: "translateX(0px)",
      opacity: 1,
    });
  
    gsap.to('.fold-down-contr', {
      scrollTrigger: {
        trigger: ".fold-down-contr",
        start: "top 100%",
      },
      transformOrigin: "top",
      rotateX: "0deg",
      duration: 0.3,
      ease: "bounce",
      onComplete: () => {
        gsap.to('.fold-down-contr-2', {
          scrollTrigger: {
            trigger: ".fold-down-contr-2",
            start: "top 100%",
          },
          transformOrigin: "top",
          rotateX: "0deg",
          duration: 0.3,
          ease: "bounce",
          onComplete: () => {
            gsap.to('.fold-down-contr-3', {
              scrollTrigger: {
                trigger: ".fold-down-contr-3",
                start: "top 100%",
              },
              transformOrigin: "top",
              rotateX: "0deg",
              duration: 0.3,
              ease: "bounce",
              onComplete: () => {
                gsap.to('.fold-down-contr-4', {
                  scrollTrigger: {
                    trigger: ".fold-down-contr-4",
                    start: "top 100%",
                  },
                  transformOrigin: "top",
                  rotateX: "0deg",
                  duration: 0.3,
                  ease: "bounce",
                  onComplete: () => {
                    gsap.to('.fold-down-contr-5', {
                      scrollTrigger: {
                        trigger: ".fold-down-contr-5",
                        start: "top 100%",
                      },
                      transformOrigin: "top",
                      rotateX: "0deg",
                      duration: 0.3,
                      ease: "bounce",
                      onComplete: () => {
                        gsap.to('.fold-down-contr-6', {
                          scrollTrigger: {
                            trigger: ".fold-down-contr-6",
                            start: "top 100%",
                          },
                          transformOrigin: "top",
                          rotateX: "0deg",
                          duration: 0.3,
                          ease: "bounce",
                          onComplete: () => {
                            gsap.to('.fold-down-contr-7', {
                              scrollTrigger: {
                                trigger: ".fold-down-contr-7",
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
                  },
                });
              },
            });
          },
        });
      },
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
      <h3 className="fold-down-contr">
            So what features did I contribute?
          </h3>
          <h3 className="fold-down-contr-2">Internal Tool - App Diag Can Trace</h3>
          <p id="feature-info-text" className="fold-down-contr-3">I added a diagnostics page that allows technicians to diagnose specific hardware related issues in a unit while assisting end users.</p>
          <img class="feature-img fly-left" src={canTrace} alt="screenshot of vegatouch mira app" />
          <br/>
          <h3 className="fold-down-contr-4">Feature - Adding Faults To Exterior Pages</h3>
          <p id="feature-info-text" className="fold-down-contr-5">I added a safety feature for some units to show slide and awning faults on the exterior page to warn end-users of a mechnical failure.</p>
          <p>[Insert Image of app change here]</p>
          <h3 className="fold-down-contr-6">BugFix - MessageCenter Additional Messages</h3>
          <p id="feature-info-text" className="fold-down-contr-7">I fixed a previously non-functional feature in VegaTouch Eclipse that now allows custom fault messages to appear in the message center. This feature is used for warning users of hardware failures, and parts that need to be replaced.</p>
          <img class="feature-img fly-left-2" src={messageCenter} alt="screenshot of vegatouch mira app" />
          
          </div>
      <BugSquasher />
      <Education />
    </div>
  );
}
