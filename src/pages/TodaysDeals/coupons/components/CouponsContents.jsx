import { slides } from '../../../../utils/CouponsData.json';
import SearchCoupons from './SearchCoupons';
import CouponsCard from '../../components/CouponsCard';
import './couponsContents.scss';

const CouponsContents = () => {
    return (
        <div className='couponContents'>
            <div className='couponContents__search'>
                <SearchCoupons />
            </div>
            <CouponsCard data={slides} />
        </div>
    );
};

export default CouponsContents;
