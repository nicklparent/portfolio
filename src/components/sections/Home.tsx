import React, { useEffect, useState } from 'react';
import '../../css/typing.css';

export function Home(){
    return (
        <>
        <div>
            <p className='text-9xl font-mono text-slate-300 dark:text-slate-800 italic p-4 !pl-10'>Nicholas <br /> Parent</p>
            <div id='type-container'>
                <div id='type-intro' className='text-2xl text-white dark:text-black'>
                    Full Stack Developer & Aspiring Student
                </div>
            </div>
            <div className='p-6'>
                <p className='text-3xl font-serif'>
                I am a second year BCS student studying at Dalhousie University,
                I spend my free time trying to find any way against doom scrolling.
                I am intersted in <span className='font-bold text-blue-500'>Full Stack</span> or <span className='font-bold text-blue-500'>Backend Development</span>
                </p>
            </div>
        </div>
        </>
    )
}