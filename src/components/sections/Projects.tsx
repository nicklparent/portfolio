import React, { useEffect, useState } from 'react';

export function Projects({ projects = [] }){
    const [projectScroll, setProjectScroll] = useState(0);

    const scrollForward = () => {
        setProjectScroll((prevIndex) => prevIndex + 1 % projects.length);
        
    }

    const scrollBackward = () => {
        setProjectScroll((prevIndex) => prevIndex - 1 % projects.length);
    }
    return (
        <div className='flex flex-row align-middle'>
            {projects.map((project, index) => (
                <div>
                    
                </div>
            ))}
        </div>
    )
}