import { useEffect, useRef, useState } from 'react';
import './couponsCarousel.scss';

const CouponsCarousel = ({
    data,
    widthSlide,
    widthCard,
    widthCarousel,
    widthArrow,
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateX, setTranslateX] = useState({
        1: null,
        2: null,
        3: null,
    });

    const slideIdRef = useRef(null);
    const itemsPerSlide = 5;

    useEffect(() => {
        updateTranslateX(
            slideIdRef.current,
            `-${currentIndex * widthCarousel}`
        );
    }, [currentIndex]);

    const updateTranslateX = (slideId, value) => {
        setTranslateX((prev) => ({
            ...prev,
            [slideId]: value,
        }));
    };

    const handleScrollLeft = (slideId, index) => {
        slideIdRef.current = slideId;
        updateCurrentIndex(index, 'left');
    };

    const handleScrollRight = (slideId, index) => {
        slideIdRef.current = slideId;
        updateCurrentIndex(index, 'right');
    };

    const updateCurrentIndex = (index, arrow) => {
        if (arrow === 'left') {
            setCurrentIndex((prev) => {
                let newIndex = prev - itemsPerSlide;
                if (newIndex < 0) {
                    newIndex =
                        Math.floor(
                            (data[index].items.length - 1) / itemsPerSlide
                        ) * itemsPerSlide;
                }
                return newIndex;
            });
        } else if (arrow === 'right') {
            setCurrentIndex((prev) => {
                let newIndex = prev + itemsPerSlide;
                if (newIndex > data[index].items.length - 1) {
                    newIndex = 0;
                }
                return newIndex;
            });
        }
    };
    return (
        <>
            {data.map((slide, index) => (
                <div className='couponContents__container' key={slide.id}>
                    <div className='couponContents__title'>
                        <h3>{slide.name}</h3>
                        <span>
                            {slide.link ? `[${slide.link}]` : '[see more]'}
                        </span>
                    </div>
                    <div className='couponContents__carousel'>
                        <div
                            className='carousel__arrow left'
                            style={{ width: `${widthArrow}` }}
                            onClick={() => handleScrollLeft(slide.id, index)}
                        >
                            <i className='arrowIcon arrowLeft'></i>
                        </div>
                        <div className='couponContents__cards'>
                            <ul
                                style={{
                                    transition: 'transform 0.3s ease',
                                    transform: `translateX(${
                                        translateX[slide.id]
                                    }px) translateZ(0px)`,
                                    width: `${widthSlide}`,
                                }}
                            >
                                {slide.items.map((item, index) => (
                                    <li
                                        key={index}
                                        style={{ width: `${widthCarousel}` }}
                                    >
                                        <div
                                            className='couponContents__card'
                                            style={{
                                                width: `${widthCard}`,
                                            }}
                                        >
                                            <div className='card__wrapper'>
                                                <div className='card__img'>
                                                    <img
                                                        src={item.image}
                                                        alt=''
                                                    />
                                                </div>
                                                <div className='card__title'>
                                                    <h3>
                                                        Save{' '}
                                                        {
                                                            item.couponDetails
                                                                .saving
                                                        }
                                                    </h3>
                                                </div>
                                                <div className='card__description'>
                                                    <p>{item.title}</p>
                                                </div>
                                            </div>
                                            <div className='card__clipBtn'>
                                                <button>
                                                    {
                                                        item.couponDetails
                                                            .couponStatus
                                                    }
                                                </button>
                                            </div>
                                            <div className='card__footer'></div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div
                            className='carousel__arrow right'
                            style={{ width: `${widthArrow}` }}
                            onClick={() => handleScrollRight(slide.id, index)}
                        >
                            <i className='arrowIcon arrowRight'></i>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CouponsCarousel;
