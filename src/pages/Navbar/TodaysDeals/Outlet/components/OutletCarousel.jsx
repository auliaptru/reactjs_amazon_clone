import { useRef, useState } from 'react';
import { products } from '../../../../../utils/OutletData';
import './outletCarousel.scss';
import MultipleItemCarousel from '../../../../../components/carousel/MultipleItemCarousel';

const Content = ({ currentIndex }) => (
    <>
        {products.map((product, index) => {
            const formattedReview = product.reviews.toLocaleString();
            return (
                <li
                    className={
                        index === currentIndex
                            ? 'oc__product-card active'
                            : 'oc__product-card'
                    }
                    key={index}
                >
                    <div className='oc__card-wrapper'>
                        <div className='oc__card-img'>
                            <img src={product.imageURL} alt='' />
                        </div>
                        <p className='oc__card-name'>{product.name}</p>
                        <div className='oc__card-review'>
                            <i className='iconReview'></i>
                            <span className='total'>{formattedReview}</span>
                        </div>
                        <div className='oc__card-price'>
                            <span className='price__symbol'>$</span>
                            <span className='price__whole'>
                                {product.price.whole}
                            </span>
                            <span className='price__friction'>
                                {product.price.friction}
                            </span>
                        </div>

                        {product.price.list || product.price.typical ? (
                            <div className='oc__card-discount'>
                                <span className='discount__name'>
                                    {product.price.list
                                        ? 'List:'
                                        : product.price.typical
                                        ? 'Typical:'
                                        : ''}
                                </span>
                                <span className='discount__percentage'>
                                    <span className='strike'>
                                        <span>$</span>
                                        {product.price.list
                                            ? product.price.list
                                            : product.price.typical}
                                    </span>
                                    ({product.price.discountPercentage})
                                </span>
                            </div>
                        ) : null}
                    </div>
                </li>
            );
        })}
    </>
);

const OutletCarousel = () => {
    const [numPage, setNumPage] = useState(1);

    const displayedItems = 7;
    const totalPages = Math.ceil(products.length / displayedItems);

    return (
        <div className='outlet__carousel'>
            <div className='outlet__carousel-top'>
                <div className='oc__title'>
                    <h2>Kitchen Outlet</h2>
                    <span>
                        <a href='#'>See More</a>
                    </span>
                </div>
                <div className='oc__totalPages'>
                    <span>
                        Page {numPage} of {totalPages}
                    </span>
                    {numPage === totalPages && (
                        <span className='start'>Start over</span>
                    )}
                </div>
            </div>
            <div className='outlet__carousel-container'>
                <MultipleItemCarousel
                    displayedItems={7}
                    widthItem={180}
                    gapItem={20}
                    data={products}
                    content={Content}
                    setNumPage={setNumPage}
                />
            </div>
        </div>
    );
};

export default OutletCarousel;
