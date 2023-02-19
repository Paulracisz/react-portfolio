import "../stylesheets/bugsquasher.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useState } from "react";
import useWindowDimensions from "../helpers/hooks/useWindowDimensions";
// import { bugArray } from "../helpers/bugGenerator.js"
import Bug from "../resources/svgs/bug-svgrepo-com.svg";
import Splatter from "../resources/svgs/splatter.svg";
import BugSVG from "../helpers/BugSVG";

export default function BugSquasher() {
  gsap.registerPlugin(ScrollTrigger);
  const [bugArray, setBugArray] = useState([]);
  const { height, width } = useWindowDimensions();

  const bugRef = useRef();
  const tempArray = [];

  function generateBugs() {
    gsap.set(".bug", {
      // x: getRandomNumber(width, 100),
      // y: getRandomNumber(height, 100),
      height: gsap.utils.random(150, 250),
      width: gsap.utils.random(150, 250),
    });
    const randomTop = getRandomNumber(height, 100);
    const randomLeft = getRandomNumber(width, 100);
    tempArray.push(<BugSVG bottom={"-50px"} left={randomLeft} />);
    setBugArray(tempArray);
    return <BugSVG />;
  }

  function getRandomNumber(max, min) {
    return Math.random() * (max - min + min);
  }

  function removeBug(bugArray) {}

  useEffect(() => {
    for (let i = 0; i <= 20; i++) {
      generateBugs();
    }
  }, []);

  useEffect(() => {
    gsap.to(".bug-box", {
      scrollTrigger: {
        start: "top 100%",
        trigger: ".bug-container",
        end: "top 0%",
        scrub: true,
      },
      transform: "scale3d(1,1,1)",
      onComplete: () => {
        gsap.to(".bug-box", {
          position: "sticky",
          // position: '-webkit-sticky',
          top: "0",
        });
      },
    });
    gsap.to("#squash", {
      scrollTrigger: {
        trigger: "#squash",
        start: "top top",
        end: "+=1800",
        scrub: true,
      },
      opacity: 1,
    });
  }, []);

  //     gsap.fromTo(".bug", {
  //         y: 100,
  //         // left: getRandomNumber(width, 100)
  //     }, {
  //         y: -height - 100,
  //         repeat: -1,
  //         repeatRefresh: true,
  //         duration: Math.random() + 1 * 6,
  //         delay: 'random(0,4)'
  //     })
  // }, [bugArray])

  function squashBug(e, index) {
    console.log(e.target);
    if (e.target.tagName !== "IMG") {
      const bugElement = e.target;
      const bugPos = bugElement.getBoundingClientRect();
      const updatedBugArray = [...bugArray];
      updatedBugArray.splice(
        index,
        1,
        <img
          id="splatter"
          src={Splatter}
          alt="splatter"
          style={{ top: bugPos.top, left: bugPos.left }}
        />
      );
      setBugArray(updatedBugArray);
    }
  }

  return (
    <div className="bug-container">
      <div className="bug-box">
        {bugArray.map((bug, index) => {
          return (
            <div
              onClick={(e) => squashBug(e, index)}
              ref={bugRef}
              index={index}
            >
              {bug}
            </div>
          );
        })}
        {/* <BugSVG /> */}
        <div id="squash">I squash bugs.</div>
      </div>
    </div>
  );
}
