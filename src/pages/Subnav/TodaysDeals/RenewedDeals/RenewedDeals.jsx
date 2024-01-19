import Footer from '../../../../components/footer/Footer';
import Navbar from '../../../../components/navbar/Navbar';
import ProductGrid from '../../../../components/productGrid/ProductGrid';
import CouponsCard from '../../components/CouponsCard';
import DealsCard from '../../components/DealsCard';
import Filter from '../../components/Filter';
import {
    data,
    avaliability,
    departments,
    products,
    promise,
    freqQuestions,
} from '../../../../utils/RenewedDealsData';
import './renewedDeals.scss';

const RenewedDeals = () => {
    return (
        <>
            <Navbar />
            <div className='renewedDeals'>
                <h1>Deals on like-new products on Amazon Renewed </h1>
                <p>
                    Products on Amazon Renewed have been inspected and tested by
                    qualified suppliers to work and look like new, and come with
                    the Amazon Renewed Guarantee. Get great deals on
                    smartphones, computers, laptops, tablets, home and kitchen
                    appliances, game consoles, office products, and more.
                </p>
                <div className='renewedDeals__coupons'>
                    <CouponsCard
                        data={data}
                        widthSlide='100%'
                        widthCard='175px'
                        widthCarousel={205}
                    />
                </div>
                <div className='renewedDeals__wrapper'>
                    <div className='renewedDeals__products'>
                        <ProductGrid
                            filterComponents={
                                <Filter
                                    availability={avaliability}
                                    departments={departments}
                                />
                            }
                            gridComponents={<DealsCard products={products} />}
                        />
                    </div>
                    <div className='renewedDeals__pagination'>
                        <ul>
                            <li>
                                <span></span>
                                <button className='disabled'>Previous</button>
                            </li>
                            <li>
                                <button className='disabled'>1</button>
                            </li>
                            <li>
                                <span></span>
                                <button className='disabled'>Next</button>
                            </li>
                        </ul>
                        <div className='pagination__link'>
                            <span>
                                <a href='#'>Restrictions apply</a>
                            </span>
                        </div>
                    </div>
                    <div className='renewedDeals__img2'>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Certified_Refurbished/XCM_Manual_1228189_1199690_US_us_evergreen_gg_shop_all_us_en_3133593_1500x150_en_US.jpg'
                            alt=''
                        />
                    </div>
                    <div className='renewedDeals__promise'>
                        <h1>The Renewed promise</h1>
                        <div className='renewedDeals__grid'>
                            {promise.map((data, index) => (
                                <div
                                    className='renewedDeals__grid-box'
                                    key={index}
                                >
                                    <img src={data.img} alt='' />
                                    <h2>{data.name}</h2>
                                    <p>{data.desc}</p>
                                    <span>
                                        <a href='#'>{data.link && data.link}</a>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='renewedDeals__freqQuestions'>
                        <h1>Frequently asked questions</h1>
                        <div className='renewedDeals__freqQuestions-wrapper'>
                            {freqQuestions.map((data, index) => (
                                <div className='question__box' key={index}>
                                    <h2>{data.question}</h2>
                                    <p>{data.answer}</p>
                                    <hr />
                                </div>
                            ))}
                        </div>
                        <p className='text'>Other questions?</p>
                        <span>
                            <a href='#'>Visit our Help Center</a>
                        </span>
                    </div>
                </div>
            </div>
            <Footer isFooterTop={false} />
        </>
    );
};

export default RenewedDeals;
