import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import ProductGrid from '../../../components/productGrid/ProductGrid';
import DealsCarousel from './components/DealsCarousel';
import DealsFilter from './components/DealsFilter';
import './todaysDeals.scss';
import DealsCard from './components/DealsCard';
import Subnav from '../../../components/subnav/Subnav';

const TodaysDeals = () => {
    return (
        <div className='deals'>
            <Navbar />
            <div className='deals__container'>
                <Subnav />
                <div className='deals__image'>
                    <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/DiscoTec/2023/Deals/DealMoment/WinterSale/TodaysDeal/DM_FS_ONFIG_TodaysDeal_DT_gold_1500x125.jpg'
                        alt='Winter Sale'
                    />
                </div>
                <div className='deals__carousel'>
                    <DealsCarousel />
                </div>
                <div className='deals__content'>
                    <ProductGrid
                        filterComponents={<DealsFilter />}
                        gridComponents={<DealsCard />}
                    />
                </div>
                <div className='deals__pagination'>
                    <ul>
                        <li>
                            <span></span>
                            <button className='disabled'>Previous</button>
                        </li>
                        <li>
                            <button className='actived'>1</button>
                        </li>
                        <li>
                            <span></span>
                            <button>2</button>
                        </li>
                        <li>
                            <span></span>
                            <button>3</button>
                        </li>
                        <li>
                            <button className='disabled'>...</button>
                        </li>
                        <li>
                            <button className='disabled'>154</button>
                        </li>
                        <li>
                            <span></span>
                            <button>Next</button>
                        </li>
                    </ul>
                </div>
                <div className='deals__img'>
                    <img
                        src='https://images-na.ssl-images-amazon.com/images/I/7191qk-xnFL.jpg'
                        alt=''
                    />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TodaysDeals;
