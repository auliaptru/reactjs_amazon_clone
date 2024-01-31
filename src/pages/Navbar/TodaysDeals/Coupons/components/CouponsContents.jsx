import { slides } from '../../../../../utils/CouponsData.json';
import SearchCoupons from './SearchCoupons';
import CouponsCarousel from '../../../components/CouponsCarousel';
import './couponsContents.scss';

const CouponsContents = () => {
    return (
        <div className='couponContents'>
            <div className='couponContents__search'>
                <SearchCoupons />
            </div>
            <CouponsCarousel
                data={slides}
                widthSlide='970px'
                widthCard='165px'
                widthCarousel={195}
                widthArrow='38px'
            />
        </div>
    );
};

export default CouponsContents;
