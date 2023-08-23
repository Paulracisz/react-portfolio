// stylesheets
import "../stylesheets/education.css";

// import libraries
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// images
import KALogo from "../resources/kalogo.png";
import KAImg from "../resources/kaimg.jpg";
import SportsLab from "../resources/sportslab.PNG";
import B4Screen from "../resources/b4screen.PNG";
import GOCSCREEN from "../resources/GOCSCREEN.PNG";
import FrontendCert from "../resources/frontendcert.png";
import FullstackCert from "../resources/fullstackcert.png";

export default function Education() {
  function moveToSlide(index) {
    let currentSlide2 = document.getElementsByClassName(`slide-${index}`)[0];
    let firstSlide2 = document.getElementsByClassName("slide-1")[0];
    let secondSlide2 = document.getElementsByClassName("slide-2")[0];
    let thirdSlide2 = document.getElementsByClassName("slide-3")[0];
    let firstRadioButton2 = document.getElementsByClassName("radio-1")[0];
    let secondRadioButton2 = document.getElementsByClassName("radio-2")[0];
    let thirdRadioButton2 = document.getElementsByClassName("radio-3")[0];
    currentSlide2.style.transform = "translateX(0px)";
    currentSlide2.style.height = "100%";
    switch (index) {
      case 1:
        secondSlide2.style.transform = "translateX(-2000px)";
        thirdSlide2.style.transform = "translateX(-2000px)";

        firstRadioButton2.style.filter = "brightness(50%)";
        secondRadioButton2.style.filter = "none";
        thirdRadioButton2.style.filter = "none";

        secondSlide2.style.height = "0px";
        thirdSlide2.style.height = "0px";

        break;
      case 2:
        firstSlide2.style.transform = "translateX(-2000px)";
        thirdSlide2.style.transform = "translateX(-2000px)";

        firstSlide2.style.height = "0px";
        thirdSlide2.style.height = "0px";

        secondRadioButton2.style.filter = "brightness(50%)";
        firstRadioButton2.style.filter = "none";
        thirdRadioButton2.style.filter = "none";
        break;
      case 3:
        firstSlide2.style.transform = "translateX(-2000px)";
        secondSlide2.style.transform = "translateX(-2000px)";

        firstSlide2.style.height = "0px";
        secondSlide2.style.height = "0px";

        thirdRadioButton2.style.filter = "brightness(50%)";
        firstRadioButton2.style.filter = "none";
        secondRadioButton2.style.filter = "none";
        break;
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#img-cover-div", {
      scrollTrigger: {
        trigger: "#img-cover-div",
        start: "top 100%",
      },
      duration: 2,
      transform: "translateX(-4000px)",
      opacity: 1,
    });

    gsap.to("#ka-logo", {
      scrollTrigger: {
        trigger: "#ka-logo",
        start: "bottom 100%",
      },
      duration: 2,
      rotate: "1440deg",
      transform: "translateX(0px)",
      opacity: 1,
    });
  }, []);
  return (
    <>
      <div id="big-container">
        <h1 className="education-text">Education</h1>
        <div className="slides-container">
          <div id="radio-container">
            <div
              id="radio-buttons"
              className="radio-1"
              onClick={() => moveToSlide(1)}
            ></div>
            <div
              id="radio-buttons"
              className="radio-2"
              onClick={() => moveToSlide(2)}
            ></div>
            <div
              id="radio-buttons"
              className="radio-3"
              onClick={() => moveToSlide(3)}
            ></div>
          </div>
          <div className="slide-1">
            <a
              href="https://kenzie.snhu.edu/alumni-stories/paulracisz/"
              target="_blank"
              rel="noreferrer"
            >
              <img alt="kenzie academy logo" id="ka-logo" src={KALogo}></img>
            </a>
            <div id="ka-pic-and-text-flex">
              <p id="ka-text">
                Kenzie Academy is a 12 month vocational style hands-on training
                program for Software Engineering. Here I first learned how to
                code, spending time working with coaches and instructors to
                learn the material, complete projects, and submit them for a
                grade.
              </p>
              <div id="img-cover-div-flex">
                <img
                  alt="kenzie academy building"
                  id="ka-img"
                  src={KAImg}
                ></img>
                <div id="img-cover-div"></div>
              </div>
            </div>
          </div>
          <div className="slide-2">
            <h1>Kenzie Projects</h1>
            <div className="box-flex">
              <div className="box-top">
                <h2>Connect 4 Web Game</h2>

                <a
                  href="https://paulracisz.gitlab.io/connect-four/"
                  rel="no opener no referrer"
                  target="_blank"
                >
                  <img
                    src={B4Screen}
                    alt="screen shot of the blink 4 game"
                    className="box-thumb"
                  />
                </a>
                <p className="box-text">
                  {" "}
                  A web game based off of Connect 4 that has beautiful styling.
                  We used looping to iterate over each cell in a grid and
                  caclulate 4 consecutive tiles in each vertises to determine a
                  win.
                </p>
                <a
                  href="https://gitlab.com/paulracisz/connect-four"
                  rel="no opener no referrer"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
              <div className="box-top">
                <h2>Game of Chance</h2>
                <a
                  href="https://paulracisz.gitlab.io/game-of-chance/"
                  rel="no opener no referrer"
                  target="_blank"
                >
                  <img
                    src={GOCSCREEN}
                    alt="screen shot of the game of chance game"
                    className="box-thumb"
                  />
                </a>
                <p className="box-text">
                  {" "}
                  A best of 5 Rock paper and scissors match against an AI
                  opponent. I created a scoreboard to keep track of the score,
                  as well as visual highlighting to indicate a win, draw or loss
                  for each round.
                </p>
                <a
                  href="https://gitlab.com/paulracisz/connect-four"
                  rel="no opener no referrer"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
              <div className="box-top">
                <h2>Sports Lab</h2>

                <a
                  href="https://paulracisz.gitlab.io/sports-lab-hard/"
                  rel="no opener no referrer"
                  target="_blank"
                >
                  <img
                    src={SportsLab}
                    alt="screen shot of the sports lab game"
                    className="box-thumb"
                  />
                </a>
                <p className="box-text">
                  {" "}
                  A game that calculates shooting scores in a hypothethical
                  basketball game against two teams and the shot accuracy
                  percentage based on how many shots were made and how many
                  missed.
                </p>
                <a
                  href="https://gitlab.com/paulracisz/sports-lab-hard"
                  rel="no opener no referrer"
                  target="_blank"
                >
                  Repository
                </a>
              </div>
            </div>
          </div>
          <div className="slide-3">
            <h1>Certifications</h1>
            <div className="slide-3-flex">
              <h2>Front-End Web Development Certification </h2>
              <div className="cert-flex">
                <img src={FrontendCert} className="cert"></img>{" "}
                <div className="cert-text-flex">
                  <h2 className="cert-text">
                    Accredited by Butler University.
                  </h2>
                  <h2 className="cert-text">October 2019 - April 2020</h2>
                </div>
              </div>
              <h2>Full-Stack Web Development Certification </h2>
              <div className="cert-flex">
                <img src={FullstackCert} className="cert"></img>
                <div className="cert-text-flex">
                  <h2 className="cert-text">
                    Accredited by Butler University.
                  </h2>
                  <h2 className="cert-text">April 2020 - October 2020</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
