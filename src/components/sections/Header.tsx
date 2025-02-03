import React, { useRef } from 'react';
import { ToggleTheme } from '../ToggleTheme';

export function Header(){
    return (
        <div className='flex flex-row justify-center align-middle dark:bg-light bg-dark'>
            <div className="hidden md:flex flex-row justify-between flex-1 *:p-4 pr-2">
                <a href='./#home'>Home</a>
                <a href='./#about'>About</a>
                <a href='./#projects'>Projects</a>
                <a href='./#contactMe'>Contact Me</a>
            </div>
            <div className='p-4'>
                <ToggleTheme />
            </div>
        </div>    
    );
}