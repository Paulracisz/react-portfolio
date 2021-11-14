import React from "react";
import '../stylesheets/homepage.css'
import GitHubLogo from "../resources/githublogo.png"
import LinkedInLogo from "../resources/linkedinlogo.png"
import FaceBookLogo from "../resources/facebooklogo.png"
import '../stylesheets/resume.css';
import ResumeFile from '../resources/resumefile.pdf'
import PFHThumbnail from '../resources/pfhthumbnail.png'
import B4Thumbnail from '../resources/b4thumbnail.png'
import GOCThumbnail from '../resources/gocthumbnail.png'
import MGThumbnail from '../resources/mgthumbnail.png'
import TOHThumbnail from '../resources/tohthumbnail.png'
import SLHThumbnail from '../resources/SLHthumbnail.png'
import CFTThumbnail from '../resources/cftthumbnail.png'
import STThumbnail from '../resources/STthumbnail.png'
import GitLabLogo from '../resources/gitlab-logo.png'
import '../stylesheets/work.css'
import Typing from 'react-typing-animation';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import FrontEndCert from '../resources/frontendcert.png'
import FullStackCert from '../resources/Fullstackcert.PNG'
import{ init } from 'emailjs-com';
import { ContactUs } from "./contact";
init("user_8H2okSIPMyJBrfkGMvZv4");

