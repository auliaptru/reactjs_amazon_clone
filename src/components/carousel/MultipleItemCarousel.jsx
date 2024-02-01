import { useRef, useState } from 'react';
import './multipleItemCarousel.scss';

const MultipleItemCarousel = ({
    displayedItems,
    widthItem,
    data,
    content: Content,
    gapItem,
    setNumPage,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState(null);

    const carouselRef = useRef(null);
    const totalPages = Math.ceil(data.length / displayedItems);

    const handlePrevClick = () => {
        let newIndex = currentIndex - displayedItems;
        if (newIndex < 0) {
            newIndex =
                Math.floor((data.length - 1) / displayedItems) * displayedItems;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthItem}`);
        setNumPage((prev) => (prev === 1 ? totalPages : prev - 1));
    };

    const handleNextClick = () => {
        let newIndex = currentIndex + displayedItems;
        if (newIndex > data.length - 1) {
            newIndex = 0;
        }
        setCurrentIndex(newIndex);
        setTranslateX(`-${newIndex * widthItem}`);
        setNumPage((prev) => (prev === totalPages ? 1 : prev + 1));
    };

    return (
        <div className='multipleItemCarousel'>
            <div className='carousel__arrow' onClick={handlePrevClick}>
                <i className='arrowIcon arrowLeft'></i>
            </div>
            <div className='multipleItemCarousel__contents' ref={carouselRef}>
                <ol
                    className='multipleItemCarousel__contents-wrapper'
                    style={{
                        transform: `translateX(${translateX}px) translateZ(0px)`,
                        transition: 'transform 0.3s ease',
                        width: `${widthItem}`,
                        gap: `${gapItem}px`,
                    }}
                >
                    <Content currentIndex={currentIndex} data={data} />
                </ol>
            </div>
            <div className='carousel__arrow' onClick={handleNextClick}>
                <i className='arrowIcon arrowRight'></i>
            </div>
        </div>
    );
};

export default MultipleItemCarousel;
