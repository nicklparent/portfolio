import React, { useEffect, useState } from 'react';

export function Header(){
    let savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || 'dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'light');
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'dark': 'light');
    }
    return (
        <div className='flex bg-zinc-50 dark:bg-slate-900 justify-between p-3'>
            <div>
                <h1 className='text-black dark:text-white'>Nicholas Parent</h1>
            </div>
            <div className='flex flex-col justify-center'>
                <button onClick={toggleTheme} className=''>
                    
                </button>            
            </div>
        </div>
    )
}