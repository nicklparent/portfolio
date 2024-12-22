import React from 'react';
import '../../assets/css/typing.css';

export function Home(){
    return (
        <div style={{maxWidth: '70%'}}>
            <p className='text-8xl/snug font-mono text-slate-300 dark:text-slate-800 italic p-3 !pl-10'>Nicholas <br /> Parent</p>
            <div id='type-container'>
                <div id='type-intro' className='text-2xl text-white dark:text-black'>
                    Full Stack Developer & Aspiring Student
                </div>
            </div>
            <div className='p-6'>
                <p className='text-3xl font-serif'>
                I am a second year BCS student studying at Dalhousie University,
                I spend my free time trying to find any way against doom scrolling.
                I am intersted in <span className='font-bold text-blue-500'>Full Stack</span> or <span className='font-bold text-blue-500'>Backend Development</span>.
                I am currently looking for a <span className='font-bold text-blue-500'>summer 2025 Co-op</span>.
                </p>
            </div>
        </div>
    )
}