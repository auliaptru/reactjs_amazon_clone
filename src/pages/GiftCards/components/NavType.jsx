import { useState } from 'react';

const NavType = () => {
    const [selected, setSelected] = useState('gc');

    return (
        <div className='nav__type'>
            <nav>
                <img
                    src='https://m.media-amazon.com/images/G/01/GiftCards/GCLP/LOGO_GC_space.png'
                    alt=''
                />
                <ul>
                    <li>
                        <a href=''>Amazon Gift Cards</a>
                    </li>
                    <li>
                        <a href=''>Amazon Gift Cards</a>
                    </li>
                    <li>
                        <a href=''>Amazon Gift Cards</a>
                    </li>
                    <li>
                        <a href=''>Amazon Gift Cards</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavType;
