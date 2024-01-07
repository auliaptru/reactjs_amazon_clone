import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import './fullScreenSlider.scss';

const backgrounds = [
    'https://m.media-amazon.com/images/I/61oSFQ7jtxL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/717RUPA1bDL._SX3000_.jpg',
    'https://m.media-amazon.com/images/I/71+LRyFtrPL._SX3000_.jpg',
];

const initialState = {
    left: false,
    right: false,
};

const FullScreenSlider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const [isClicked, setIsClicked] = useState(initialState);
    const [slideAuto, setSlideAuto] = useState(true);

    const slideRef = useRef(null);

    // timer auto slide 5s
    useEffect(() => {
        if (slideRef.current) {
            clearTimeout(slideRef.current);
        }
        slideRef.current = setTimeout(() => {
            if (slideAuto) {
                setSlideIndex((prev) =>
                    prev === backgrounds.length - 1 ? 0 : prev + 1
                );
            }
        }, 5000);
        return () => clearTimeout(slideRef.current);
    }, [slideIndex, slideAuto]);

    const prevSlide = () => {
        setSlideIndex((prev) =>
            prev === 0 ? backgrounds.length - 1 : prev - 1
        );

        setIsClicked({
            left: true,
            right: false,
        });
        setSlideAuto(false);
    };

    const nextSlide = () => {
        setSlideIndex((prev) =>
            prev === backgrounds.length - 1 ? 0 : prev + 1
        );

        setIsClicked({
            left: false,
            right: true,
        });
        setSlideAuto(false);
    };

    if (!Array.isArray(backgrounds) || backgrounds.length <= 0) {
        return null;
    }

    return (
        <div className='home__wrapper'>
            <div className='home__arrows'>
                <div
                    className={`${isClicked.left && 'border'} home__arrow-left`}
                    onClick={prevSlide}
                    onBlur={() => setIsClicked(initialState)}
                >
                    <a href='#'>
                        <i>
                            <SlArrowLeft className='icon' />
                        </i>
                    </a>
                </div>
                <div
                    className={`${
                        isClicked.right && 'border'
                    } home__arrow-right`}
                    onClick={nextSlide}
                    onBlur={() => setIsClicked(initialState)}
                >
                    <a href='#'>
                        <i>
                            <SlArrowRight className='icon' />
                        </i>
                    </a>
                </div>
            </div>
            <div className='home__bg'>
                <div
                    ref={slideRef}
                    className='home__bg-slides'
                    style={{
                        transform: `translateX(-${slideIndex * 100}%)`,
                        transition: 'transform 0.3s ease',
                    }}
                >
                    {backgrounds.map((bg, index) => (
                        <div key={index} className='home__bg-slide'>
                            <img src={bg} alt={`slide-${slideIndex + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FullScreenSlider;
