// images
import GitHubLogo from "../resources/githublogo.png";
import LinkedInLogo from "../resources/linkedinlogo.png";
import FaceBookLogo from "../resources/facebooklogo.png";
import ResumeFile from "../resources/resume.docx";
import GitLabLogo from "../resources/gitlab-logo.png";
import AxeLogo from "../resources/axelogoapproved.png";
import MePic from "../resources/metalking3.png";
import ReadMeIcon from "../resources/github-icon.PNG";
import CFTThumb from "../resources/cftthumbnail.png";
import DaggerfallUnityUpdater from "../resources/daggerfallunityupdater.PNG";

// stylesheets
import "../stylesheets/homepage.css";
import "../stylesheets/resume.css";
import "../stylesheets/work.css";
import "../stylesheets/Carousel.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

// libraries
import React, { useEffect } from "react";
import { init } from "emailjs-com";
import { ContactUs } from "./contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Experience from "../components/Experience";
import ReadmeViewer from "../components/ReadmeViewer";
import Fullpage from "../components/Fullpage";

init("user_8H2okSIPMyJBrfkGMvZv4");

/*
--------------------------------------------------------
TODO:


FIX AXE WEB ACCESABILITY ISSUES []

MAKE DOWNLOAD RESUME LINK TO GOOGLE DRIVE OR GOOGLE DOCS []

WRITE MEDIA QUERIES FOR NEW CONTENT []

WRITE MEDIA QUERY TO MAKE THE HAMBURGER MENU A BIT SMALLER []

----------------------------------------------------------

SCRAPPED:
POSSIBLY ADD CAPTCHA FOR CONTACT FORM

----------------------------------------------------------
ADD STICKY HAMBURGER MENU ICON THAT WHEN CLICKED REVEALS A MENU WITH OPTIONS TO GO TO DIFFERENT SECTIONS OF THE WEBSITE:
EXPERIENCE
EDUCATION
PROJECTS
OPEN SOURCE CONTRIBTUIONS
VOLUNTEER WORK
CONTACT
RESUME
[X]
COMPLETED: 
ADD OPEN SOURCE CONTRIBUTIONS SECTION [X]
ADD VOLUNTEER WORK SECTION [X]
ADD PROJECTS FROM KENZIE [X]
ADD IMAGES FOR CONTRIBUTIONS [X]
CENTER IMAGES IN GITHUB README VIEWER [X]
ADD HOVER ANIMATION FOR SEND BUTTON ON CONTACT FORM [X]
ADD REQUIRED FIELDS FOR NAME EMAIL AND MESSAGE FOR MAIL.JS [X]
ADD ONE MORE THING IN SO WHAT DO I DO THERE SECTION [X]
MAKE GSAP ANIMATIONS FOR CONTRIBUTION TEXT AND IMAGES [X]
ADD ARROWS TO MOVE BETWEEN GITHUB README PROJECTS [X]
----------------------------------------------------------
*/

