import { useRef, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import './app.scss';

const App = () => {
    const [isFocus, setIsFocus] = useState(false);

    const appRef = useRef();

    return (
        <div className='app' ref={appRef}>
            <Navbar appRef={appRef} isFocus={isFocus} setIsFocus={setIsFocus} />
            <div className={`${isFocus ? 'cover visible' : 'cover'}`}></div>
            <Home />
        </div>
    );
};

export default App;
