import React from "react";

export default function NavLinks() {
    return (
        <>
            <nav class="navbar navbar-light bg-light">
                <a class="nav-link active" href="/react-portfolio">Home</a>
                <a class="nav-link active" href="/resume">Resume</a>
                <a class="nav-link active" href="/work">Work</a>
                <a class="nav-link active" href="/contact">Contact</a>
            </nav>
        </>
    )
}