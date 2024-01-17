import { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './carousel.scss';

const Carousel = ({ products, style }) => {
    const [showScrollLeft, setShowScrollLeft] = useState(true);
    const [showScrollRight, setShowScrollRight] = useState(false);

    const productRef = useRef(null);

    useEffect(() => {
        const carousel = productRef.current;

        const handleScroll = () => {
            if (carousel) {
                const { scrollLeft, scrollWidth, clientWidth } =
                    productRef.current;

                setShowScrollLeft(scrollLeft === 0);
                setShowScrollRight(scrollLeft + clientWidth === scrollWidth);
            }
        };

        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            return () => carousel.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handleScrollLeft = () => {
        if (productRef.current) {
            productRef.current.scrollBy({ left: -1245, behaviour: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (productRef.current) {
            productRef.current.scrollBy({ left: 1245, behaviour: 'smooth' });
        }
    };

    return (
        <div className='carousel'>
            <h1>{products.title}</h1>
            <div className='carousel__products'>
                <div
                    className='carousel__arrows arrow__left'
                    id='left-arrow'
                    onClick={handleScrollLeft}
                    style={{ opacity: showScrollLeft ? 0.5 : 1 }}
                >
                    <IoIosArrowBack className='icon' />
                </div>
                <ul className='carousel__product scroll' ref={productRef}>
                    {products.images.map((product, i) => (
                        <li key={i}>
                            <div className='image__wrapper' style={style}>
                                <img
                                    className='image'
                                    src={product}
                                    alt='Product'
                                />
                            </div>
                        </li>
                    ))}
                </ul>
                <div
                    className='carousel__arrows arrow__right'
                    id='right-arrow'
                    onClick={handleScrollRight}
                    style={{ opacity: showScrollRight ? 0.5 : 1 }}
                >
                    <IoIosArrowForward className='icon' />
                </div>
                <div className='carousel__arrows'></div>
            </div>
        </div>
    );
};

export default Carousel;
