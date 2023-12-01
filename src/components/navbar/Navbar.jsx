import './navbar.scss';
import { FaShoppingCart } from 'react-icons/fa';
import { MdArrowDropDown, MdMenu } from 'react-icons/md';
import { useRef, useState } from 'react';
import Logo from './Logo';
import Location from './Location';
import Search from './Search';
import Language from './Language';
import AccountList from './AccountList';
import ReturnOrder from './ReturnOrder';
import Cart from './Cart';

const Navbar = ({ isFocus, setIsFocus }) => {
    const [selectedOption, setSelectedOption] = useState('All');
    const [isOpen, setIsOpen] = useState(false);

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
    return (
        <nav className='navbar'>
            <div className='navbar__top'>
                <div className='navbar__top-left'>
                    {/* LOGO */}
                    <div className='navbar__logo'>
                        <Logo />
                    </div>
                    {/* LOCATIONS */}
                    <div className='navbar__loc'>
                        <Location />
                    </div>
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
                    <div className='navbar__lang'>
                        <Language />
                    </div>
                    {/* SIGN IN/UP */}
                    <a href='' className='navbar__accountList'>
                        <AccountList />
                    </a>
                    {/* RETURNS & ORDERS */}
                    <div className='navbar__returnOrder'>
                        <ReturnOrder />
                    </div>
                    {/* CART */}
                    <div className='navbar__cart'>
                        <Cart />
                    </div>
                </div>
            </div>

            {/* MENU BOTTOM */}
            <div className='navbar__bottom'>
                <div className='navbar__menu'>
                    <MdMenu className='menu-icon' />
                    <span>All</span>
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
        </nav>
    );
};

export default Navbar;