export default function HomePage() {
    return (
        <>
            <div id="big">
                <div id="parallax">
                <Typing><h2 id="Iam">Hi, I'm Paul.</h2></Typing>
                <Typing speed="10"><h3 id="Iam">I am a junior level software engineer with experience in responsive mobile and web developement.</h3></Typing>
                </div>
                <div id="parallax2">
                <img id="me-pic" src="https://media-exp1.licdn.com/dms/image/D4E03AQF14GhN9bKa4g/profile-displayphoto-shrink_800_800/0/1636382127145?e=1642032000&v=beta&t=OcnNsVhVzghkg8GbX1gIzmzfZ5_zlquT-fjiCfBQVO4" alt="Card cap" />
                <Carousel>
                <div id="text-box">
                <div id="nav-links-about-me">
                    <h2 id="abo">About Me</h2>
                          {/* The Github Logo, Gitlab, Facebook Logo, and Linked Logo, are all registered trademarks of their respective owners, I do not own these. */}
                          <div id="linksbox">
                          <a href="https://gitlab.com/paulracisz" target="_blank" rel="noreferrer">
                                    <img className="logo" src={GitLabLogo} alt="github logo" style={{width: "2em", height: "2em"}}/>
                                    </a>
                                    <a href="https://github.com/Paulracisz" target="_blank" rel="noreferrer">
                                    <img className="logo" src={GitHubLogo} alt="github logo" style={{width: "2em", height: "2em"}}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/paul-racisz-745b11196/" target="_blank" rel="noreferrer">
                                    <img className="logo" src={LinkedInLogo} alt="linkedin logo" style={{width: "2em", height: "2em"}}/>
                                    </a>
                                    <a href="https://www.facebook.com/paulie.racisz" target="_blank" rel="noreferrer">
                                    <img className="logo" src={FaceBookLogo} alt="facebook logo" style={{width: "2em", height: "2em"}}/>
                                    </a>
                                    </div>
                </div>
                <div id="desc-box">
                <p id="paul-desc">My present position is with Firefly Integrations, a firm that specializes in creating unique touch screen gadgets for luxury RVs.
I'm a junior-level software engineer currently living in Indiana who wants to put my skills to use in a fast-paced development environment.
I specialize on Javascript frameworks like Angular and React for mobile and web development.
at Firefly Integrations, we design systems for luxury RVs (Recreational Vehicles) that handle a variety of functions including awnings, lights, HVAC, and locks! </p>
                <p id="paul-desc">Kenzie Academy was where I started my software development career. Their 12-month full-stack academic vocational-style program gave me the knowledge and abilities I needed to work with a number of modern software platforms, which I applied to my first job at Firefly.
During my time at Kenzie, I sharpened my skills in React, Javascript, Python, API technologies, backend servers, front-end UI, and a variety of other web technologies.  </p>
                </div>
                <a  id="learnmore" href="https://www.fireflyint.com/" target="_blank" rel="noreferrer">Learn more about Firefly Integrations</a>
                <a id="learnmore" href="https://www.kenzie.academy/"  target="_blank" rel="noreferrer">Learn more about Kenzie Academy</a>
                <p id="paul-desc">Click the radio buttons below to view the next slides.</p>
                
                </div>
                <div id="text-box-desc">
                <div id="parallax2">
                    <div id="resumeexp">
                    <h2 id="abo">Experience</h2>
                <a href={ResumeFile} download id="download">Download My Resume</a>
                    </div>
                    <div id="big-exp-box">
                    <div id="desc-box-exp">
                <h1 id="header">Sofware Engineer<br/>@Firefly Integrations</h1>
                <h2 id="header2">May 2021 - Present</h2>
                <p id="paul-desc"><ul><li>Implemented new features for in-coach standards like Aqua-Hot water heater indicators that show when the water heater systems are active and running.</li><br/><li>Diagnose and resolve legacy code bugs without the use of documentation, as well as refactoring and optimization of legacy code.</li><br/><li>Peer review and diagnose bugs in other team members code, using an understanding of commonly found QA issues to improve coding standards and practices.</li></ul></p>
</div>
<div id="desc-box-exp">
                <h1 id="header">Sofware Engineer Student<br/>@Kenzie Academy</h1>
                <h2 id="header2">October 2019 - October 2020</h2>
                <p id="paul-desc"><ul><li>Twelve-month project-based software engineer program focused on project-management, team building , GitHub implementation, hands on coaching , and interactive instruction.</li><br/>
<li>Worked in a team environment as a project manager to create a twitter clone, using proficiency in Node.js, HTML, CSS, Javascript and React to implement user authentication, message posting, and  toggle like system.</li><br/>
<li>As project manager, delegated tasks as a constituent to optimize workflow and maintain realistic two week sprint deadline acquisition.</li><br/></ul>
</p>
</div>
<div id="desc-box-exp">
                <h1 id="header">Salesman<br/>@Menards</h1>
                <h2 id="header2">September 2019 - April 2020</h2>
                <p id="paul-desc"><ul><li>Follow up with customers on roofing, siding, deck and exterior lumber architecture.</li><br/>
<li>Advise guests on their home improvement projects; providing development estimates and excellent design strategy.</li></ul>
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
                <img id="certs" src={FrontEndCert}/>
                <h2 id="header">Front-End Web Development</h2>
                </div>
                <div id="cert-tiny">
                <img id="certs" src={FullStackCert}/>
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
                    <a href="https://paulracisz.gitlab.io/connect-four/" target="_blank" rel="noreferrer">
                        <img class="card-img" src={B4Thumbnail} alt="Card cap" />
                        </a>
                        <div class="box-card">
                            <h5 id="title">Blink 4 Web Game</h5>
                            <p class="text">A local multiplayer Connect-4 mock web game, developed using only javascript, with stunning UI, and beautiful visuals.</p>
                        </div>
                        </div>
                        <div class="card-container" style={{ width: "15em" }}>
                    <a href="https://cftabernacle.com" target="_blank" rel="noreferrer">
                        <img class="card-img" src={CFTThumbnail} alt="Card cap" />
                        </a>
                        <div class="box-card">
                            <h5 id="title">Christian Faith Tabernacle Church Website</h5>
                            <p class="text">A website that I created for my church with a contact page, donations, about us segment, pictures and snazzy styling!</p>
                        </div>
                        </div>
                    <div class="card-container" style={{ width: "15em" }}>
                        <a href="https://paulracisz.gitlab.io/photos-from-here" target="_blank" rel="noreferrer">
                        <img class="card-img" src={PFHThumbnail} alt="Card cap"/>
                        </a>
                        <div class="box-card">
                            <h5 class="title">Photos From Here</h5>
                            <p class="text">Photos From Here utilizes the Geolocation API to parse the users Coordinates, and then communicates with the Flickr API, to serve up photos that were taken near them.</p>
                        </div>
                    </div>
                    <div class="card-container" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/game-of-chance" target="_blank" rel="noreferrer">
                        <img class="card-img" src={GOCThumbnail} alt="Card cap" />
                        </a>
                        <div class="box-card">
                            <h5 class="title">Game Of Chance</h5>
                            <p class="text">Game of Chance is a dungeon themed rock paper scissors game that is played against an AI opponent, you must fight an evil wizard to escape the dungeon and win your freedom.</p>
                        </div>
                    </div>
                    <div class="card-container" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/mazeproject" target="_blank" rel="noreferrer">
                        <img class="card-img" src={MGThumbnail} alt="Card cap" />
                        </a>
                        <div class="box-card">
                            <h5 class="title">Maze Project</h5>
                            <p class="text">Maze Game is a simple, adorable and cheeky game that uses keyboard inputs to guide a dog through a maze to find his bone.</p>
                        </div>
                    </div>
                    <div class="card-container" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/tower-of-hanoi/" target="_blank" rel="noreferrer">
                        <img class="card-img" src={TOHThumbnail} alt="Card cap" />
                        </a>
                        <div class="box-card">
                            <h5 class="title">Tower Of Hanoi</h5>
                            <p class="text">The Tower Of Hanoi is a puzzle in which you must transfer several different sized discs from one tower to another, without placing any larger discs on top of smaller ones. I turned this puzzle into a javascript web game.</p>
                        </div>
                    </div>
                    <div class="card-container" style={{ width: "15em" }}>
                        <a href="https://paulracisz.gitlab.io/sports-lab-hard" target="_blank" rel="noreferrer">
                        <img class="card-img" src={SLHThumbnail} alt="Card cap"/>
                        </a>
                        <div class="box-card">
                            <h5 class="title">Sports Lab</h5>
                            <p class="text">a Sports Game simulating a random shooting score between two teams, with sounds, icons, and shooting percentages!</p>
                        </div>
                </div>
                <div class="card-container" style={{ width: "15em" }}>
                        <a href="https://paulracisz.github.io/sales-table/" target="_blank" rel="noreferrer">
                        <img class="card-img" src={STThumbnail} alt="Card cap"/>
                        </a>
                        <div class="box-card">
                            <h5 class="title">Sales Table</h5>
                            <p class="text">A javascript, HTML, and CSS project that aims to simulate what a real dynamic table of sales data is like. The table can sort chronologically, by each quarter of the year, alphabetically, ascending, and descending by sales number.</p>
                        </div>
                </div>
            </div>
                </div>
                <div id="contact-box">
                    <h2 id="header2">Contact Me</h2>
                    <ContactUs/>
                    <p id="emailp">Or you can email me directly at paulieracisz@gmail.com</p>
                </div>
                <div id="footer">
                    <div id="footer-row">
                    <a href={ResumeFile} download id="download" className="footerDownload">Download My Resume</a>
                    <div id="linksbox" class="footerlinks">
                          <a href="https://gitlab.com/paulracisz" target="_blank" rel="noreferrer">
                                    <img className="logo" src={GitLabLogo} alt="github logo" style={{width: "2em", height: "2em"}}/>
                                    </a>
                                    <a href="https://github.com/Paulracisz" target="_blank" rel="noreferrer">
                                    <img className="logo" src={GitHubLogo} alt="github logo" style={{width: "2em", height: "2em"}}/>
                                    </a>
                                    <a href="https://www.linkedin.com/in/paul-racisz-745b11196/" target="_blank" rel="noreferrer">
                                    <img className="logo" src={LinkedInLogo} alt="linkedin logo" style={{width: "2em", height: "2em"}}/>
                                    </a>
                                    <a href="https://www.facebook.com/paulie.racisz" target="_blank" rel="noreferrer">
                                    <img className="logo" src={FaceBookLogo} alt="facebook logo" style={{width: "2em", height: "2em"}}/>
                                    </a>
                                    </div>
                                    </div>
                                    <div id="footer-row">
                    <p id="footerp">By Paul Racisz. Proudly hand-crafted <br/>with React, HTML, CSS and JSX by me!</p>
                    <p id="footerp">Follow me on Social Media!</p>
                    </div>
</div>
            </div>
        </>
    )
}