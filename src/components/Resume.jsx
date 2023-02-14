import React from "react";
import NavLinks from "./NavLinks";
import Resume from '../resources/resume.png';
import '../stylesheets/resume.css';
import ResumeFile from '../resources/resumefile.pdf'

export default function Work() {
    return (
        <>
            <div id="big">
                <NavLinks />
                <h2>Resume Preview</h2>
                <a href={ResumeFile} download>Click here to download the full resume.</a>
                <div className="card">
                    <div className="card-body">
                    <img src={Resume} alt="resume" />
                    </div>
                </div>
            </div>
        </>
    )
}