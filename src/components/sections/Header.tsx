import React, { useRef } from 'react';

import { ToggleTheme } from '../ToggleTheme';

export function Header(){
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element){
            const headerHeight = document.getElementById("header")?.clientHeight || 0;
            window.scrollTo({
                top: element.offsetTop - headerHeight,
                behavior: 'smooth',
            })
        }
    }
    return (
        <div className='flex flex-row justify-between align-middle dark:bg-light bg-dark'>
            <div className="flex flex-row gap-3 *:p-6 ">
                <a href='/#home'>Home</a>
                <a href='/#about'>About</a>
                <a href='/#projects'>Projects</a>
                <a href='/resume'>Resume</a>
            </div>
            <div className='p-4'>
                <ToggleTheme />
            </div>
        </div>    
    );
}