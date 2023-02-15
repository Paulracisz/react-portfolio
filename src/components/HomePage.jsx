import React, {useEffect} from "react";
import "../stylesheets/homepage.css";
import GitHubLogo from "../resources/githublogo.png";
import LinkedInLogo from "../resources/linkedinlogo.png";
import FaceBookLogo from "../resources/facebooklogo.png";
import "../stylesheets/resume.css";
import ResumeFile from "../resources/resume.docx";
import B4Thumbnail from "../resources/b4thumbnail.png";
import CFTThumbnail from "../resources/cftthumbnail.png";
import GitLabLogo from "../resources/gitlab-logo.png";
import AxeLogo from '../resources/axelogoapproved.png';
import "../stylesheets/work.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import MePic from "../resources/metalking3.png";
import CIThumbnail from "../resources/CIThumbnail.png";
import { init } from "emailjs-com";
import { ContactUs } from "./contact";
import reactSymbol from "../resources/reactLogo.png";
import javaScriptSymbol from "../resources/javascriptlogo.png";
import javaSymbol from "../resources/javasymbol.png";
import pythonSymbol from "../resources/python.png";
import cowSay from "../resources/cowsayy.jpg";
import snakeGameThumbnail from "../resources/snakeGameThumbnail.png";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Experience from '../components/Experience';
init("user_8H2okSIPMyJBrfkGMvZv4");

