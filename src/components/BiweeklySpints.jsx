import * as LottiePlayer from "@lottiefiles/lottie-player";
import {useEffect, useRef} from 'react'
import animationData from "../resources/lottieAnimations/104286-coding-screen.json"
import gsap from 'gsap'
// import Typing from "react-typing-animation";
import "../stylesheets/biweekly.css"
export default function Biweeklysprints(){
    // const options = { 
    //     animationData: animationData, 
    //     loop: false, 
    //     autoplay: false,
    // }

    const animationRef = useRef()
    // const animation = useLottie(options)
  
    useEffect(() => { 
        const observer = new IntersectionObserver((entries) => { 
            entries.forEach(entry => {
                if(entry.isIntersecting){ 
                    // animationRef.play()
                } else { 
                    // animationRef.pause()
                }
            })
        }, { 
            threshold: 0.5
        })
    
        observer.observe(animationRef.current)
    }, [])
    
  
    

    // <div className = "lottie-animation" ref = {animationRef}>{animation.View}</div>

    return( 
        <div className = "biweek-grid-container">
            <lottie-player
                className = "lottie-animation" 
                ref = {animationRef}
                autoplay
                // controls
                loop
                mode="normal"
                src="https://assets10.lottiefiles.com/packages/lf20_tno6cg2w.json"
            ></lottie-player>
        </div>

    )
}