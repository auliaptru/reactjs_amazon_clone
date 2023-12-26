import { useEffect, useRef, useState } from 'react';
import { carouselData } from '../../../utils/TodaysDeals.json';
import './dealsCarousel.scss';

const DealsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [displayedThemes, setDisplayedThemes] = useState([]);
    const [widthCarousel, setWidthCarousel] = useState(0);

    const productRef = useRef(null);

    useEffect(() => {
        if (productRef.current) {
            setWidthCarousel(productRef.current.offsetWidth);
        }
        const remainingThemes = carouselData.length - currentIndex;
        const themesToShow =
            remainingThemes < itemsPerPage ? remainingThemes : itemsPerPage;
        const updatedDisplayedThemes = carouselData.slice(
            currentIndex,
            currentIndex + themesToShow
        );
        setDisplayedThemes(updatedDisplayedThemes);
    }, [currentIndex]);

    const itemsPerPage = 11;

    const handleScrollLeft = () => {
        if (currentIndex - itemsPerPage >= 0) {
            setCurrentIndex((prev) => prev - itemsPerPage);
        } else {
            const lastPageIndex =
                Math.floor(displayedThemes.length / itemsPerPage) *
                itemsPerPage;
            setCurrentIndex(lastPageIndex);
        }
    };

    const handleScrollRight = () => {
        if (currentIndex + itemsPerPage < carouselData.length) {
            // setTimeout(() => {
            setCurrentIndex((prev) => prev + itemsPerPage);
            // }, 100);
        } else {
            // setTimeout(() => {
            setCurrentIndex(0);
            // }, 100);
        }
    };
    console.log(currentIndex);
    return (
        <div className='deals__carousel-container'>
            <div className='carousel__arrow left' onClick={handleScrollLeft}>
                <i className='arrowLeft-icon'></i>
            </div>
            <div className='deals__carousel-content' ref={productRef}>
                <ol
                    style={{
                        transition: 'transform 0.3s ease',
                        transform: `translateX(-${currentIndex * 100}px)`,
                    }}
                >
                    {displayedThemes.map((data, i) => (
                        <li key={i}>
                            <div className='carousel__img'>
                                <img src={data.img} alt='' />
                            </div>
                            <span className='carousel__name'>{data.name}</span>
                        </li>
                    ))}
                </ol>
            </div>
            <div className='carousel__arrow right' onClick={handleScrollRight}>
                <i className='arrowRight-icon'></i>
            </div>
        </div>
    );
};

export default DealsCarousel;
