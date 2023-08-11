import React from "react";
import ReactDOM from "react-dom/client";
import ReactFullpage from "@fullpage/react-fullpage";
import ReadmeViewer from "./ReadmeViewer";

// NOTE: if using fullpage extensions/plugins put them here and pass it as props
const pluginWrapper = () => {
  require("./statics/fullpage.scrollHorizontally.min");
};

const Fullpage = () => (
  <ReactFullpage
    pluginWrapper={pluginWrapper}
    //fullpage options
    licenseKey={"YOUR_KEY_HERE"}
    scrollingSpeed={1000} /* Options here */
    scrollHorizontally={true} /* Because we are using the extension */
    scrollHorizontallyKey={"YOUR KEY HERE"}
    render={({ state, fullpageApi }) => {
      return (
        <ReactFullpage.Wrapper>
          <div className="section">
            <div id="readme-box">
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
            <button onClick={() => fullpageApi.moveSectionDown()}>
              Click me to move down
            </button>
          </div>
          <div className="section">
            <p>Section 2</p>
          </div>
        </ReactFullpage.Wrapper>
      );
    }}
  />
);

ReactDOM.createRoot(<Fullpage />, document.getElementById("react-root"));
