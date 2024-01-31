import { useRef, useState } from 'react';
import './multiCarousel.scss';

const MultiCarousel = ({
    data,
    content,
    displayedItems,
    totalPages,
    setNumPage,
    widthItem,
    arrowStyle,
    index,
    gapItem,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(0);

    const slideRef = useRef(null);

    const handlePrev = (index) => {
        let newIndex = currentIndex - displayedItems;
        if (newIndex < 0) {
            newIndex =
                Math.floor((data[index].length - 1) / displayedItems) *
                displayedItems;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthItem}`);
        setNumPage((prevNum) => (prevNum === 1 ? totalPages : prevNum - 1));
    };

    const handleNext = (index) => {
        let newIndex = currentIndex + displayedItems;
        if (newIndex > data[index].length - 1) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthItem}`);
        setNumPage((prevNum) => (prevNum === totalPages ? 1 : prevNum + 1));
    };

    return (
        <div className='multiCarousel' ref={slideRef}>
            <div
                className='carousel__arrow'
                style={arrowStyle}
                onClick={() => handlePrev(index)}
            >
                <i className='arrowIcon arrowLeft'></i>
            </div>
            <div className='multiCarousel__content'>
                <ol
                    className='multiCarousel__content-wrapper'
                    style={{
                        transform: `translateX(${translateX}px)`,
                        width: `${widthItem}`,
                        gap: `${gapItem}`,
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
                <i className='arrowIcon arrowRight'></i>
            </div>
        </div>
    );
};

export default MultiCarousel;
