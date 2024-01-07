import Filter from '../../components/Filter';
import './dealsFilter.scss';

const availability = ['all deals', 'available', 'upcoming', 'watchlist'];
const departments = [
    'Amazon Devices & Accessories',
    'Appliances',
    'Arts, Crafts & Sewing',
    'Automotive',
    'Baby Clothing & Shoes',
    'Baby Products',
    'Beauty & Personal Care',
    'Books',
    "Boys' Fashion",
    'Camera & Photo',
    'CDs & Vinyl',
    'Cell Phones & Accessories',
];

const DealsFilter = () => {
    return (
        <div className='filter__container'>
            <Filter availability={availability} departments={departments} />
        </div>
    );
};

export default DealsFilter;
