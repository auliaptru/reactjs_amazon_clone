import { useRef, useState } from 'react';
import { products } from '../../../../utils/OutletData';
import './outletCarousel.scss';

const OutletCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(null);
    const [numSlide, setNumSlide] = useState(1);

    const slideRef = useRef(null);
    const itemsPerPage = 7;
    const widthCarousel = 180;
    const totalSlides = Math.ceil(products.length / itemsPerPage);

    const handleLeft = () => {
        let newIndex = currentIndex - itemsPerPage;
        if (newIndex < 0) {
            newIndex =
                Math.floor((products.length - 1) / itemsPerPage) * itemsPerPage;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthCarousel}`);
        setNumSlide((prev) => (prev === 1 ? totalSlides : prev - 1));
    };

    const handleRight = () => {
        let newIndex = currentIndex + itemsPerPage;
        if (newIndex > products.length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthCarousel}`);
        setNumSlide((prev) => (prev === totalSlides ? 1 : prev + 1));
    };

    // const currentItems = products.slice(
    //     currentIndex,
    //     currentIndex + itemsPerPage
    // );

    return (
        <div className='outlet__carousel'>
            <div className='carousel__top'>
                <div className='carousel__title'>
                    <h2>Kitchen Outlet</h2>
                    <span>
                        <a href='#'>See More</a>
                    </span>
                </div>
                <div className='carousel__totalSlide'>
                    <span>
                        Page {numSlide} of {totalSlides}
                    </span>
                    {numSlide === totalSlides && (
                        <span className='start'>Start over</span>
                    )}
                </div>
            </div>
            <div className='carousel__products-container'>
                <div className='carousel__arrow left' onClick={handleLeft}>
                    <i className='arrowLeft-icon'></i>
                </div>
                <div className='carousel__products-wrapper' ref={slideRef}>
                    <ol
                        className='carousel__products'
                        style={{
                            transition: 'transform 0.1s ease',
                            transform: `translateX(${translateX}px) translateZ(0px)`,
                            transformStyle: 'preserve-3d',
                            width: `${widthCarousel}`,
                        }}
                    >
                        {products.map((product, index) => {
                            const formattedReview =
                                product.reviews.toLocaleString();
                            return (
                                <li
                                    className={
                                        index === currentIndex
                                            ? 'product__card active'
                                            : 'product__card'
                                    }
                                    key={index}
                                >
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
                                                {formattedReview}
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

                                        {product.price.list ||
                                        product.price.typical ? (
                                            <div className='product__discount'>
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
                                        ) : null}
                                    </div>
                                </li>
                            );
                        })}
                    </ol>
                </div>
                <div className='carousel__arrow right' onClick={handleRight}>
                    <i className='arrowRight-icon'></i>
                </div>
            </div>
        </div>
    );
};

export default OutletCarousel;
