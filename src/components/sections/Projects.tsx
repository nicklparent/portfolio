import React, { useEffect, useState } from "react";
import { fetchProjects } from "../../assets/GitHubPuller";
import { GitLogo } from "../../assets/Gitlogo";

export interface Project {
  title: string;
  bio: string;
  imageRef: string;
  gitRef: string;
}

export function Projects() {
  const [projectList, setProjectList] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      setProjectList(await fetchProjects());
    };
    loadProjects();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-darkStart dark:bg-lightEnd font-mono">
      {projectList.map((project, index) => (
        <div
          key={index}
          className="flex flex-col lg:flex-row w-full max-w-4xl border rounded-xl border-light dark:border-dark overflow-hidden shadow-lg m-4"
        >
          <div className="flex flex-col items-center p-4 border-b lg:border-b-0 lg:border-r border-light dark:border-dark w-full lg:w-1/3">
            <h3 className="text-lg font-semibold mb-2 text-center">{project.title}</h3>
            <img
              src={project.imageRef}
              alt={project.title}
              className="w-full h-auto object-cover rounded-md max-w-full"
            />
            <a
              href={project.gitRef}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 mt-3 px-4 py-2 bg-darkStart dark:bg-lightEnd text-white rounded-md hover:bg-opacity-80 transition"
            >
              <GitLogo />
              View Source Code
            </a>
          </div>

          <div className="flex-1 p-4">
            <p className="text-md leading-relaxed text-blue-100">{project.bio}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
