import React, { useEffect, useState } from "react";
import { Star } from "../../assets/star";
import '../../assets/css/glow.css'

export function About(){

    const pathLength = 800;
    const pathWidth = 50;
    const starSize = 50;
    const pathStart = 400;
    const pathEnd = pathLength * 2 - starSize;

    const [roadPos, setRoadPos] = useState(0);
    
    useEffect(() => {
        const handleScroll = () => {
            setRoadPos(window.scrollY);
            
            if (window.scrollY > pathStart && window.scrollY < pathEnd){
                setRoadPos(window.scrollY - pathStart);
            } else if (window.scrollY < pathStart){
                setRoadPos(0);
            } else {
                setRoadPos(pathStart + starSize);
            }
        }

        window.addEventListener('scroll', handleScroll);
    }, []);

    return(
        <div className="flex justify-evenly bg-gradient-to-b from-dark to-darkStart dark:from-light dark:to-lightEnd ">
            {/* Star Path */}
            <div className="relative">
                <svg height={pathLength}>
                    <rect height={pathLength} width={pathWidth} fill="purple" ry={10} className="shadow shadow-light dark:hidden block" style={{animation: 'glowDark 3s infinite'}}/>
                    <rect height={pathLength} width={pathWidth} fill="blue" ry={10} className="shadow shadow-light hidden dark:block" />
                </svg>
                <div className="absolute" style={{top: `${roadPos}px`, left: '0'}}>
                    <Star />
                </div>
            </div>
            {/* Text content */}
            <div className="*:max-w-xl *:my-10 font-mono text-xl">   
                <p>I started my interest in computers in highschool, when I took my first computer science course in python,
                    I immediatly knew i wanted to learn more.
                </p>
                <br />
                <p>I continued to learn everything I could given by my highschool and followed into AP computer science.
                I ended up saving up to build my own PC and continued learning as hobby time.
                </p>
                <br />
                <p >Now I have been studying at Dalhousie University to expand my skills in programming</p>
                <br />
            </div>
        </div>
    );
}