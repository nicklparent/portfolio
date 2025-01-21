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
        
        <div className='flex flex-1 flex-col align-middle justify-center p-6 bg-darkStart dark:bg-lightEnd font-mono'>
            {projectList.map((project, index) => (
                <div key={index} className='flex flex-col lg:flex-row m-2 size-1/2 justify-center h-80 overflow-hidden border-light dark:border-dark border rounded-xl p-2'>
                    <div className='flex-row justify-center align-middle border-b md:border-r lg:border-b-0 p-2'>
                        <h3 className='text-center '>{project.title}</h3>
                        <img src={project.imageRef} 
                            alt={project.imageRef}
                            className='p-2 self-center' style={{maxHeight: '70%'}}/>
                        <a href={project.gitRef} className='flex flex-1 flex-row *:mx-1 justify-center bg-darkStart dark:bg-lightEnd'><GitLogo /><br />View Source Code!</a>
                    </div>
                    <p className='p-3' style={{maxHeight: '40%'}}>{project.bio}</p>
                </div>
            ))}
        </div>
    )
}