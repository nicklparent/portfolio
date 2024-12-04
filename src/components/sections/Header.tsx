import React, { useEffect, useState } from 'react';
import { ToggleTheme } from '../ToggleTheme';

export function Header(){
    
    return (
        <div className=' flex flex-row justify-between align-middleq'>
            <h1  className='text-black dark:text-white p-4'>Nicholas Parent</h1>
            <div className='p-4'>
                <ToggleTheme />
            </div>
        </div>    
    )
}