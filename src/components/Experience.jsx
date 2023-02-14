import lynxScreen from '../resources/app_image.png'
import Biweeklysprints from './BiweeklySpints'
import Contributions from './Contributions'
import '../stylesheets/experience.css'
import { useEffect } from 'react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
export default function Experience(){ 

    useEffect(() => { 
        gsap.registerPlugin(ScrollTrigger)
        gsap.to('.fold-down', { 
            scrollTrigger: { 
                start: 1300, 
            },
            transformOrigin: "top",
            rotateX: '0deg', 
            duration: 1,
            ease: "bounce", 
            onComplete: () => { 
                gsap.to('.underline', { 
                    width: "100%",
                    duration: .5,
                    onComplete: () => { 
                        gsap.to('.fold-down-2', { 
                            scrollTrigger: { 
                                start: 1400, 
                            },
                            transformOrigin: "top",
                            rotateX: '0deg', 
                            duration: .5,
                            ease: "bounce"
                        })
                    }
                })
            }
        })

        gsap.to('.fold-down-3', { 
            scrollTrigger: { 
                start: 2800,
                markers: false
            },
            rotateX: "0deg", 
            transformOrigin: "top",
            duration: 1, 
            ease: 'bounce'
        })

        gsap.to(".lynx-photo", { 
            scrollTrigger: { 
                start: 1500,
            }, 
            duration: 1,
            transform: "translateX(0px)",
            opacity: 1,
        })

        gsap.to('.lynx-description', { 
            scrollTrigger: { 
                start: 1500, 
            },
            duration: 1, 
            transform: 'translateX(0)',
            opacity: 1,
        })

    }, [])
    return(
        <div className = "experience-container">
            <h1 className = "experience-text">Experience</h1>
            <div className='fold-down-container'>
                <div className='fold-down'> 
                    <h2 className = "fold-down-text">Fire Fly Integrations</h2>
                    <p className = "underline"></p>
                </div>
                <div className='fold-down-2'> 
                    <h3 className='fold-down-text-smaller'>So what do I do there?</h3>
                </div>
                <div className = "fresh-water"></div> 
                <div className = "experience-grid"> 
                    <div className='lynx-photo'>
                        <img className='lynx-screen' src = {lynxScreen} alt = "lynx screen from firefly integrations"></img>
                    </div> 
                    <div className = "lynx-description">
                        <p className = "lynx-text">This is the lynx screen, It is used to control the RVs that firefly sells. I program the screens</p>
                    </div>     
                </div>
                <Biweeklysprints />
                <div className='fold-down-3'> 
                    <h3 className='fold-down-text-smaller'>So what features did I contribute?</h3>
                </div>
                <Contributions />
            </div> 
                
        </div>
    )
}