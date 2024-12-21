import './globals.css';
import { Home } from './components/sections/Home';
import { Header } from './components/sections/Header';
import { Card } from './components/Card';
import { About } from './components/sections/About'; 
function App(){
    return (
        <>
        <div className='dark:bg-light bg-dark'>
            <div className='sticky top-0 z-50'>
                <Header />
            </div>
            {/* landing zone */}
            <div className='flex flex-col'>
                <div id='home' className='flex flex-row'>
                    <Home />    
                    <Card />
                </div>
                <div id='about' className='mt-4'>
                    <About />

                </div>
            </div>
        </div>
        </>
    );
}
export default App;