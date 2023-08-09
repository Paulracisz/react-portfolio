import React from "react";
import Slider from "react-slick";
import ReadmeViewer from "./ReadmeViewer";
import ReadmeLogo from "../resources/github-icon.PNG";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../stylesheets/slide.css"

export default function SimpleSlider() {
  var settings = {
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
      <div id="readme-box">
            <div id="readme-top-box">
              <img
                id="readme-logo"
                alt="a small hamburger style icon of the github readme menu option"
                src={ReadmeLogo}
              ></img>
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
            <ReadmeViewer username="Paulracisz" repository="Core-Christian-Living-Blog" />
            
          </div>
      </div>
      <div>
        
      <div id="readme-box">
            <div id="readme-top-box">
              <img
                id="readme-logo"
                alt="a small hamburger style icon of the github readme menu option"
                src={ReadmeLogo}
              ></img>
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
            <ReadmeViewer username="Paulracisz" repository="Fishing-Game" />
            
          </div>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );
}