import './globals.css';
import { Home } from './components/sections/Home';
import { Header } from './components/sections/Header';
import { Card } from './components/Card';
function App(){
    return (
        <>
        <div className='dark:bg-light bg-dark'>
            <Header />
            <div className='flex flex-row'>
                <div className='flex flex-row'>
                    <Home />
                    <Card />
                </div>
            </div>
        </div>
        </>
    );
}
export default App;