import './navSell2.scss';

const NavSell2 = () => {
    return (
        <nav className='sell__top'>
            <div className='sell__nav-wrapper'>
                <h1>Your brand + Amazon</h1>
                <div className='sell__nav-lists'>
                    <ul className='sell__nav-list'>
                        <li>
                            <button>Your business at scale</button>
                        </li>
                    </ul>
                    <ul className='sell__nav-list'>
                        <li>
                            <button>Your brand experienced</button>
                        </li>
                    </ul>
                    <ul className='sell__nav-list'>
                        <li>
                            <button>Your success supported</button>
                        </li>
                    </ul>
                    <ul className='sell__nav-list'>
                        <li>
                            <button>Case studies</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavSell2;
