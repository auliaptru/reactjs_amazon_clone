import { useEffect, useRef, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import './scrollableCarousel.scss';

const ScrollableCarousel = ({
    data,
    content: Content,
    title,
    isHidden,
    style,
    styleOl,
}) => {
    const [showArrowLeft, setShowArrowLeft] = useState(true);
    const [showArrowRight, setShowArrowRight] = useState(false);

    const carouselRef = useRef(null);

    useEffect(() => {
        const carousel = carouselRef.current;

        const handleScroll = () => {
            if (carousel) {
                const { scrollLeft, scrollWidth, clientWidth } =
                    carouselRef.current;

                setShowArrowLeft(scrollLeft === 0);
                setShowArrowRight(scrollLeft + clientWidth === scrollWidth);
            }
        };

        if (carousel) {
            carousel.addEventListener('scroll', handleScroll);
            return () => carousel.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const handlePrevClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: -1245, behaviour: 'smooth' });
        }
    };

    const handleNextClick = () => {
        if (carouselRef.current) {
            carouselRef.current.scrollBy({ left: 1245, behaviour: 'smooth' });
        }
    };

    return (
        <div className='scrollableCarousel' style={style}>
            <h1>{title}</h1>

            <div className='sc__container'>
                <div
                    id='arrowLeft'
                    onClick={handlePrevClick}
                    style={{
                        opacity: showArrowLeft ? 0.5 : 1,
                        visibility: isHidden ? 'hidden' : 'visible',
                    }}
                >
                    <div className='sc__arrows-left'>
                        <IoIosArrowBack className='icon' />
                    </div>
                </div>
                <ol
                    className='sc__wrapper scroll'
                    ref={carouselRef}
                    // style={{ height: `${height}px`, gap: `${gap}px` }}
                    style={styleOl}
                >
                    {/* {data.images.map((product, i) => (
                        <li key={i}>
                            <div className='image__wrapper'>
                                <img
                                    className='image'
                                    src={product}
                                    alt='Product'
                                />
                            </div>
                        </li>
                    ))} */}
                    <Content data={data} />
                </ol>
                <div
                    id='arrowRight'
                    onClick={handleNextClick}
                    style={{
                        opacity: showArrowRight ? 0.5 : 1,
                        visibility: isHidden ? 'hidden' : 'visible',
                    }}
                >
                    <div className='sc__arrows-right'>
                        <IoIosArrowForward className='icon' />
                    </div>
                </div>
                {/* <div className='sc__arrows'></div> */}
            </div>
        </div>
    );
};

export default ScrollableCarousel;
