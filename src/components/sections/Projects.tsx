import React, { useEffect, useState } from 'react';

export interface Project{
    title: string;
    bio: string;
    imageRef: string;
    gitRef: string;
}

export function Projects({ projects = [] }: {projects: Project[]}){
    const [projectScroll, setProjectScroll] = useState(0);

    const scrollForward = () => {
        setProjectScroll((prevIndex) => prevIndex + 1 % projects.length);
        
    }

    const scrollBackward = () => {
        setProjectScroll((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
    }
    return (
        <div className='flex flex-row align-middle'>
            {projects.map((project, index) => (
                <div className='flex rounded-lg border-2' key={index}>
                    <h3>{project.title}</h3>
                </div>
            ))}
        </div>
    )
}