import React, { useEffect, useState } from 'react';
import { ToggleTheme } from '../ToggleTheme';

export function Header(){
    
    return (
        <div className=' flex flex-row justify-between align-middle'>
            <div className="flex flex-row gap-3 *:p-6">
                <p>Home</p>
                <p>About</p>
                <p>Projects</p>
                <p>Resume</p>
            </div>
            <div className='p-4'>
                <ToggleTheme />
            </div>
        </div>    
    );
}