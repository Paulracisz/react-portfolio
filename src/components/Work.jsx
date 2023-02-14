import React from "react";
import NavLinks from "./NavLinks";
import PFHThumbnail from '../resources/pfhthumbnail.png'
import B4Thumbnail from '../resources/b4thumbnail.png'
import GOCThumbnail from '../resources/gocthumbnail.png'
import MGThumbnail from '../resources/mgthumbnail.png'
import TOHThumbnail from '../resources/tohthumbnail.png'
import '../stylesheets/work.css'


export default function Work() {
    return (
        <>
            <div id="big">
                <NavLinks />
                <h2>Work</h2>
                <p>Click on the Images of the projects to go to their deployed site.</p>
                <div id="card-box">
                    <div className="card" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/connect-four/" target="_blank" rel="noreferrer">
                        <img id="b4-card" className="card-img-top" src={B4Thumbnail} alt="Card cap" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Blink 4 Web Game</h5>
                            <p className="card-text">A local multiplayer Connect-4 mock web game, developed using only javascript, with stunning UI, and beautiful visuals.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "15em" }}>
                        <a href="https://paulracisz.gitlab.io/photos-from-here" target="_blank" rel="noreferrer">
                        <img id="pfh-card" className="card-img-top" src={PFHThumbnail} alt="Card cap"/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Photos From Here</h5>
                            <p className="card-text">Photos From Here utilizes the Geolocation API to parse the users Coordinates, and then communicates with the Flickr API, to serve up photos that were taken near them.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/game-of-chance" target="_blank" rel="noreferrer">
                        <img id="b4-card" className="card-img-top" src={GOCThumbnail} alt="Card cap" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Game Of Chance</h5>
                            <p className="card-text">Game of Chance is a dungeon themed rock paper scissors game that is played against an AI opponent, you must fight an evil wizard to escape the dungeon and win your freedom.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/mazeproject" target="_blank" rel="noreferrer">
                        <img id="b4-card" className="card-img-top" src={MGThumbnail} alt="Card cap" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Maze Project</h5>
                            <p className="card-text">Maze Game is a simple, adorable and cheeky game that uses keyboard inputs to guide a dog through a maze to find his bone.</p>
                        </div>
                    </div>
                    <div className="card" style={{ width: "15em" }}>
                    <a href="https://paulracisz.gitlab.io/tower-of-hanoi/" target="_blank" rel="noreferrer">
                        <img id="b4-card" className="card-img-top" src={TOHThumbnail} alt="Card cap" />
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Tower Of Hanoi</h5>
                            <p className="card-text">The Tower Of Hanoi is a puzzle in which you must transfer several different sized discs from one tower to another, without placing any larger discs on top of smaller ones. I turned this puzzle into a javascript web game.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}