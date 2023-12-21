import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Logo from './Logo';
import Location from './Location';
import Search from './Search';
import Language from './Language';
import AccountList from './AccountList';
import ReturnOrder from './ReturnOrder';
import Cart from './Cart';
import HorizontalMenu from './HorizontalMenu';
import './navbar.scss';
import SignIn from './SignIn';

const Navbar = ({ isFocus, setIsFocus, setIsHovered }) => {
    const [isOpenHmenu, setIsOpenHmenu] = useState(false);
    const [isShowSignin, setIsShowSignin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let delayTimer;
        delayTimer = setTimeout(() => {
            setIsShowSignin(true);
        }, 1000);
        delayTimer = setTimeout(() => {
            setIsShowSignin(false);
        }, 10000);
        return () => {
            setIsShowSignin(false);
            clearTimeout(delayTimer);
        };
    }, []);

    const handleMouseEnter = () => {
        setIsHovered(true);
        setIsShowSignin(false);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const handleOpenHmenu = () => {
        setIsOpenHmenu(true);
    };

    return (
        <nav className='navbar'>
            <div className='navbar__top'>
                <div className='navbar__top-left'>
                    {/* LOGO */}
                    <a href='' className='navbar__logo'>
                        <Logo />
                    </a>
                    {/* LOCATIONS */}
                    <div href='' className='navbar__loc'>
                        <Location />
                    </div>
                </div>
                {/* SEARCH */}
                <div className='navbar__search'>
                    <Search isFocus={isFocus} setIsFocus={setIsFocus} />
                </div>
                {/* CHOOSE LANGUAGES */}
                <div className='navbar__right'>
                    <a
                        className='navbar__lang'
                        aria-label='Choose a language for shopping'
                        href=''
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Language isLoading={isLoading} />
                    </a>
                    {/* ACCOUNT & LIST */}
                    <a
                        href=''
                        className='navbar__accountList'
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <AccountList />
                    </a>
                    <div
                        className={`signIn__container ${
                            isShowSignin && 'show'
                        }`}
                    >
                        <SignIn />
                    </div>
                    {/* RETURNS & ORDERS */}
                    <a href='' className='navbar__returnOrder'>
                        <ReturnOrder />
                    </a>
                    {/* CART */}
                    <a href='/cart' className='navbar__cart'>
                        <Cart />
                    </a>
                </div>
            </div>

            {/* MAIN MENU */}
            <div className='navbar__main'>
                <div className='navbar__allMenu' onClick={handleOpenHmenu}>
                    <div className='nav__sprite allMenu__icon'></div>
                    <span className='allMenu__label'>All</span>
                </div>
                <ul className='navbar__links'>
                    <li>
                        <a href=''>Today&apos;s Deals</a>
                    </li>
                    <li>
                        <a href=''>Customer Service</a>
                    </li>
                    <li>
                        <a href=''>Registry</a>
                    </li>
                    <li>
                        <a href=''>Gift Cards</a>
                    </li>
                    <li>
                        <a href=''>Sell</a>
                    </li>
                </ul>
            </div>

            {/* SUBNAV MENU */}
            <div className='navbar__subnav'>
                <ul className='navbar__subnav-container'>
                    <li>
                        <a href='' className='nav__selected'>
                            Today&apos;s Deals
                        </a>
                    </li>
                    <li>
                        <a href=''>Coupons</a>
                    </li>
                    <li>
                        <a href=''>Renewed Deals</a>
                    </li>
                    <li>
                        <a href=''>Outlet</a>
                    </li>
                    <li>
                        <a href=''>Digital Deals</a>
                    </li>
                    <li>
                        <a href=''>Amazon Warehouse</a>
                    </li>
                </ul>
            </div>

            <div className='navbar__menu'>
                <HorizontalMenu
                    setIsOpenHmenu={setIsOpenHmenu}
                    isOpenHmenu={isOpenHmenu}
                />
            </div>
        </nav>
    );
};

Navbar.propTypes = {
    isFocus: PropTypes.bool,
    isHovered: PropTypes.bool,
    setIsHovered: PropTypes.func,
    setIsFocus: PropTypes.func,
};

export default Navbar;
