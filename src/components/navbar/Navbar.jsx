import { useRef, useState } from 'react';
import Logo from './Logo';
import Location from './Location';
import Search from './Search';
import Language from './Language';
import AccountList from './AccountList';
import ReturnOrder from './ReturnOrder';
import Cart from './Cart';
import HorizontalMenu from './HorizontalMenu';
import './navbar.scss';

const Navbar = ({ isFocus, setIsFocus, setIsHovered }) => {
    const [selectedOption, setSelectedOption] = useState('All');
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenHmenu, setIsOpenHmenu] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const inputRef = useRef(null);

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        inputRef.current.focus();
    };

    const handleFocusInput = () => {
        setIsFocus(true);
    };

    const handleFocusBlur = () => {
        setIsFocus(false);
        setIsOpen(false);
    };

    const handleOpenHmenu = () => {
        setIsOpenHmenu(true);
        // setIsHovered(true);
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
                    <a href='' className='navbar__loc'>
                        <Location />
                    </a>
                </div>
                {/* SEARCH */}
                <div className='navbar__search'>
                    <Search
                        isFocus={isFocus}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                        handleFocusBlur={handleFocusBlur}
                        handleFocusInput={handleFocusInput}
                        handleSelectChange={handleSelectChange}
                        selectedOption={selectedOption}
                        inputRef={inputRef}
                    />
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
                        <Language />
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
                    {/* RETURNS & ORDERS */}
                    <a href='' className='navbar__returnOrder'>
                        <ReturnOrder />
                    </a>
                    {/* CART */}
                    <a href='' className='navbar__cart'>
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

export default Navbar;
