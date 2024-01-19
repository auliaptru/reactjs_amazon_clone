import { slides } from '../../../../../utils/CouponsData.json';
import SearchCoupons from './SearchCoupons';
import CouponsCard from '../../../components/CouponsCard';
import './couponsContents.scss';

const CouponsContents = () => {
    return (
        <div className='couponContents'>
            <div className='couponContents__search'>
                <SearchCoupons />
            </div>
            <CouponsCard
                data={slides}
                widthSlide='970px'
                widthCard='165px'
                widthCarousel={195}
            />
        </div>
    );
};

export default CouponsContents;
