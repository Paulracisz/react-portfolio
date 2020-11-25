import React from "react";
import Kitty from "../resources/kitty.png"
import "../stylesheets/404.css"

export default function FourZeroFour() {
    return (
        <>
        <div id="big">
            <h2>Page Not Found.</h2>
            <img alt="from http://www.pngall.com/kitten-png" src={Kitty}/>
            <a href="/">Back Home.</a>
        </div>
        </>
    )
}