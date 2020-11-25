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
import '../stylesheets/work.css'


export default function HomePage() {
    return (
        <>
            <div id="big">
                <NavLinks />
                <h2 id="Iam">I am Paul Racisz.</h2>
                <div id="big-p-box">
                    <div id="profile-card" class="card" style={{ width: "15em" }}>
                        <img class="card-img-top" src={Me} alt="Card cap" />
                        <div  class="card-body" id="profile-body">
                            <h5 class="card-title">Paul Racisz</h5>
                            <p class="card-text">Paul is an avid video game nerd, hobbyist weight lifter, and passionate coder. His technical experience is vast, but he specializes in React, and Javascript.
                            <br/><br/>Phone Number: <br/>(734)- 624 - 9048<br/> Email: paulieracisz@gmail.com <br/> </p>
                                <div>
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
                            <div class="card" style={{ width: "30em" }}>
                                <div class="card-body">
                                    <h5 id="cl-title" class="card-title">Cover Letter</h5>
                                    <p class="card-text">
As an early career software engineering professional with some light technical experience, I am an ideal candidate for the Software Engineer position available with your company.  Please accept <a href="/resume">my resume</a> for your consideration.
I am a motivated professional with a demonstrable record of helping organizations meet their goals.  My positive attitude, world-class work ethic, and attention to detail have helped me succeed in a variety of fast-paced environments.  I take my work seriously, and approach every undertaking with enthusiasm, diligence, and positivity. I am ready to tackle a challenging, professional position that makes excellent use of my multi-tasking, project coordination, engineering, organizational, and relationship management skills.  
My strong communication skills and years of experience working with diverse groups allow me to move with ease and obtain commitments among clients and coworkers of varied backgrounds and different levels of responsibility.  I have the utmost respect for confidentiality, and approach sensitive matters with discretion and tact.  I am especially skilled at keeping operations running smoothly and efficiently in the midst of changes to technologies, procedures, or personnel. 
My knowledge of the full software engineering & development life cycle experience have prepared me well for a challenging role with your company.  I look forward to meeting with you to discuss how I can help your organization meet its objectives in 2020 and beyond.  Please don’t hesitate to contact me with any questions.  Thanks so much for your time and consideration. <br/> Sincerely, <br/>
<p style={{fontFamily: "Gabriola", fontSize: "2.5em"}}>Paul Racisz</p>

</p>
                        </div>
                    </div>
                </div>
                <div id="progress-card" class="card" style={{ width: "45em" }}>
                <div  class="card-body" id="profile-body">
                <h5 id="cl-title" class="card-title">Skills</h5>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style={{width: "60%"}} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100">Django Skill</div>
</div>
<div class="progress">
  <div class="progress-bar bg-danger" role="progressbar" style={{width: "65%"}} aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">Python Skill</div>
</div>
                <div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style={{width: "85%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">Javascript Skill</div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style={{width: "85%"}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100">React Skill</div>
</div>
<div class="progress">
  <div class="progress-bar bg-info" role="progressbar" style={{width: "95%"}} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">CSS Skill</div>
</div>
            </div>
            </div>
            <div id="big">
                <NavLinks />
                <h2>Resume Preview</h2>
                <a href={ResumeFile} download>Click here to download the full resume.</a>
                <div class="card">
                    <div class="card-body">
                    <img src={Resume} alt="resume" />
                    </div>
                </div>
            </div>
            <h2>Work</h2>
                <p>Click on the Images of the projects to go to their deployed site.</p>
                <div id="card-box">
                    <div class="card" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/connect-four/" target="_blank" rel="noreferrer">
                        <img id="b4-card" class="card-img-top" src={B4Thumbnail} alt="Card cap" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Blink 4 Web Game</h5>
                            <p class="card-text">A local multiplayer Connect-4 mock web game, developed using only javascript, with stunning UI, and beautiful visuals.</p>
                        </div>
                    </div>
                    <div class="card" style={{ width: "15em" }}>
                        <a href="https://paulracisz.gitlab.io/photos-from-here" target="_blank" rel="noreferrer">
                        <img id="pfh-card" class="card-img-top" src={PFHThumbnail} alt="Card cap"/>
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Photos From Here</h5>
                            <p class="card-text">Photos From Here utilizes the Geolocation API to parse the users Coordinates, and then communicates with the Flickr API, to serve up photos that were taken near them.</p>
                        </div>
                    </div>
                    <div class="card" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/game-of-chance" target="_blank" rel="noreferrer">
                        <img id="b4-card" class="card-img-top" src={GOCThumbnail} alt="Card cap" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Game Of Chance</h5>
                            <p class="card-text">Game of Chance is a dungeon themed rock paper scissors game that is played against an AI opponent, you must fight an evil wizard to escape the dungeon and win your freedom.</p>
                        </div>
                    </div>
                    <div class="card" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/mazeproject" target="_blank" rel="noreferrer">
                        <img id="b4-card" class="card-img-top" src={MGThumbnail} alt="Card cap" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Maze Project</h5>
                            <p class="card-text">Maze Game is a simple, adorable and cheeky game that uses keyboard inputs to guide a dog through a maze to find his bone.</p>
                        </div>
                    </div>
                    <div class="card" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/tower-of-hanoi/" target="_blank" rel="noreferrer">
                        <img id="b4-card" class="card-img-top" src={TOHThumbnail} alt="Card cap" />
                        </a>
                        <div class="card-body">
                            <h5 class="card-title">Tower Of Hanoi</h5>
                            <p class="card-text">The Tower Of Hanoi is a puzzle in which you must transfer several different sized discs from one tower to another, without placing any larger discs on top of smaller ones. I turned this puzzle into a javascript web game.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}