import { useEffect, useState } from 'react';
import './registrySubnav.scss';

const RegistrySubnav = () => {
    const [isSticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 150) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener('scroll', handleScroll);

        return () => window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`registry__subnav-wrapper ${isSticky && 'sticky'}`}>
            <a href='#' className='registry__subnav-logo'>
                registry & gifting
            </a>
            <div className='registry__subnav-group'>
                <div className='subnav__item submenu'>
                    <a href='#'>
                        <span>Find a registry or gift list</span>
                        <i className='arrow'></i>
                    </a>
                    <div className='subnav__hover'>
                        <div className='subnav__item'>
                            <a href='#'>Wedding Registry</a>
                        </div>
                        <div className='subnav__item'>
                            <a href='#'>Baby Registry</a>
                        </div>
                        <div className='subnav__item'>
                            <a href='#'>Gift List</a>
                        </div>
                    </div>
                </div>
                <div className='subnav__item'>
                    <a href='#'>
                        <span>Create a registry or gift list</span>
                    </a>
                </div>
                <div className='subnav__item'>
                    <a href='#'>
                        <span>Help</span>
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default RegistrySubnav;
