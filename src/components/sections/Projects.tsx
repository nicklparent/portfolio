import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../../assets/GitHubPuller';
import { GitLogo } from '../../assets/Gitlogo';

export interface Project{
    title: string;
    bio: string;
    imageRef: string;
    gitRef: string;
}

export function Projects(){
    const [projectList, setProjectList] = useState<Project[]>([]);

    useEffect(() => {
        const loadProjects = async () => {
            setProjectList(await fetchProjects());
        }
        loadProjects();
    }, [])

    return (
        
        <div className='flex flex-row align-middle justify-around p-6 overflow-hidden bg-darkStart dark:bg-lightEnd font-mono'>
            {projectList.map((project, index) => (
                <div key={index} className='flex flex-col justify-center size-1/5 h-80 overflow-hidden border-light dark:border-dark border rounded-xl p-2'>
                    <h3 className='text-center border-b p-2'>{project.title}</h3>
                    <img src={project.imageRef} 
                        alt={project.imageRef}
                        className='size-2/3 p-2' />
                    <p className='p-3' style={{maxHeight: '30%'}}>{project.bio}</p>
                    <a href={project.gitRef} className='flex flex-1 flex-row *:m-1 justify-center bg-darkStart dark:bg-lightEnd'><GitLogo /><br />View Source Code!</a>
                </div>
            ))}
        </div>
    )
}