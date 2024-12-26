import React from 'react';

export const fetchProjects = async () => {
    try {
        const gitOwner = 'nicklparent';
        const gitFetch = await fetch(`https://api.github.com/users/${gitOwner}/repos?pre_page=100`);

        if (gitFetch.ok) {
            const repos = await gitFetch.json();
            return repos
            .filter(((repo: any) => repo.name !== gitOwner))
            .map((repo: any) => ({
                title: repo.name,
                bio: repo.description,
                imageRef: require(`../assets/images/${repo.name}.jpg`),
                gitRef: repo.html_url,
            }))
        } else {
            return [];
        }
        
    } catch (e){
        console.error(e);
        return [];
    }
}