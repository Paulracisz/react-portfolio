import React from "react";
import "../stylesheets/homepage.css";
import GitHubLogo from "../resources/githublogo.png";
import LinkedInLogo from "../resources/linkedinlogo.png";
import FaceBookLogo from "../resources/facebooklogo.png";
import "../stylesheets/resume.css";
import ResumeFile from "../resources/resumefile.pdf";
import B4Thumbnail from "../resources/b4thumbnail.png";
import CFTThumbnail from "../resources/cftthumbnail.png";
import GitLabLogo from "../resources/gitlab-logo.png";
import "../stylesheets/work.css";
import Typing from "react-typing-animation";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import FrontEndCert from "../resources/frontendcert.png";
import FullStackCert from "../resources/Fullstackcert.PNG";
import MePic from "../resources/mepic.JPG";
import CIThumbnail from "../resources/CIThumbnail.png";
import { init } from "emailjs-com";
import { ContactUs } from "./contact";
import reactSymbol from "../resources/reactLogo.png";
import javaScriptSymbol from "../resources/javascriptlogo.png";
import javaSymbol from "../resources/javasymbol.png";
import pythonSymbol from "../resources/python.png";
import cowSay from "../resources/cowsayy.jpg";
import snakeGameThumbnail from "../resources/snakeGameThumbnail.png";
init("user_8H2okSIPMyJBrfkGMvZv4");

