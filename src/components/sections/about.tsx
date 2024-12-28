import React, { useEffect, useState } from "react";
import { Star } from "../../assets/star";
import '../../assets/css/about.css'

export function About(){

    const pathLength = 750;
    const pathWidth = 50;
    const starSize = 50;
    const pathStart = 400;
    const pathEnd = pathStart + pathLength - starSize;
    
    const [roadPos, setRoadPos] = useState(0);
    
    const messages = [
        "I started my interest in computers in highschool, when I took my first computer science course in python, I immediatly knew i wanted to learn more.",
        "I continued to learn everything I could given by my highschool and followed into AP computer science. I ended up saving up to build my own PC and continued learning as hobby time.",
        "Now I have been studying at Dalhousie University to expand my skills in programming",
    ]
    const nonFocusMessage = "text-sm";
    const FocusMessage = "dark:text-neutral-800 text-neutral-200 font-sans text-xl";
    const [messageId, setMessage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {            
            if (window.scrollY > pathStart && window.scrollY < pathEnd + starSize){
                setRoadPos((window.scrollY - pathStart) * 1.4);
            } else if (window.scrollY < pathStart){
                setRoadPos(0);
            } else {
                setRoadPos(pathEnd - starSize);
            }
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleMessageScroll = () => {
            if (window.scrollY >= pathStart && window.scrollY < pathEnd) {
                setMessage(Math.floor((window.scrollY - pathStart - starSize) / 280));
            }
            
        };

        window.addEventListener('scroll', handleMessageScroll);
        return () => window.removeEventListener('scroll', handleMessageScroll);
    }, [])
    return(
        
        <div className="flex justify-evenly bg-gradient-to-b from-dark to-darkStart dark:from-light dark:to-lightEnd pb-3">
            {/* Star Path */}
            <div className="relative">
                <svg height={pathLength}>
                    <rect height={pathLength} width={pathWidth} fill="purple" ry={10} className="shadow shadow-light dark:hidden block" style={{animation: 'glowDark 3s infinite'}}/>
                    <rect height={pathLength} width={pathWidth} fill="blue" ry={10} className="shadow shadow-light hidden dark:block" style={{animation: 'glowLight 3s infinite'}}/>
                </svg>
                <div className="absolute" style={{top: `${roadPos / 1.5}px`, left: '0'}}>
                    <Star />
                </div>
            </div>
            {/* Text content */}
            <div className="*:max-w-xl *:my-10 font-mono text-xl flex flex-col justify-around" id="messages">   
                {messages.map((curr, index) => (
                    <React.Fragment key={index}>
                        <p className={index === messageId ? FocusMessage : nonFocusMessage}>{curr}</p>
                        <br />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}