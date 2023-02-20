// images
import CIThumbnail from "../resources/CIThumbnail.png";
import B4Thumbnail from "../resources/b4thumbnail.png";
import CFTThumbnail from "../resources/cftthumbnail.png";

// libraries
import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";

// stylesheets
import "../stylesheets/carousel.css";

export default function PicCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <a
            href="https://paulracisz.github.io/Collecting-The-Infinity-Stones/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="d-block w-100"
              src={CIThumbnail}
              alt="First slide"
            />
          </a>
          <h2 className="caro-title">Collect The Infinity Stones</h2>
          <p className="caro-text">
            A React app tracking elapsed time since last visit using cookie
            storage, react hooks to increment timers, conditional rendering and
            flashy comic book style.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <a href="https://cftabernacle.com" target="_blank" rel="noreferrer">
            <img
              className="d-block w-100"
              src={CFTThumbnail}
              alt="Second slide"
            />
          </a>
          <h2 className="caro-title">Christian Faith Tabernacle Church</h2>
          <p className="caro-text">
            Professional looking website used by Christian Faith Tabernacle
            Church that features, interactive forms, navigation, and effectively
            styled informational text.
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <a
            href="https://paulracisz.github.io/Collecting-The-Infinity-Stones/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              className="d-block w-100"
              src={B4Thumbnail}
              alt="Third slide"
            />
          </a>
          <h2 className="caro-title">Connect 4 Board Game</h2>
          <p className="caro-text">
            {" "}
            A local multiplayer Connect-4 web game, developed using javascript,
            with UX design, keyboard controls, and data algorithim calculations.
          </p>
        </Carousel.Item>
      </Carousel>
      {/* <div id="work-box">
        <div className="card-container" style={{ width: "15em" }}>
          <div className="card-title card-title-react">
            <p className="card-p">React Hooks</p>
            <img src={reactSymbol} alt="react-symbol" className="symbols"></img>
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
              A React app tracking elapsed time since last visit using cookie
              storage, react hooks to increment timers, conditional rendering
              and flashy comic book style.
            </p>
          </div>
        </div>

        <div className="card-container" style={{ width: "15em" }}>
          <div className="card-title">
            <p className="card-p">React</p>
            <img src={reactSymbol} alt="react-symbol" className="symbols"></img>
          </div>
          <a href="https://cftabernacle.com" target="_blank" rel="noreferrer">
            <img className="card-img" src={CFTThumbnail} alt="Card cap" />
          </a>
          <div className="box-card">
            <h3 className="title">Christian Faith Tabernacle Church</h3>
            <p className="card-text">
              Professional looking website used by Christian Faith Tabernacle
              Church that features, interactive forms, navigation, and
              effectively styled informational text.
            </p>
          </div>
        </div>

        <div className="card-container" style={{ width: "15em" }}>
          <div className="card-title card-title-js">
            <p className="card-p">Java</p>
            <img src={javaSymbol} alt="react-symbol" className="symbols"></img>
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
              The classic snake game reimagined in Java. Built using the Java
              Graphics library for rendering. Complete with a score board, main
              menu, and gameover screen.
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
              javascript, with UX design, keyboard controls, and data algorithim
              calculations.
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
              package called Cow-Say that displays an ASCII cow with a speech
              bubble containing a user's input.
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}
