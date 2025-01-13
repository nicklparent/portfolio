import React from 'react';
import './globals.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './components/sections/Home';
import { Header } from './components/sections/Header';
import { About } from './components/sections/About'; 
import { Projects } from './components/sections/Projects';
import { ContactMe } from './components/sections/ContactMe';

export function App() {
    return (
    <>
        <Router>
            <div className='dark:bg-light bg-dark'>
                <div className='flex flex-col'>
                    <Routes>
                        <Route path="/portfolio" element={
                            <div>
                                <div className='sticky sm:relative top-0 z-50' id='header'>
                                    <Header />
                                </div>
                                <div id='home' className='flex flex-row'>
                                    <Home />
                                </div>
                                <div id='about' className='mt-4'>
                                    <About />
                                </div>
                                <div id="projects">
                                    <Projects />
                                </div>
                                <div id='contactMe'>
                                    <ContactMe />
                                </div>
                            </div>
                        } />
                    </Routes>
                </div>
            </div>
        </Router>
    </>
    );
}

export default App;
