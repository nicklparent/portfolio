import './globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/sections/Home';
import { Header } from './components/sections/Header';
import { About } from './components/sections/About'; 
import { Projects } from './components/sections/Projects';
import { Resume } from './components/sections/resume/Resume';

export function App() {
    return (
        <Router>
            <div className='dark:bg-light bg-dark'>
                <div className='flex flex-col'>
                    <div className='sticky top-0 z-50'>
                        <Header />
                    </div>
                    <Routes>
                        <Route path="/" element={
                            <div>
                                <div id='home' className='flex flex-row'>
                                    <Home />
                                </div>
                                <div id='about' className='mt-4'>
                                    <About />
                                </div>
                                <div id="projects">
                                    <Projects />
                                </div>
                            </div>
                        } />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
