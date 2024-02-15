import './navSell2.scss';

const NavSell2 = () => {
    return (
        <div className='sell__top'>
            <nav className='sell__nav-wrapper'>
                <a href='#top'>
                    <h1>Your brand + Amazon</h1>
                </a>
                <ul className='sell__nav-lists'>
                    <li>
                        <button className='button1'>
                            Your business at scale
                        </button>
                    </li>
                    <li>
                        <button className='button2'>
                            Your brand experienced
                        </button>
                    </li>
                    <li>
                        <button className='button3'>
                            Your success supported
                        </button>
                    </li>
                    <li>
                        <button className='button4'>Case studies</button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavSell2;
