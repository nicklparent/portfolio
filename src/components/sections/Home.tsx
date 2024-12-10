import React, { useEffect, useState } from 'react';
import '../../css/typing.css';

export function Home(){

    const [intro, setIntro] = useState('');
    useEffect(() => {
        fetch("/assets/intro.txt")
        .then(res => res.text())
        .then(data => setIntro(data))
        .catch(err => console.error(err));
    }, []);

    return (
        <>
            <p className='text-9xl font-mono text-neutral-600/50 italic p-4 !pl-10'>Nicholas <br /> Parent</p>
            <div id='type-container'>
                <div id='type-intro' className='text-2xl text-white dark:text-black'>
                    Full Stack Developer & Aspiring Student
                </div>
            </div>
            <div className='p-6'>
                <p>{intro}</p>
            </div>
        </>
    )
}