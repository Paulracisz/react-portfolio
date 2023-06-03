// images
import GitHubLogo from "../resources/githublogo.png";
import LinkedInLogo from "../resources/linkedinlogo.png";
import FaceBookLogo from "../resources/facebooklogo.png";
import ResumeFile from "../resources/resume.docx";
import GitLabLogo from "../resources/gitlab-logo.png";
import AxeLogo from "../resources/axelogoapproved.png";
import ReadmeLogo from "../resources/github-icon.PNG";

// stylesheets
import "../stylesheets/homepage.css";
import "../stylesheets/resume.css";
import "../stylesheets/work.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MePic from "../resources/metalking3.png";

// libraries
import React, { useEffect } from "react";
import { init } from "emailjs-com";
import { ContactUs } from "./contact";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// components
import Experience from "../components/Experience";
import ReadmeViewer from "./ReadmeViewer";

init("user_8H2okSIPMyJBrfkGMvZv4");

export default function HomePage() {
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
      <div id="big">
        <div id="parallax">
          <h3 id="Iam">
            Paul is a complex problem-solver with an analytical driven mindset.
            He is dedicated to crafting better technology for tomorrow, through
            creative innovation, leading to breathtaking results.
          </h3>
          <div id="pic-flex">
            <img id="me-pic" src={MePic} alt="Card cap" />
          </div>
        </div>
        <div className="divider"></div>
        <div id="parallax2">
          <Experience />
        </div>
        <div id="parallax3">
          <h1 className="education-text">Projects</h1>
          <div id="readme-box">
            <div id="readme-top-box">
              <img
                id="readme-logo"
                alt="a small hamburger style icon of the github readme menu option"
                src={ReadmeLogo}
              ></img>
              <p>Readme.MD</p>
            </div>
            <ReadmeViewer username="Paulracisz" repository="Fishing-Game" />
          </div>
        </div>
        <div id="contact-box">
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