export default function HomePage() {
  function toggleHamburgerMenu() {
    let hamburgerMenu = document.getElementById("hamburger-menu");
    let hamburger = document.getElementById("hamburger");
    let hamburgerStick = document.getElementsByClassName("hamburger-stick");
    hamburgerMenu.hidden = !hamburgerMenu.hidden;
    if (hamburgerMenu.hidden) {
      for (let i = 0; i < hamburgerStick.length; i++) {
        hamburgerStick[i].style.width = "100%";
        hamburger.style.flexDirection = "column";
        hamburger.style.justifyContent = "space-between";
        hamburgerStick[i].style.height = "5px";
      }
      // create animation for when the hamburger menu is closed or open
    } else if (!hamburgerMenu.hidden) {
      for (let i = 0; i < hamburgerStick.length; i++) {
        hamburgerStick[i].style.width = "5px";
        hamburger.style.flexDirection = "row";
        hamburger.style.justifyContent = "space-around";
        hamburgerStick[i].style.height = "100%";
      }
    }
  }

  function jumpTo(anchorPoint) {
    // write function that will take the anchor tag label as the param, and jump to that point in the page.
  }

  function moveToSlide(index) {
    let currentSlide = document.getElementsByClassName(`slide-${index}`)[1];
    let firstSlide = document.getElementsByClassName("slide-1")[1];
    let secondSlide = document.getElementsByClassName("slide-2")[1];
    let thirdSlide = document.getElementsByClassName("slide-3")[1];
    let firstRadioButton = document.getElementsByClassName("radio-1")[1];
    let secondRadioButton = document.getElementsByClassName("radio-2")[1];
    let thirdRadioButton = document.getElementsByClassName("radio-3")[1];
    currentSlide.style.transform = "translateX(0px)";
    currentSlide.style.height = "100%";
    switch (index) {
      case 1:
        secondSlide.style.transform = "translateX(-2000px)";
        thirdSlide.style.transform = "translateX(-2000px)";

        firstRadioButton.style.filter = "brightness(50%)";
        secondRadioButton.style.filter = "none";
        thirdRadioButton.style.filter = "none";

        secondSlide.style.height = "0px";
        thirdSlide.style.height = "0px";

        break;
      case 2:
        firstSlide.style.transform = "translateX(-2000px)";
        thirdSlide.style.transform = "translateX(-2000px)";

        firstSlide.style.height = "0px";
        thirdSlide.style.height = "0px";

        secondRadioButton.style.filter = "brightness(50%)";
        firstRadioButton.style.filter = "none";
        thirdRadioButton.style.filter = "none";
        break;
      case 3:
        firstSlide.style.transform = "translateX(-2000px)";
        secondSlide.style.transform = "translateX(-2000px)";

        firstSlide.style.height = "0px";
        secondSlide.style.height = "0px";

        thirdRadioButton.style.filter = "brightness(50%)";
        firstRadioButton.style.filter = "none";
        secondRadioButton.style.filter = "none";
        break;
    }
  }

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to("#me-pic", {
      scrollTrigger: {
        trigger: "#parallax",
        start: 0,
        end: 200,
        scrub: true,
      },
      transform: "translateY(0%)",
    });

    gsap.to("#Iam", {
      scrollTrigger: {
        trigger: "#parallax",
        start: 0,
        end: 400,
        scrub: true,
      },
      backgroundPosition: "0px 0px",
      onComplete: () => {
        gsap.to("#parallax", {
          // position: "relative",
          scrollTrigger: {
            trigger: "#parallax",
            start: 800,
            end: 1000,
            scrub: true,
          },
          // position: 'relative',
          transform: "translateY(-900px)",
          duration: "2",
        });
      },
    });
  }, []);

  return (
    <>
      <div onClick={toggleHamburgerMenu} id="sticky-hamburger">
        <div id="hamburger">
          <div className="hamburger-stick"></div>
          <div className="hamburger-stick"></div>
          <div className="hamburger-stick"></div>
          <div id="hamburger-menu" hidden={true}>
            <div className="hamburger-label">
              <a className="hamburger-anchor" href="#experience">
                Experience
              </a>
            </div>
            <div className="hamburger-label">
              <a className="hamburger-anchor" href="#work-contributions">
                Work Contributions
              </a>
            </div>
            <div className="hamburger-label">
              <a className="hamburger-anchor" href="#education">
                Education
              </a>
            </div>
            <div className="hamburger-label">
              <a className="hamburger-anchor" href="#projects">
                Projects
              </a>
            </div>
            <div className="hamburger-label">
              {" "}
              <a className="hamburger-anchor" href="#volunteer-work">
                Volunteer Work
              </a>
            </div>
            <div className="hamburger-label">
              <a className="hamburger-anchor" href="#open-source-contributions">
                Open Source Contributions
              </a>
            </div>
            <div className="hamburger-label">
              {" "}
              <a className="hamburger-anchor" href="#contact">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
      <div id="big">
        <div id="parallax">
          <h3 id="Iam">
            "Paul solves complex problems with a driven analytical mindset. He
            applies his dedication and creative innovation to continuously craft
            future focused results."
          </h3>
          <div id="pic-flex">
            <img id="me-pic" src={MePic} alt="Card cap" />
          </div>
        </div>
        <div className="divider"></div>
        <div id="parallax2">
          <h2 id="experience"></h2>
          <Experience />
        </div>
        <div id="parallax3">
          <h2 id="projects"></h2>
          <h1 className="education-text">Projects</h1>
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
            <div id="readme-box" className="slide-1">
              <div id="readme-top-box">
                <img
                  id="readme-logo"
                  alt="a small hamburger style icon of the github readme menu option"
                  src={ReadMeIcon}
                />
                <p>
                  <a
                    href="https://github.com/Paulracisz/Core-Christian-Living-Blog"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Readme.MD
                  </a>
                </p>
              </div>
              <div id="readme-contents">
                <ReadmeViewer
                  username={"paulRacisz"}
                  repository={"Core-Christian-Living-Blog"}
                />
              </div>
            </div>
            <div id="readme-box" className="slide-2">
              <div id="readme-top-box">
                <img
                  id="readme-logo"
                  alt="a small hamburger style icon of the github readme menu option"
                  src={ReadMeIcon}
                />
                <p>
                  <a
                    href="https://github.com/Paulracisz/Fishing-Game"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Readme.MD
                  </a>
                </p>
              </div>
              <div id="readme-contents">
                <ReadmeViewer
                  username={"paulRacisz"}
                  repository={"Fishing-Game"}
                />
              </div>
            </div>
            <div id="readme-box" className="slide-3">
              <div id="readme-top-box">
                <img
                  id="readme-logo"
                  alt="a small hamburger style icon of the github readme menu option"
                  src={ReadMeIcon}
                />
                <p>
                  <a
                    href="https://github.com/Paulracisz/sales-table/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Readme.MD
                  </a>
                </p>
              </div>
              <div id="readme-contents">
                <ReadmeViewer
                  username={"paulRacisz"}
                  repository={"sales-table"}
                />
              </div>
            </div>
          </div>
        </div>
        <div id="volunteer-box">
          <h2 id="volunteer-work"></h2>
          <h2 className="volunteer-header">Volunteer Work</h2>
          <div className="box-flex">
            <div className="box-top" id="volunteer-box-top">
              <h2>Christian Faith Tabernacle Church Website</h2>
              <a
                href="https://cftabernacle.com/"
                rel="no opener no referrer"
                target="_blank"
              >
                <img
                  src={CFTThumb}
                  alt="screen shot of the church website"
                  className="box-thumb"
                />
              </a>
              <p className="box-text">
                {" "}
                Created, deployed, and hosted a church website for Christian
                Faith Tabernacle Church that includes information about the
                church's location, tithing information, prayer request form, and
                principles that the church abides by.
              </p>
              <a
                href="https://github.com/Paulracisz/cftabernacle"
                rel="no opener no referrer"
                target="_blank"
              >
                Repository
              </a>
            </div>
          </div>
        </div>

        <div id="volunteer-box">
          <h2 id="open-source-contributions"></h2>
          <h2 className="volunteer-header">Open Source Contributions</h2>
          <div className="box-flex">
            <div className="box-top"  id="open-source-box-top">
              <h2>Daggerfall Unity Launcher</h2>
              <a
                href="https://github.com/travis-racisz/daggerfall-unity-launcher"
                rel="no opener no referrer"
                target="_blank"
              >
                <img
                  src={DaggerfallUnityUpdater}
                  alt="screen shot of the church website"
                  className="box-thumb"
                />
              </a>
              <p className="box-text">
                {" "}
                An Electron App used for the Daggerfall Unity game, a
                remastering of the 1994 Elder Scrolls RPG Game Daggerfall in the
                Unity game engine. This launcher and updater app allows you to
                update the Daggerfall Unity game without having to go to the
                distrubutions page and delete and re-install the files. I added
                the ability to view any mods installed, and re-vamped the
                styling of the app.
              </p>
              <a
                href="https://github.com/travis-racisz/daggerfall-unity-launcher"
                rel="no opener no referrer"
                target="_blank"
              >
                Repository
              </a>
            </div>
          </div>
        </div>
        <div id="contact-box">
          <h2 id="contact"></h2>
          <h2 id="header2">Contact Me</h2>
          <ContactUs />
        </div>
        <div id="footer">
          <div className="footer-row">
            <a
              href={ResumeFile}
              download
              id="download"
              className="footerDownload"
            >
              Download My Resume
            </a>
            <div id="linksbox" className="footerlinks">
              <a
                href="https://gitlab.com/paulracisz"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logo"
                  src={GitLabLogo}
                  alt="github logo"
                  style={{ width: "2em", height: "2em" }}
                />
              </a>
              <a
                href="https://github.com/Paulracisz"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logo"
                  src={GitHubLogo}
                  alt="github logo"
                  style={{ width: "2em", height: "2em" }}
                />
              </a>
              <a
                href="https://www.linkedin.com/in/paul-racisz-745b11196/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logo linked-in-logo"
                  src={LinkedInLogo}
                  alt="linkedin logo"
                  style={{ width: "2em", height: "2em" }}
                />
              </a>
              <a
                href="https://www.facebook.com/paulie.racisz"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="logo"
                  src={FaceBookLogo}
                  alt="facebook logo"
                  style={{ width: "2em", height: "2em" }}
                />
              </a>
            </div>
          </div>
          <div className="footer-row">
            <p className="footerp bottom-text">
              This website passes the{" "}
              <img id="axe-logo" alt="the axe logo" src={AxeLogo}></img>
              <a
                id="axe-link"
                href="https://www.deque.com/axe/devtools/"
                target="_blank"
                rel="noreferrer"
              >
                Axe Web Accessibility
              </a>{" "}
              <br />
              test for maximum accessibility and conforms
              <br />
              to best practices.
              <br />© 2023 Paul Racisz Licensed under the MIT License
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