export default function HomePage() {
  let isEnabled = true;
  function toggleTickerEvent(e) {
    e.preventDefault();
    let vars = document.querySelector(':root')
    let nightModeDiv = document.getElementById("night-mode-toggle")
    let body = document.querySelector("body")
    if (!isEnabled) {
      // set to light mode
      nightModeDiv.style.justifyContent = "flex-start";
      vars.style.setProperty("--background-color","white");
      vars.style.setProperty("--border-color","white");
      vars.style.setProperty("--desc-text-color","black");
      vars.style.setProperty("--abo-text","black");
      vars.style.setProperty("--text-shadow-about","white");
      vars.style.setProperty("--box-shadow-hover-color","black");
      vars.style.setProperty("--caro-slide-img-color","black");
      vars.style.setProperty("--night-mode-toggle-color","#09aee9");
      vars.style.setProperty("--border-logo","black");
      vars.style.setProperty("--header-color","black");
      vars.style.setProperty("--border-bottom-h2-color","red");
      vars.style.setProperty("--download-border-color","black");
      vars.style.setProperty("--download-text-color","black");
      vars.style.setProperty("--dot-color","black");
      vars.style.setProperty("--label-text-color","black");
      vars.style.setProperty("--email-p","black");
      body.style.setProperty("filter","brightness(100%)");
    } else if (isEnabled) {
      // set to night mode
      nightModeDiv.style.justifyContent = "flex-end";
      vars.style.setProperty("--background-color","#1f232a");
      vars.style.setProperty("--border-color","#1f232a");
      vars.style.setProperty("--desc-text-color","white");
      vars.style.setProperty("--abo-text","white");
      vars.style.setProperty("--text-shadow-about","black");
      vars.style.setProperty("--box-shadow-hover-color","white");
      vars.style.setProperty("--caro-slide-img-color","white");
      vars.style.setProperty("--night-mode-toggle-color","#0900ff");
      vars.style.setProperty("--border-logo","white");
      vars.style.setProperty("--header-color","white");
      vars.style.setProperty("--border-bottom-h2-color","#09aee9");
      vars.style.setProperty("--download-border-color","white");
      vars.style.setProperty("--download-text-color","white");
      vars.style.setProperty("--dot-color","white");
      vars.style.setProperty("--label-text-color","white");
      vars.style.setProperty("--email-p","white");
      body.style.setProperty("filter","brightness(75%)");
    }
    isEnabled = !isEnabled;
  }

  return (
    <>
      <div id="big">
        <div id="parallax">
          <Typing>
            <h2 id="Iam">Hi, I'm Paul.</h2>
          </Typing>
          <Typing speed="10">
            <h3 id="Iam">
              I am a junior level software engineer with experience in
              responsive mobile and web developement.
            </h3>
          </Typing>
        </div>
        <div id="parallax2">
          <img id="me-pic" src={MePic} alt="Card cap" />
          <div id="night-mode-text-flex">
          <div id="night-mode-toggle-flex">
            <div id="night-mode-toggle">
              {" "}
              <div id="toggle-ticker" onClick={toggleTickerEvent}></div>
            </div>
            <p id="paul-desc">Try Night Mode!</p>
            </div>
          </div>
          <Carousel>
            <div id="text-box">
              <div id="nav-links-about-me">
                <h2 id="abo">About Me</h2>
                {/* The Github Logo, Gitlab, Facebook Logo, and Linked Logo, are all registered trademarks of their respective owners, I do not own these. */}
                <div id="linksbox">
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
                      className="logo"
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
              <div id="desc-box">
                <p id="paul-desc">
                  My present position is with Firefly Integrations, a firm that
                  specializes in creating unique touch screen gadgets for luxury
                  RVs. I'm a junior-level software engineer currently living in
                  Indiana who wants to put my skills to use in a fast-paced
                  development environment. I specialize on Javascript frameworks
                  like Angular and React for mobile and web development. at
                  Firefly Integrations, we design systems for luxury RVs
                  (Recreational Vehicles) that handle a variety of functions
                  including awnings, lights, HVAC, and locks!{" "}
                </p>
                <p id="paul-desc">
                  Kenzie Academy was where I started my software development
                  career. Their 12-month full-stack academic vocational-style
                  program gave me the knowledge and abilities I needed to work
                  with a number of modern software platforms, which I applied to
                  my first job at Firefly. During my time at Kenzie, I sharpened
                  my skills in React, Javascript, Python, API technologies,
                  backend servers, front-end UI, and a variety of other web
                  technologies.{" "}
                </p>
              </div>
              <a
                id="learnmore"
                href="https://www.fireflyint.com/"
                target="_blank"
                rel="noreferrer"
              >
                Learn more about Firefly Integrations
              </a>
              <a
                id="learnmore"
                href="https://www.kenzie.academy/"
                target="_blank"
                rel="noreferrer"
              >
                Learn more about Kenzie Academy
              </a>
              <p id="paul-desc">
                Click the radio buttons below to view the next slides.
              </p>
            </div>
            <div id="text-box-desc">
              <div id="parallax2">
                <div id="resumeexp">
                  <h2 id="abo">Experience</h2>
                  <a href={ResumeFile} download id="download">
                    Download My Resume
                  </a>
                </div>
                <div id="big-exp-box">
                  <div id="desc-box-exp">
                    <h1 id="header">
                      Sofware Engineer
                      <br />
                      @Firefly Integrations
                    </h1>
                    <h2 id="header2">May 2021 - Present</h2>
                    <p id="paul-desc">
                      <ul>
                        <li>
                          Implemented new features for in-coach standards like
                          Aqua-Hot water heater indicators that show when the
                          water heater systems are active and running.
                        </li>
                        <br />
                        <li>
                          Diagnose and resolve legacy code bugs without the use
                          of documentation, as well as refactoring and
                          optimization of legacy code.
                        </li>
                        <br />
                        <li>
                          Peer review and diagnose bugs in other team members
                          code, using an understanding of commonly found QA
                          issues to improve coding standards and practices.
                        </li>
                      </ul>
                    </p>
                  </div>
                  <div id="desc-box-exp">
                    <h1 id="header">
                      Sofware Engineer Student
                      <br />
                      @Kenzie Academy
                    </h1>
                    <h2 id="header2">October 2019 - October 2020</h2>
                    <p id="paul-desc">
                      <ul>
                        <li>
                          Twelve-month project-based software engineer program
                          focused on project-management, team building , GitHub
                          implementation, hands on coaching , and interactive
                          instruction.
                        </li>
                        <br />
                        <li>
                          Worked in a team environment as a project manager to
                          create a twitter clone, using proficiency in Node.js,
                          HTML, CSS, Javascript and React to implement user
                          authentication, message posting, and toggle like
                          system.
                        </li>
                        <br />
                        <li>
                          As project manager, delegated tasks as a constituent
                          to optimize workflow and maintain realistic two week
                          sprint deadline acquisition.
                        </li>
                        <br />
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div id="desc-box-exp">
                <h2 id="abo">Certifications</h2>
                <div id="cert-imgs">
                  <div id="cert-tiny">
                    <img id="certs" src={FrontEndCert} alt="front-end-cert" />
                    <h2 id="header">Front-End Web Development</h2>
                  </div>
                  <div id="cert-tiny">
                    <img id="certs" src={FullStackCert} alt="back-end-cert" />
                    <h2 id="header">Full-Stack Web Development</h2>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div id="parallax3">
          <h2 id="abo2">Projects</h2>
          <div id="work-box">
            <div class="card-container" style={{ width: "15em" }}>
              <div class="card-title card-title-react">
                <p class="card-p">React Hooks</p>
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
                <img class="card-img" src={CIThumbnail} alt="Card cap" />
              </a>
              <div class="box-card">
                <h5 id="title">Collect The Infinity Stones</h5>
                <p class="text">
                  A React app tracking elapsed time since last visit using
                  cookie storage, react hooks to increment timers, conditional
                  rendering and flashy comic book style.
                </p>
              </div>
            </div>

            <div class="card-container" style={{ width: "15em" }}>
              <div class="card-title">
                <p class="card-p">React</p>
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
                <img class="card-img" src={CFTThumbnail} alt="Card cap" />
              </a>
              <div class="box-card">
                <h5 id="title">Christian Faith Tabernacle Church</h5>
                <p class="text">
                  Professional looking website used by Christian Faith
                  Tabernacle Church that features, interactive forms,
                  navigation, and effectively styled informational text.
                </p>
              </div>
            </div>

            <div class="card-container" style={{ width: "15em" }}>
              <div class="card-title card-title-js">
                <p class="card-p">Java</p>
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
                <img class="card-img" src={snakeGameThumbnail} alt="Card cap" />
              </a>
              <div class="box-card">
                <h5 class="title">Classic Snake Game With Java</h5>
                <p class="text">
                  The classic snake game reimagined in Java. Built using the
                  Java Graphics library for rendering. Complete with a score
                  board, main menu, and gameover screen.
                </p>
              </div>
            </div>

            <div class="card-container" style={{ width: "15em" }}>
              <div class="card-title card-title-js">
                <p class="card-p">Vanilla JS</p>
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
                <img class="card-img" src={B4Thumbnail} alt="Card cap" />
              </a>
              <div class="box-card">
                <h5 id="title">Connect 4 Board Game</h5>
                <p class="text">
                  A local multiplayer Connect-4 web game, developed using
                  javascript, with UX design, keyboard controls, and data
                  algorithim calculations.
                </p>
              </div>
            </div>

            <div class="card-container" style={{ width: "15em" }}>
              <div class="card-title card-title-js">
                <p class="card-p">Django/Python</p>
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
                <img class="card-img" src={cowSay} alt="Card cap" />
              </a>
              <div class="box-card">
                <h5 id="title">
                  Django Python <br></br>Cow-Say
                </h5>
                <p class="text">
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
          <div id="footer-row">
            <a
              href={ResumeFile}
              download
              id="download"
              className="footerDownload"
            >
              Download My Resume
            </a>
            <div id="linksbox" class="footerlinks">
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
                  className="logo"
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
          <div id="footer-row">
            <p id="footerp">
              By Paul Racisz. Proudly hand-crafted <br />
              with React, HTML, CSS and JSX by me!
            </p>
            <p id="footerp">Follow me on Social Media!</p>
          </div>
        </div>
      </div>
    </>
  );
}
