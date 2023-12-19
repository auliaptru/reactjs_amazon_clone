import { useRef, useState } from 'react';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import './app.scss';
import SignIn from './pages/SignIn/SignIn';

const App = () => {
    const [isFocus, setIsFocus] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const appRef = useRef();

    return (
        <div className='app' ref={appRef}>
            <Navbar
                appRef={appRef}
                isFocus={isFocus}
                setIsFocus={setIsFocus}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
            />
            <div
                className={`${
                    isFocus || isHovered ? 'cover visible' : 'cover'
                }`}
            ></div>
            <Home />
            {/* <SignIn /> */}
        </div>
    );
};

export default App;
