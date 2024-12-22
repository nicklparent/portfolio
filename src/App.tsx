import './globals.css';
import { Home } from './components/sections/Home';
import { Header } from './components/sections/Header';
import { Card } from './components/Card';
import { About } from './components/sections/About'; 
import { Projects } from './components/sections/Projects';
export function App(){
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
                    <Card />
                </div>
                <div id='about' className='mt-4'>
                    <About />
                </div>
                <div id="projects">
                    <Projects />
                </div>
            </div>
        </div>
        </>
    );
}
export default App;