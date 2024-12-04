import React, { useEffect, useState } from 'react';

export function ToggleTheme(){
    let savedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(savedTheme || 'dark');

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark');
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }

    return (
        <button aria-label='Toggle-Theme'>
            <div>
                <label className="group relative inline-flex cursor-pointer flex-col items-center">
                <input 
                    className="peer sr-only"
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    />
                    <div className="relative h-12 w-24 rounded-xl bg-gray-900/90 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.7)] transition-all duration-300 before:absolute before:left-1 before:top-1 before:h-10 before:w-10 before:rounded-lg before:bg-gradient-to-br before:from-gray-700/90 before:to-gray-800/90 before:transition-all before:duration-300 peer-checked:before:translate-x-12 peer-checked:before:bg-gradient-to-br peer-checked:before:from-emerald-500 peer-checked:before:to-green-600 peer-checked:shadow-[0_0_20px_rgba(16,185,129,0.7)]">
                        <span className="absolute inset-0 rounded-xl ring-1 ring-emerald-500/0 transition-all duration-300 peer-checked:ring-2 peer-checked:ring-emerald-500/50" />
                        <span className="absolute left-2 top-2 h-1 w-1 rounded-full bg-emerald-500/30" />
                        <span className="absolute left-4 top-2 h-1 w-3 rounded-full bg-emerald-500/30" />
                        <span className="absolute right-2 bottom-2 h-1 w-1 rounded-full bg-emerald-500/30 peer-checked:animate-ping" />
                    </div>
                </label>

            </div>
        </button>    
    );
}