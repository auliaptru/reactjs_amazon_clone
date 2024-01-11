import { useRef, useState } from 'react';
import './carousel.scss';

const Carousel = ({
    data,
    content,
    itemsPerView,
    totalSlides,
    setNumSlide,
    widthCarousel,
    arrowStyle,
    index,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const slideRef = useRef(null);

    const handlePrev = (index) => {
        let newIndex = currentIndex - itemsPerView;
        if (newIndex < 0) {
            newIndex =
                Math.floor((data[index].length - 1) / itemsPerView) *
                itemsPerView;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthCarousel}`);
        setNumSlide((prevNum) => (prevNum === 1 ? totalSlides : prevNum - 1));
    };

    const handleNext = (index) => {
        let newIndex = currentIndex + itemsPerView;
        if (newIndex > data[index].length) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthCarousel}`);
        setNumSlide((prevNum) => (prevNum === totalSlides ? 1 : prevNum + 1));
    };

    return (
        <div className='carousel' ref={slideRef}>
            <div
                className='carousel__arrow'
                style={arrowStyle}
                onClick={() => handlePrev(index)}
            >
                <i className='arrowIcon left'></i>
            </div>
            <div className='carousel__content'>
                <ol
                    style={{
                        transform: `translateX(${translateX}px)`,
                        width: `${widthCarousel}`,
                    }}
                >
                    {content}
                </ol>
            </div>
            <div
                className='carousel__arrow'
                style={arrowStyle}
                onClick={() => handleNext(index)}
            >
                <i className='arrowIcon right'></i>
            </div>
        </div>
    );
};

export default Carousel;
