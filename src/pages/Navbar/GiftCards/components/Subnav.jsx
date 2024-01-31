import NavFlyout from './NavFlyout';
import {
    giftCardsMenu,
    byOccasion,
    byBrand,
} from '../../../../utils/GiftCards';
import './subnav.scss';

const Subnav = () => {
    const arrowStyle = {
        left: '256px',
    };
    const arrowStyle2 = {
        left: '723px',
    };
    return (
        <div className='subnav__giftcards'>
            <ul className='subnav__wrapper'>
                <li className='subnav__item subnav1 hover'>
                    <a href='/gp' className='subnav__selected'>
                        <span>Gift Cards</span>
                        <div className='nav__arrow'></div>
                    </a>
                    <div className='giftcards__submenu'>
                        <NavFlyout data={giftCardsMenu} />
                    </div>
                </li>

                <li className='subnav__item'>
                    <a href='/coupons'>Best Sellers</a>
                </li>

                <li className='subnav__item hover subnav2'>
                    <a href='/renewed-deals'>
                        <span>By occasion</span>
                        <div className='nav__arrow'></div>
                    </a>
                    <div className='giftcards__submenu'>
                        <NavFlyout data={byOccasion} arrowStyle={arrowStyle} />
                    </div>
                </li>

                <li className='subnav__item'>
                    <a href='/outlet'>Redeem Gift Cards</a>
                </li>
                <li className='subnav__item'>
                    <a href='/digital-deals'>View Your Balance</a>
                </li>
                <li className='subnav__item'>
                    <a href='/warehouse'>Reload Your Balance</a>
                </li>
                <li className='subnav__item subnav3 hover'>
                    <a href='/warehouse'>
                        <span>By Brand</span>
                        <div className='nav__arrow'></div>
                    </a>
                    <div className='giftcards__submenu'>
                        <NavFlyout data={byBrand} arrowStyle={arrowStyle2} />
                    </div>
                </li>
                <li className='subnav__item'>
                    <a href='/warehouse'>Amazon Cash</a>
                </li>
                <li className='subnav__item'>
                    <a href='/warehouse'>For Businesses</a>
                </li>
                <li className='subnav__item'>
                    <a href='/warehouse'>Be Informed</a>
                </li>
                <li className='subnav__item'>
                    <a href='/warehouse'>Find a Gift</a>
                </li>
                <li className='subnav__item'>
                    <a href='/warehouse'>Registry & Gifting</a>
                </li>
            </ul>
        </div>
    );
};

export default Subnav;
