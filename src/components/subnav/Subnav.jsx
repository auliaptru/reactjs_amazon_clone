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
                    <a href='/renewed-deals'>Renewed Deals</a>
                </li>
                <li>
                    <a href='/outlet'>Outlet</a>
                </li>
                <li>
                    <a href='/digital-deals'>Digital Deals</a>
                </li>
                <li>
                    <a href=''>Amazon Warehouse</a>
                </li>
            </ul>
        </div>
    );
};

export default Subnav;
