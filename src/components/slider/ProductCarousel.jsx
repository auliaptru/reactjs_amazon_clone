import { useEffect, useRef, useState } from 'react';
import './productCarousel.scss';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

const SliderProducts = ({ products }) => {
    const [showScrollLeft, setShowScrollLeft] = useState(true);
    const [showScrollRight, setShowScrollRight] = useState(false);

    const productRef = useRef(null);

    useEffect(() => {
        const slider = productRef.current;

        const handleScroll = () => {
            if (slider) {
                const { scrollLeft, scrollWidth, clientWidth } =
                    productRef.current;

                setShowScrollLeft(scrollLeft === 0);
                setShowScrollRight(scrollLeft + clientWidth === scrollWidth);
            }
        };

        if (slider) {
            slider.addEventListener('scroll', handleScroll);
            return () => slider.removeEventListener('scroll', handleScroll);
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
        <div className='slider'>
            <h1>{products.title}</h1>
            <div className='slider__products'>
                <div
                    className='slider__arrows arrow__left'
                    id='left-arrow'
                    onClick={handleScrollLeft}
                    style={{ opacity: showScrollLeft ? 0.5 : 1 }}
                >
                    <IoIosArrowBack className='icon' />
                </div>
                <div className='slider__product scroll' ref={productRef}>
                    {products.images.map((product, i) => (
                        <img key={i} src={product} alt='Product' />
                    ))}
                </div>
                <div
                    className='slider__arrows arrow__right'
                    id='right-arrow'
                    onClick={handleScrollRight}
                    style={{ opacity: showScrollRight ? 0.5 : 1 }}
                >
                    <IoIosArrowForward className='icon' />
                </div>
                <div className='slider__arrows'></div>
            </div>
        </div>
    );
};

export default SliderProducts;
