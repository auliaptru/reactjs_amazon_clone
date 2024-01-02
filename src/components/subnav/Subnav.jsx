import React from 'react';
import './subnav.scss';

const Subnav = () => {
    return (
        <div className='subnav'>
            <ul>
                <li>
                    <a href='/gp' className='subnav__selected'>
                        Today&apos;s Deals
                    </a>
                </li>
                <li>
                    <a href='/coupons'>Coupons</a>
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
    );
};

export default Subnav;
