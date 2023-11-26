import './navbar.scss';
import { FaShoppingCart, FaSearch } from 'react-icons/fa';
import { MdArrowDropDown, MdMenu } from 'react-icons/md';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { useRef, useState } from 'react';

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
                        <img
                            src='https://m.media-amazon.com/images/G/01/gno/images/general/backup-logo_blue._CB481621655_.png'
                            alt='amazon'
                        />
                    </div>
                    {/* LOCATIONS */}
                    <div className='navbar__loc'>
                        <HiOutlineLocationMarker className='navbar__loc-icon' />
                        <div className='navbar__loc-text'>
                            <span>Deliver to</span>
                            <span className='loc'>Indonesia</span>
                        </div>
                    </div>
                </div>
                {/* SEARCH */}
                <div className='navbar__search'>
                    <form className={`navbar__form ${isFocus && 'outline'}`}>
                        <div
                            className={`${
                                isOpen && 'outline'
                            } navbar__select-wrapper`}
                            onClick={() => {
                                setIsOpen(true);
                            }}
                            onBlur={handleFocusBlur}
                        >
                            <div className='navbar__form-label'>
                                <span>{selectedOption}</span>
                                <MdArrowDropDown className='dropdownIcon' />
                            </div>
                            <select
                                className='navbar__form-select'
                                onChange={handleSelectChange}
                            >
                                <option value='All'>All</option>
                                <option value='Arts & Crafts'>
                                    Arts & Crafts
                                </option>
                                <option value='arts-crafts'>
                                    Beauty & Personal Care
                                </option>
                            </select>
                        </div>
                        <div className='navbar__input'>
                            <input
                                ref={inputRef}
                                className='navbar__form-input'
                                type='text'
                                placeholder='Search Amazon'
                                onFocus={handleFocusInput}
                                onBlur={handleFocusBlur}
                            />
                            <button
                                type='submit'
                                className='navbar__form-submit'
                            >
                                <FaSearch className='search-icon' />
                            </button>
                        </div>
                    </form>
                </div>
                {/* CHOOSE LANGUAGES */}
                <div className='navbar__right'>
                    <div className='navbar__lang'>
                        <div className='.navbar__lang-wrapper'>
                            <span>EN</span>
                            <MdArrowDropDown />
                        </div>
                        <div className='navbar__lang-hover'>
                            <div className='top'></div>
                            <div className='title'>
                                <h4>Choose language</h4>
                                <span>
                                    <a href=''>Learn more</a>
                                </span>
                            </div>
                            <div className='languages'>
                                <ul>
                                    <li>
                                        <input
                                            type='radio'
                                            name='en'
                                            id='en'
                                            value='English'
                                        />
                                        <label htmlFor='en'>English - EN</label>
                                    </li>
                                    <hr />
                                    <li>
                                        <input
                                            type='radio'
                                            name='es'
                                            id='es'
                                            value='Espanol'
                                        />
                                        <label htmlFor='es'>espanol - ES</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* SIGN IN/UP */}
                    <div className='navbar__sign'>
                        <div className='navbar__sign-wrapper'>
                            <span>Hello, sign in</span>
                            <span className='font-weight'>Account & Lists</span>
                        </div>
                        <MdArrowDropDown />
                        <div className='navbar__sign-hover'>
                            <div className='top'></div>
                            <button className='navbar__sign-in'>
                                <a href=''>Sign In</a>
                            </button>
                            <div className='navbar__sign-up'>
                                <p>New Customer</p>
                                <a href=''>Start here.</a>
                            </div>
                            <div className='navbar__lists'>
                                <div className='navbar__list'>
                                    <h1>Your Lists</h1>
                                    <ul>
                                        <li>
                                            <a href=''>Create a List</a>
                                        </li>
                                        <li>
                                            <a href=''>
                                                Find a List or Registry
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='navbar__account'>
                                    <h1>Your Account</h1>
                                    <ul>
                                        <li>
                                            <a href=''>Account</a>
                                        </li>
                                        <li>
                                            <a href=''>Orders</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* RETURNS & ORDERS */}
                    <div className='navbar__orders'>
                        <span>Returns </span>
                        <span className='font-weight'> & Orders</span>
                    </div>
                    {/* CART */}
                    <div className='navbar__cart'>
                        <FaShoppingCart className='cart-icon' />
                        <span className='cart-num'>0</span>
                        <span className='cart-text font-weight'>Cart</span>
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
