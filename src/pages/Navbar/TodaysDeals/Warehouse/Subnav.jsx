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
                    <a href='/today-deals/coupons'>Coupons</a>
                </li>
                <li>
                    <a href='/today-deals/renewed'>Renewed Deals</a>
                </li>
                <li>
                    <a href='/today-deals/outlet'>Outlet</a>
                </li>
                <li>
                    <a href='/today-deals/warehouse'>Amazon Warehouse</a>
                </li>
                <li>
                    <a href='/today-deals/digital'>Digital Deals</a>
                </li>
                <li>
                    <a
                        href='https://www.woot.com/?_encoding=UTF8&ref_=sv_gb_6'
                        target='_blank'
                        rel='noreferrer'
                    >
                        Woot! Deals
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Subnav;
