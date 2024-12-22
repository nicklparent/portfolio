import './globals.css';
import { Home } from './components/sections/Home';
import { Header } from './components/sections/Header';
import { Card } from './components/Card';
import { About } from './components/sections/About'; 
import { Projects, Project } from './components/sections/Projects';
export function App(){

    const projectList: Project[] = [
        {title: 'This Portfolio', bio: 'Home for all my skills, interests, projects, etc. to be stored', imageRef: '', gitRef: ''}
    ];
    return (
        <>
        <div className='dark:bg-light bg-dark'>
            {/* landing zone */}
            <div className='flex flex-col'>
                <div className='sticky top-0 z-50'>
                    <Header />
                </div>
                <div id='home' className='flex flex-row'>
                    <Home />    
                </div>
                <div id='about' className='mt-4'>
                    <About />
                </div>
                <div id="projects">
                    <Projects projects={projectList} />
                </div>
            </div>
        </div>
        </>
    );
}
export default App;