export default function HomePage() {
  // let isEnabled = true;

  useEffect(() => {
  gsap.registerPlugin(ScrollTrigger)
  gsap.to("#me-pic", {
    scrollTrigger: {
      trigger: "#parallax",
      start: 0,
      end: 400,
      scrub: true
    },
    transform: "translateY(0%)"
  })

  gsap.to("#Iam", {
    scrollTrigger: {
      trigger: "#parallax",
      start: 0,
      end: 800,
      scrub: true,
    },
    backgroundPosition: "0px 0px",
    onComplete: () => { 
      gsap.to("#parallax", { 
        // position: "relative", 
        scrollTrigger: { 
          trigger: "#parallax", 
          start: 800, 
          end: 1250,
          scrub: true,
        },
        transform: "translateY(-900px)",
        duration: '2'
      })
    }
  })
  }, [])

  // function toggleTickerEvent(e) {
  //   e.preventDefault();
  //   let vars = document.querySelector(":root");
  //   let nightModeDiv = document.getElementById("night-mode-toggle");
  //   let body = document.querySelector("body");
  //   if (!isEnabled) {
  //     // set to light mode
  //     nightModeDiv.style.justifyContent = "flex-start";
  //     vars.style.setProperty("--background-color", "white");
  //     vars.style.setProperty("--border-color", "white");
  //     vars.style.setProperty("--desc-text-color", "black");
  //     vars.style.setProperty("--abo-text", "black");
  //     vars.style.setProperty("--text-shadow-about", "white");
  //     vars.style.setProperty("--box-shadow-hover-color", "black");
  //     vars.style.setProperty("--caro-slide-img-color", "black");
  //     vars.style.setProperty("--night-mode-toggle-color", "#09aee9");
  //     vars.style.setProperty("--border-logo", "black");
  //     vars.style.setProperty("--header-color", "black");
  //     vars.style.setProperty("--border-bottom-h2-color", "red");
  //     vars.style.setProperty("--download-border-color", "black");
  //     vars.style.setProperty("--download-text-color", "black");
  //     vars.style.setProperty("--dot-color", "black");
  //     vars.style.setProperty("--label-text-color", "black");
  //     vars.style.setProperty("--email-p", "black");
  //     body.style.setProperty("filter", "brightness(100%)");
  //   } else if (isEnabled) {
  //     // set to night mode
  //     nightModeDiv.style.justifyContent = "flex-end";
  //     vars.style.setProperty("--background-color", "#1f232a");
  //     vars.style.setProperty("--border-color", "#1f232a");
  //     vars.style.setProperty("--desc-text-color", "white");
  //     vars.style.setProperty("--abo-text", "white");
  //     vars.style.setProperty("--text-shadow-about", "black");
  //     vars.style.setProperty("--box-shadow-hover-color", "white");
  //     vars.style.setProperty("--caro-slide-img-color", "white");
  //     vars.style.setProperty("--night-mode-toggle-color", "#0900ff");
  //     vars.style.setProperty("--border-logo", "white");
  //     vars.style.setProperty("--header-color", "white");
  //     vars.style.setProperty("--border-bottom-h2-color", "#09aee9");
  //     vars.style.setProperty("--download-border-color", "white");
  //     vars.style.setProperty("--download-text-color", "white");
  //     vars.style.setProperty("--dot-color", "white");
  //     vars.style.setProperty("--label-text-color", "white");
  //     vars.style.setProperty("--email-p", "white");
  //     body.style.setProperty("filter", "brightness(75%)");
  //   }
  //   isEnabled = !isEnabled;
  // }

  return (
    <>
      <div id="big">
        <div id="parallax">
          {/* <div id="night-mode-text-flex">
            <div id="night-mode-toggle-flex">
              <div id="night-mode-toggle">
                {" "}
                <div id="toggle-ticker" onClick={toggleTickerEvent}></div>
              </div>
              <p id="paul-desc">Try Night Mode!</p>
            </div>
          </div> */}
            <h3 id="Iam">
              Paul is a complex problem-solver with an analytical driven mindset. He is dedicated to crafting better technology for tomorrow, through creative innovation, leading to breathtaking results.
            </h3>
          {/* <div id="scroller-div"></div> */}
            <div id="pic-flex">
          <img id="me-pic" src={MePic} alt="Card cap" />
          </div>
        </div>
          <div className="divider"></div>
        <div id="parallax2">
         <Experience />
        </div>
        <div id="parallax3">
        <h1 className = "education-text">Projects</h1>
          <div id="work-box">
            <div className="card-container" style={{ width: "15em" }}>
              <div className="card-title card-title-react">
                <p className="card-p">React Hooks</p>
                <img
                  src={reactSymbol}
                  alt="react-symbol"
                  className="symbols"
                ></img>
              </div>
              <a
                href="https://paulracisz.github.io/Collecting-The-Infinity-Stones/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="card-img" src={CIThumbnail} alt="Card cap" />
              </a>
              <div className="box-card">
                <h2 className="title">Collect The Infinity Stones</h2>
                <p className="card-text">
                  A React app tracking elapsed time since last visit using
                  cookie storage, react hooks to increment timers, conditional
                  rendering and flashy comic book style.
                </p>
              </div>
            </div>

            <div className="card-container" style={{ width: "15em" }}>
              <div className="card-title">
                <p className="card-p">React</p>
                <img
                  src={reactSymbol}
                  alt="react-symbol"
                  className="symbols"
                ></img>
              </div>
              <a
                href="https://cftabernacle.com"
                target="_blank"
                rel="noreferrer"
              >
                <img className="card-img" src={CFTThumbnail} alt="Card cap" />
              </a>
              <div className="box-card">
                <h3 className="title">Christian Faith Tabernacle Church</h3>
                <p className="card-text">
                  Professional looking website used by Christian Faith
                  Tabernacle Church that features, interactive forms,
                  navigation, and effectively styled informational text.
                </p>
              </div>
            </div>

            <div className="card-container" style={{ width: "15em" }}>
              <div className="card-title card-title-js">
                <p className="card-p">Java</p>
                <img
                  src={javaSymbol}
                  alt="react-symbol"
                  className="symbols"
                ></img>
              </div>
              <a
                href="https://github.com/Paulracisz/Java-Snake-Game/tree/main"
                target="_blank"
                rel="noreferrer"
              >
                <img className="card-img" src={snakeGameThumbnail} alt="Card cap" />
              </a>
              <div className="box-card">
                <h3 className="title">Classic Snake Game With Java</h3>
                <p className="card-text">
                  The classic snake game reimagined in Java. Built using the
                  Java Graphics library for rendering. Complete with a score
                  board, main menu, and gameover screen.
                </p>
              </div>
            </div>

            <div className="card-container" style={{ width: "15em" }}>
              <div className="card-title card-title-js">
                <p className="card-p">Vanilla JS</p>
                <img
                  src={javaScriptSymbol}
                  alt="react-symbol"
                  className="symbols"
                ></img>
              </div>
              <a
                href="https://paulracisz.gitlab.io/connect-four/"
                target="_blank"
                rel="noreferrer"
              >
                <img className="card-img" src={B4Thumbnail} alt="Card cap" />
              </a>
              <div className="box-card">
                <h3 className="title">Connect 4 Board Game</h3>
                <p className="card-text">
                  A local multiplayer Connect-4 web game, developed using
                  javascript, with UX design, keyboard controls, and data
                  algorithim calculations.
                </p>
              </div>
            </div>

            <div className="card-container" style={{ width: "15em" }}>
              <div className="card-title card-title-js">
                <p className="card-p">Django/Python</p>
                <img
                  src={pythonSymbol}
                  alt="react-symbol"
                  className="symbols"
                ></img>
              </div>
              <a
                href="https://github.com/Paulracisz/django_cowsay"
                target="_blank"
                rel="noreferrer"
              >
                <img className="card-img" src={cowSay} alt="Card cap" />
              </a>
              <div className="box-card">
                <h3 className="title">
                  Django Python <br></br>Cow-Say
                </h3>
                <p className="card-text">
                  This application is a Django database, that uses a terminal
                  package called Cow-Say that displays an ASCII cow with a
                  speech bubble containing a user's input.
                </p>
              </div>
            </div>
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
              This website passes the <img id="axe-logo" alt="the axe logo" src={AxeLogo}></img><a id="axe-link" href="https://www.deque.com/axe/devtools/"
                target="_blank"
                rel="noreferrer">Axe Web Accessibility</a> <br/>test for maximum accessibility and conforms<br/>to best practices.<br/>
                © 2023 Paul Racisz Licensed under the MIT License
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
