import React from "react";
import NavLinks from "./NavLinks.jsx";
import Me from '../resources/Paulie-1.jpg'
import '../stylesheets/homepage.css'
import GitHubLogo from "../resources/githublogo.png"
import LinkedInLogo from "../resources/linkedinlogo.png"
import FaceBookLogo from "../resources/facebooklogo.png"

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
            </div>
        </>
    )
}