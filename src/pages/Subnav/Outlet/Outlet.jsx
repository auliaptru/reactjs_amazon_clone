import Navbar from '../../../components/navbar/Navbar';
import Subnav from '../../../components/subnav/Subnav';
import { products } from '../../../utils/OutletData';
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
                    <div className='outlet__carousel'>
                        <div className='carousel__top'>
                            <div className='carousel__title'>
                                <h2>Kitchen Outlet</h2>
                                <span>
                                    <a href='#'>See More</a>
                                </span>
                            </div>
                            <span>Page 1 of 7</span>
                        </div>
                        <div className='carousel__products'>
                            <div
                                className='carousel__arrow left'
                                // onClick={() =>
                                //     handleScrollLeft(slide.id, index)
                                // }
                            >
                                <i className='arrowLeft-icon'></i>
                            </div>
                            <ul className='carousel__products-wrapper'>
                                {products.map((product, index) => (
                                    <li className='product__card' key={index}>
                                        <div className='product__card-wrapper'>
                                            <div className='product__img'>
                                                <img
                                                    src={product.imageURL}
                                                    alt=''
                                                />
                                            </div>
                                            <p className='product__name'>
                                                {product.name}
                                            </p>
                                            <div className='product__review'>
                                                <i className='iconReview'></i>
                                                <span className='total'>
                                                    {product.reviews}
                                                </span>
                                            </div>
                                            <div className='product__price'>
                                                <span className='price__symbol'>
                                                    $
                                                </span>
                                                <span className='price__whole'>
                                                    {product.price.whole}
                                                </span>
                                                <span className='price__friction'>
                                                    {product.price.friction}
                                                </span>
                                            </div>
                                            <div className='product__discount'>
                                                <span className='discount__name'>
                                                    {product.price.list
                                                        ? 'List:'
                                                        : 'Typical:'}
                                                </span>
                                                <span className='discount__percentage'>
                                                    <span className='strike'>
                                                        <span>$</span>
                                                        {product.price.list
                                                            ? product.price.list
                                                            : product.price
                                                                  .typical}
                                                    </span>
                                                    (
                                                    {
                                                        product.price
                                                            .discountPercentage
                                                    }
                                                    )
                                                </span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div
                                className='carousel__arrow right'
                                // onClick={() =>
                                //     handleScrollLeft(slide.id, index)
                                // }
                            >
                                <i className='arrowRight-icon'></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Outlet;
