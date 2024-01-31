import './couponsFilter.scss';
import { categories } from '../../../../../utils/CouponsFilter.json';

const CouponsFilter = () => {
    return (
        <div className='couponsFilter'>
            <div className='couponsFilter__container'>
                <h4>Your Coupons</h4>
                <ul>
                    <li>
                        <a href=''>Recently Clipped</a>
                    </li>
                </ul>
                {categories.map((cate, index) => (
                    <div className='couponsFilter__category' key={index}>
                        <h4>{cate.name}</h4>
                        <ul>
                            {cate.items.map((item, index) => (
                                <li key={index}>
                                    <a href={item.url}>{item.name}</a>
                                </li>
                            ))}

                            <li>
                                <a href=''>Prime-exclusive</a>
                            </li>
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CouponsFilter;
