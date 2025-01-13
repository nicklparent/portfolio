import React from 'react';
import '../../assets/css/typing.css';
import { Card } from '../Card';

export function Home(){
    return (
        <div className='sm:grid sm:grid-cols-4 h-4/6 flex flex-col w-screen'>
            <div className='col-span-3'>
                <p className='text-6xl  text-center lg:text-8xl/snug font-mono text-slate-300 dark:text-slate-800 italic p-3'>Nicholas <br /> Parent</p>
                <div id='type-container'>
                    <div id='type-intro' className='text-center text-white dark:text-black'>
                        Full Stack Developer & Aspiring Student
                    </div>
                </div>
                <div className='p-6'>
                    <p className='text-2xl font-serif'>
                    I am a second year BCS student studying at Dalhousie University,
                    I spend my free time trying to find any way against doom scrolling.
                    I am intersted in <span className='font-bold text-blue-500'>Full Stack</span> or <span className='font-bold text-blue-500'>Backend Development</span>.
                    I am currently looking for a <span className='font-bold text-blue-500'>summer 2025 Co-op</span>.
                    </p>
                </div>
            </div>
            <div className='col-span-1'>
                <Card />
            </div>
        </div>
    )
}