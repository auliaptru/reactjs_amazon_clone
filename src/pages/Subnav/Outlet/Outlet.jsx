import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import Subnav from '../../../components/subnav/Subnav';
import OutletCarousel from './components/OutletCarousel';
import { categories } from '../../../utils/OutletData';
import './outlet.scss';

const Outlet = () => {
    return (
        <>
            <Navbar />
            <Subnav />
            <div className='outlet'>
                <div className='outlet__banner'>
                    <img
                        src='https://m.media-amazon.com/images/I/516bpdTAVDL.jpg'
                        alt=''
                    />
                </div>
                <div className='outlet__categories'>
                    <div className='grid__box'>
                        <span>Kitchen</span>
                    </div>
                    <div className='grid__box'>
                        <span>Toys & Games</span>
                    </div>
                    <div className='grid__box'>
                        <span>Electronics</span>
                    </div>
                    <div className='grid__box'>
                        <span>All Overstock Deals</span>
                    </div>
                </div>
                <div className='outlet__carousel-wrapper'>
                    <OutletCarousel />
                </div>
                <div className='outlet__categories-wrapper'>
                    <div className='categories__title'>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/IMAGE_BLOCK_03_orange_v3._CB1198675309_.jpg'
                            alt=''
                        />
                    </div>
                    <div className='categories__list'>
                        {categories.map((cate, index) => (
                            <div className='category' key={index}>
                                <a href={cate.link}>
                                    <img src={cate.image} alt={cate.alt} />
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer isFooterTop={true} />
        </>
    );
};

export default Outlet;
