import './globals.css';
import { Home } from './components/sections/Home';
import { Header } from './components/sections/Header';
function App(){
    return (
        <>
        <div className='dark:bg-light bg-dark'>
            <Header />
            <Home />
        </div>
        </>
    );
}
export default App;