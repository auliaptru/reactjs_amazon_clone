import { useEffect, useRef, useState } from 'react';
import './couponsCard.scss';

const CouponsCard = ({ data, widthSlide, widthCard, widthCarousel }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [translateXStates, setTranslateXStates] = useState({
        1: null,
        2: null,
        3: null,
    });

    const slideIdRef = useRef(null);
    const itemsPerSlide = 5;
    // const widthCarousel = 195;

    useEffect(() => {
        updateTranslateX(
            slideIdRef.current,
            `-${currentIndex * widthCarousel}`
        );
    }, [currentIndex]);

    const updateTranslateX = (slideId, value) => {
        setTranslateXStates((prev) => ({
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
                            onClick={() => handleScrollLeft(slide.id, index)}
                        >
                            <i className='arrowLeft-icon'></i>
                        </div>
                        <div className='couponContents__cards'>
                            <ul
                                style={{
                                    transition: 'transform 0.3s ease',
                                    transform: `translateX(${
                                        translateXStates[slide.id]
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
                            onClick={() => handleScrollRight(slide.id, index)}
                        >
                            <i className='arrowRight-icon'></i>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default CouponsCard;
