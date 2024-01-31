import { useRef, useState } from 'react';
import './carouselCards.scss';

const CarouselCards = ({ dataCarousel }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const carouselRef = useRef(null);
    const itemsPerPage = 7;
    const widthCarousel = 175;

    const handleClickLeft = () => {
        let newIndex = currentIndex - itemsPerPage;
        if (newIndex < 0) {
            newIndex =
                Math.floor((dataCarousel.length - 1) / itemsPerPage) *
                itemsPerPage;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthCarousel}`);
    };

    const handleClickRight = () => {
        let newIndex = currentIndex + itemsPerPage;
        if (newIndex > dataCarousel.length - 1) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthCarousel}`);
    };

    return (
        <div className='contentType__carousel-wrapper'>
            <div className='carousel__arrow' onClick={handleClickLeft}>
                <i className='arrowIcon arrowLeft'></i>
            </div>
            <div className='carousel__contents' ref={carouselRef}>
                <ul
                    className='carousel__contents-wrapper'
                    style={{
                        transition: 'transform 0.1s ease',
                        transform: `translateX(${translateX}px)`,
                        width: `${widthCarousel}`,
                    }}
                >
                    {dataCarousel.map((item, i) => {
                        const [integerPart, decimalPart] =
                            item.price.split('.');
                        return (
                            <li className='carousel__content' key={i}>
                                <div className='cc__image'>
                                    <img src={item.image} alt='' />
                                </div>
                                <h5 className='cc__title'>{item.title}</h5>
                                <span className='cc__contributor'>
                                    {item.contributor}
                                </span>
                                <div className='cc__price'>
                                    <span className='cc__price-icon'>$</span>
                                    <span className='cc__price-whole'>
                                        {integerPart}
                                    </span>
                                    <span className='cc__price-decimal'>
                                        {decimalPart}
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className='carousel__arrow' onClick={handleClickRight}>
                <i className='arrowIcon arrowRight'></i>
            </div>
        </div>
    );
};

export default CarouselCards;