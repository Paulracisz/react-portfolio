import "../stylesheets/bugsquasher.css"
import gsap from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"
import { useEffect, useRef } from "react"
import { useState } from "react"
import { Stage, Sprite } from "@inlet/react-pixi"
import useWindowDimensions from "../helpers/hooks/useWindowDimensions"
// import { bugArray } from "../helpers/bugGenerator.js"
import Bug from '../resources/svgs/bug-svgrepo-com.svg'
import BugSVG from "../helpers/BugSVG"

export default function BugSquasher(){ 
    gsap.registerPlugin(ScrollTrigger)
    const [ bugArray, setBugArray ] = useState([])
    const { height, width } = useWindowDimensions()

    const bugRef = useRef()
    const tempArray = []

    


    function generateBugs(){ 
        gsap.set(".bug", { 
            // x: getRandomNumber(width, 100),
            // y: getRandomNumber(height, 100),
            height: gsap.utils.random(150, 250),
            width: gsap.utils.random(150, 250)
        })
        const randomTop = getRandomNumber(height, 100)
        const randomLeft = getRandomNumber(width, 100)
        tempArray.push(<BugSVG bottom = {"-50px"} left = {randomLeft} />) 
        setBugArray(tempArray)
        return <BugSVG />
    }
    
   

    function getRandomNumber(max, min){
        return Math.random() * ((max - min) + min)
    }

    console.log(getRandomNumber(height, 0))

    function removeBug(bugArray){ 

    }

    useEffect(() => { 
        for(let i = 0; i <= 20; i++){ 
            generateBugs()
        }
    }, [])
    
    useEffect(() => { 
        gsap.to(".bug-box", { 
            scrollTrigger: { 
                start: 0, 
                // trigger: ".bug-container",
                end: 1000, 
                scrub: true,
                markers: true
            },
            transform: "scale3d(1,1,1)"
        })
    },[ ])



    //     gsap.fromTo(".bug", { 
    //         y: 100,
    //         // left: getRandomNumber(width, 100) 
    //     }, { 
    //         y: -height - 100,
    //         repeat: -1,
    //         repeatRefresh: true,
    //         duration: Math.random() + 1 * 6,
    //         delay: 'random(0,4)'
    //     })
    // }, [bugArray])
    
    console.log(bugArray)
    function squashBug(e){ 
        console.log('clicked bug', e.target)
    }

    return( 
        <div className = "bug-container">
            <div className="bug-box">
                {bugArray.map((bug, index) => { 
                    return (
                        <div onClick = {(e) => squashBug(e)} ref = {bugRef} index = {index} > 
                            {bug}
                        </div>
                    )
                })}
                {/* <BugSVG /> */}
                    Bug Squash

            </div>
        </div>
    )
}