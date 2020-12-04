import React from "react";
import NavLinks from "./NavLinks.jsx";
import Me from '../resources/Paulie-1.jpg'
import '../stylesheets/homepage.css'
import GitHubLogo from "../resources/githublogo.png"
import LinkedInLogo from "../resources/linkedinlogo.png"
import FaceBookLogo from "../resources/facebooklogo.png"
import Resume from '../resources/resume.png';
import '../stylesheets/resume.css';
import ResumeFile from '../resources/resumefile.pdf'
import PFHThumbnail from '../resources/pfhthumbnail.png'
import B4Thumbnail from '../resources/b4thumbnail.png'
import GOCThumbnail from '../resources/gocthumbnail.png'
import MGThumbnail from '../resources/mgthumbnail.png'
import TOHThumbnail from '../resources/tohthumbnail.png'
import SLHThumbnail from '../resources/SLHthumbnail.png'
import CFTThumbnail from '../resources/cftthumbnail.png'
import GitLabLogo from '../resources/gitlab-logo.png'
import Skills from '../resources/Skills.png'
import '../stylesheets/work.css'

export default function HomePage() {
    return (
        <>
            <div id="big">
                <NavLinks />
                <h2 id="Iam">I am Paul Racisz.</h2>
                <div id="big-p-box">
                    <div>
                        <img id="me-pic" src={Me} alt="Card cap" />
                        <div id="profile-box">
                            <h5 id="paul-title">Paul Racisz</h5>
                            <p id="paul-desc">Paul is an avid video game nerd, 
                            <br/> hobbyist weight lifter, and passionate coder. <br/>His technical experience is vast, but he specializes in React,<br/> and Javascript.
                            <br/><br/>Phone Number: <br/>(734)- 624 - 9048<br/> Email: paulieracisz@gmail.com <br/> </p>
                                <div id="social-links">
                                    {/* The Github Logo, Gitlab, Facebook Logo, and Linked Logo, are all registered trademarks of their respective owners, I do not own these. */}
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
                            </div>
                            <div>
                                <div id="cv-box">
                                    <h5 id="cv-title">Cover Letter</h5>
                                    <p id="cv-text">
As an early career software engineering professional with some light technical experience, I am an ideal candidate for the Software Engineer <br/>position available with your company. Please accept <a href="#resume">my resume</a> for your consideration.<br/>
I am a motivated professional with a demonstrable record of helping organizations meet their goals.<br/>  My positive attitude, world-class work ethic, and attention to detail have helped me succeed in a variety of fast-paced environments.<br/>  I take my work seriously, and approach every undertaking with enthusiasm, diligence, and positivity.<br/> I am ready to tackle a challenging, professional position that makes excellent use of my multi-tasking, project coordination, engineering, organizational,<br/> and relationship management skills.  
My strong communication skills and years of experience working with diverse groups allow me<br/> to move with ease and obtain commitments among clients and coworkers of varied backgrounds and different levels of responsibility.<br/>  I have the utmost respect for confidentiality, and approach sensitive matters with discretion and tact.<br/>  I am especially skilled at keeping operations running smoothly and efficiently in the midst of changes to technologies, procedures, or personnel. <br/>
My knowledge of the full software engineering & development life cycle experience have prepared me well for a challenging role with your company.<br/>  I look forward to meeting with you to discuss how I can help your organization meet its objectives in 2020 and beyond.<br/>  Please don’t hesitate to contact me with any questions.<br/>  Thanks so much for your time and consideration. <br/> Sincerely, <br/>
<p style={{fontFamily: "Gabriola", fontSize: "2.5em", textAlign: "center",}}>Paul Racisz</p>

</p>
                        </div>
                    </div>
            </div>
                    <div>
                    <img  id="skills-img" src={Skills} alt="skills bar graph"></img>
            </div>
            <div id="big">
                <h2 class="black-h2" id="resume">Resume Preview</h2>
                <a href={ResumeFile} download>Click here to download the full resume.</a>
                <div class="resume-box">
                    <div class="resume-body">
                    <img id="resume-img" src={Resume} alt="resume" />
                    </div>
                </div>
            </div>
            <h2 class="black-h2">Work</h2>
                <p class="black-h2">Click on the Images of the projects to go to their deployed site.</p>
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
            </div>
            <a href="#top" id="bottom">Back To The Top</a>
            </div>
        </>
    )
}