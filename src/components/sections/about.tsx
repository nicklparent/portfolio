import React, { useEffect, useState } from "react";
import { Star } from "../../assets/star";
import '../../assets/css/about.css';

export function About() {
    const pathLength = 850;
    const pathWidth = 50;
    const starSize = 50;
    const pathStart = 400;
    const pathEnd = pathStart + pathLength - starSize;
    
    const [roadPos, setRoadPos] = useState(0);
    
    const messages = [
        "I started my interest in computers in high school, when I took my first computer science course in Python. I immediately knew I wanted to learn more.",
        "I continued to learn everything I could given by my high school and followed into AP Computer Science. I ended up saving up to build my own PC and continued learning as a hobby.",
        "Now I have been studying at Dalhousie University to expand my skills in programming.",
        "My current focus has been committed to working on mobile apps on both frontend and backend. I am building a tabletop character tracker and manager, as well as working with a non-profit company to build tools for lifeguards.",
    ];
    const nonFocusMessage = "text-sm";
    const FocusMessage = "dark:text-neutral-800 text-neutral-200 font-sans text-xl";
    const [messageId, setMessage] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            // Update star position
            if (scrollY > pathStart && scrollY < pathEnd) {
                setRoadPos((scrollY - pathStart) * 1.4);
            } else if (scrollY < pathStart) {
                setRoadPos(0);
            } else {
                setRoadPos(pathEnd);
            }

            // Update message highlighting
            if (scrollY >= pathStart && scrollY < pathEnd) {
                const newMessageId = Math.floor((scrollY - pathStart) / (pathLength / messages.length));
                setMessage(newMessageId);
            } else if (scrollY >= pathEnd) {
                setMessage(messages.length - 1); // Highlight the last message
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [messages.length, pathEnd, pathStart, pathLength]);

    return (
        <div className="flex bg-gradient-to-b from-dark to-darkStart dark:from-light dark:to-lightEnd pb-3">
            {/* Star Path */}
            <div className="relative *:px-8 hidden md:block">
                <svg height={pathLength} width={pathWidth * 3}>
                    <rect height={pathLength} width={pathWidth} fill="purple" ry={10} className="shadow shadow-light dark:hidden block" style={{animation: 'glowDark 3s infinite'}}/>
                    <rect height={pathLength} width={pathWidth} fill="blue" ry={10} className="shadow shadow-light hidden dark:block" style={{animation: 'glowLight 3s infinite'}}/>
                </svg>
                <div className="absolute" style={{top: `${roadPos / 1.5}px`, left: '0'}}>
                    <Star />
                </div>
            </div>
            {/* Text content */}
            <div className="*:my-10 flex-1 font-mono text-xl flex flex-col justify-around px-4" id="messages">   
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