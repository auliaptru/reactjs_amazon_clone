import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { MdArrowDropDown } from 'react-icons/md';
import SignIn from './SignIn';
import './accountList.scss';

const lists = [
    'Account',
    'Orders',
    'Recommendations',
    'Browsing History',
    'Watchlist',
    'Video Purchases & Rentals',
    'Kindle Unlimited',
    'Content & Devices',
    'Subscribe & Save Items',
    'Memberships & Subscriptions',
];

const AccountList = ({  isShowSignin, setIsShowSignin }) => {
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

    return (
        <div className='accountList__container'>
            <div className='accountList__display'>
                <span>Hello, sign in</span>
                <span className='font-weight'>Account & Lists</span>
            </div>
            <div className='nav__icon'>
                <MdArrowDropDown className='arrow-down' />
            </div>

            <div className='accountList__hover'>
                <div className='top'></div>
                <button className='navbar__sign-in'>
                    <a href=''>Sign In</a>
                </button>
                <div className='navbar__sign-up'>
                    <p>New Customer</p>
                    <a href=''>Start here.</a>
                </div>
                <div className='line'></div>
                <div className='navbar__lists'>
                    <div className='navbar__list'>
                        <h1>Your Lists</h1>
                        <ul>
                            <li>
                                <a href=''>Create a List</a>
                            </li>
                            <li>
                                <a href=''>Find a List or Registry</a>
                            </li>
                        </ul>
                    </div>
                    <div className='navbar__account'>
                        <h1>Your Account</h1>
                        <ul>
                            {lists.map((list, i) => (
                                <li key={i}>
                                    <a href=''>{list}</a>
                                </li>
                            ))}
                            <li>
                                <a href=''>Orders</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={`signIn__container ${isShowSignin && 'show'}`}>
                <SignIn />
            </div>
        </div>
    );
};

AccountList.propTypes = {
    isShowSignin: PropTypes.bool,
    setIsShowSignin: PropTypes.func,
};
export default AccountList;
