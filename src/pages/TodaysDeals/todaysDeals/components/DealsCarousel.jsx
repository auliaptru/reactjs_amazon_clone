import { useEffect, useRef, useState } from 'react';
import { carouselData } from '../../../../utils/TodaysDeals.json';
import './dealsCarousel.scss';

const DealsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(null);

    const slideRef = useRef(null);
    const itemsPerPage = 11;
    const widthCarousel = 125.5;

    const handleScrollLeft = () => {
        let newIndex = currentIndex - itemsPerPage;
        if (newIndex < 0) {
            newIndex =
                Math.floor((carouselData.length - 1) / itemsPerPage) *
                itemsPerPage;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthCarousel}`);
    };

    const handleScrollRight = () => {
        let newIndex = currentIndex + itemsPerPage;
        if (newIndex > carouselData.length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthCarousel}`);
    };

    return (
        <div className='deals__carousel-container'>
            <div className='carousel__arrow left' onClick={handleScrollLeft}>
                <i className='arrowLeft-icon'></i>
            </div>
            <div className='deals__carousel-content' ref={slideRef}>
                <ol
                    style={{
                        transition: 'transform 0.3s ease',
                        transform: `translateX(${translateX}px) translateZ(0px)`,
                        width: `${widthCarousel}`,
                    }}
                >
                    {carouselData.map((data, index) => (
                        <li key={index}>
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
