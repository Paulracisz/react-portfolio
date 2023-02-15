import { useState, useRef, useEffect } from "react"
import gsap from 'gsap'
import useWindowDimensions from "./hooks/useWindowDimensions"

export default function BugSVG({bottom, left}){
    const [ hover, setHover ] = useState(false)
    const { height, width } = useWindowDimensions()
    // const [ y, setY ] = useState(0)
    const bugRef = useRef()

   

    // function getPosition(){ 
    //     const y = bugRef.current?.offsetTop
    //     setY(y)
    // }
    // useEffect(() => { 
    //     getPosition()
    //     console.log(y, "yposition")
    // }, [y])

    useEffect(() => { 
        gsap.fromTo(bugRef.current, { 
            y: 100,
            // left: getRandomNumber(width, 100) 
        }, { 
            y: -height - 100,
            repeat: -1,
            repeatRefresh: true,
            duration: Math.random() + 1 * 6,
            delay: 'random(0,6)',
            ease: 'linear'
        })
    }, [])
    return( 
        <div> 
            <svg ref = {bugRef}   className="bug" style = {{bottom: bottom, left: left}}  fill= {hover ? "blue" : "#ffffff"} height="800px" width="800px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 512 512" xmlSpace="preserve" onMouseEnter={() => setHover(prev => !prev)} onMouseLeave = {() => setHover(prev => !prev)}>
            <g>
                <g>
                    <path d="M410.22,314.947h86.358c8.516,0,15.422-6.906,15.422-15.422s-6.906-15.422-15.422-15.422h-86.361
                        c0,0-0.042-42.903-0.103-44.683h13.577c41.89,0,75.972-34.082,75.972-75.973v-57.464c0-8.516-6.906-15.422-15.422-15.422
                        s-15.422,6.906-15.422,15.422v57.466c0,24.884-20.244,45.13-45.128,45.13h-17.777c-10.465-43.338-39.279-79.59-77.73-100.044
                        c30.52-17.206,51.189-49.911,51.189-87.372c0-8.516-6.906-15.422-15.422-15.422c-8.516,0-15.422,6.906-15.422,15.422
                        c0,38.266-31.132,69.398-69.398,69.398h-46.265c-38.266,0-69.398-31.132-69.398-69.398c0-8.516-6.906-15.422-15.422-15.422
                        s-15.422,6.906-15.422,15.422c0,37.461,20.67,70.167,51.189,87.37c-38.451,20.454-67.265,56.706-77.73,100.044H88.309
                        c-24.884,0-45.128-20.246-45.128-45.13v-57.464c0-8.516-6.906-15.422-15.422-15.422c-8.516,0-15.422,6.906-15.422,15.422v57.466
                        c0,41.891,34.082,75.973,75.972,75.973h13.577c-0.062,1.778-0.103,44.681-0.103,44.681H15.422C6.906,284.104,0,291.01,0,299.525
                        s6.906,15.422,15.422,15.422h86.361v22.361c0,6.807,0.449,13.512,1.308,20.088H88.309c-41.89,0-75.972,34.082-75.972,75.972
                        v57.467c0,8.516,6.906,15.422,15.422,15.422c8.516,0,15.422-6.906,15.422-15.422v-57.467c0-24.884,20.244-45.128,45.128-45.128
                        h22.129c21.085,60.083,78.368,103.285,145.564,103.285c67.195,0,124.479-43.202,145.564-103.285h22.129
                        c24.884,0,45.128,20.244,45.128,45.128v57.467c0,8.516,6.906,15.422,15.422,15.422s15.422-6.906,15.422-15.422v-57.467
                        c0-41.89-34.082-75.972-75.972-75.972h-14.782c0.859-6.577,1.308-13.281,1.308-20.088V314.947z M240.578,459.683
                        c-60.771-7.617-107.952-59.572-107.952-122.374c0,0,0.06-96.11,0.136-97.888h107.816V459.683z M138.055,208.577
                        c15.507-50.418,62.509-87.173,117.945-87.173s102.439,36.756,117.945,87.173H138.055z M271.422,459.683V239.421h107.816
                        c0.077,1.778,0.136,97.888,0.136,97.888C379.373,400.11,332.192,452.066,271.422,459.683z"/>
                </g>
            </g>
            </svg>

        </div>
    )
}