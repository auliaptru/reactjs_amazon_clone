import Footer from '../../../../components/footer/Footer';
import Navbar from '../../../../components/navbar/Navbar';
import Subnav from '../../../../components/subnav/Subnav';
import CouponsContents from './components/CouponsContents';
import CouponsFilter from './components/CouponsFilter';
import './coupons.scss';

const Coupons = () => {
    return (
        <>
            <div className='coupons'>
                <Subnav />
                <div className='coupons__img'>
                    <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2021/img/Events/XCM_Manual_1337644_1736304_US_us_chp_es_us_en_3925599_1500x300_en_US.jpg'
                        alt=''
                    />
                </div>
                <div className='coupons__content'>
                    <div className='coupons__filter'>
                        <CouponsFilter />
                    </div>
                    <div className='coupons__cards'>
                        <CouponsContents />
                    </div>
                </div>
            </div>
            <Footer isFooterTop={false} />
        </>
    );
};

export default Coupons;
