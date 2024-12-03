import React, { useEffect, useState } from 'react';

export function Header(){
    let savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || 'dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
    })
    return (
        <div className='flex bg-zinc-50 justify-between'>
            <div>
                <h1 className="">Nicholas Parent</h1>
            </div>
            <div>

            </div>
        </div>
    )
}