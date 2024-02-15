import React, { useRef, useState } from 'react';
import Navbar from './components/navbar/Navbar';

const Layout = ({ children }) => {
    const [isFocus, setIsFocus] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const [isOpenHmenu, setIsOpenHmenu] = useState(false);

    const appRef = useRef();

    return (
        <div ref={appRef}>
            <Navbar
                appRef={appRef}
                isFocus={isFocus}
                setIsFocus={setIsFocus}
                isHovered={isHovered}
                setIsHovered={setIsHovered}
                isOpenHmenu={isOpenHmenu}
                setIsOpenHmenu={setIsOpenHmenu}
            />
            <div
                className={`${
                    isFocus || isHovered ? 'cover visible' : 'cover'
                }`}
            ></div>

            <main
                style={{
                    overflow: isOpenHmenu && 'hidden',
                    height: isOpenHmenu && 'calc(100vh - 99px)',
                }}
            >
                {children}
            </main>
        </div>
    );
};

export default Layout;
