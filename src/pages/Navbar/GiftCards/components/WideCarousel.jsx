import { useState } from 'react';
import './wideCarousel.scss';
import Slider from 'react-slick';

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='carouselgc__arrows prev' onClick={onClick}>
            <i className='prevArrow__icon'></i>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <div className='carouselgc__arrows next' onClick={onClick}>
            <i className='nextArrow__icon'></i>
        </div>
    );
};

const CarouselGiftCards = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots: true,
        dotsClass: 'slick-dots slick-thumb',
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        pauseOnHover: false,
        appendDots: (dots) => (
            <ul
                style={{
                    backgroundColor: 'white',
                    padding: '6px 0 5px 0',
                    marginBottom: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <li
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '5px',
                        paddingTop: '6px',
                    }}
                >
                    {dots}
                </li>
            </ul>
        ),
        customPaging: (index) => (
            <div
                style={{
                    width: '12px',
                    height: '12px',
                    color: 'black',
                    borderRadius: '50%',
                    backgroundColor:
                        currentSlide === index ? '#4A4A4A' : '#D8D8D8',
                }}
            ></div>
        ),
        beforeChange: (current, next) => setCurrentSlide(next),
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
    };

    return (
        <div className='carouselgc'>
            <div className='carouselgc__wrapper'>
                <Slider {...settings}>
                    <div className='carousel__wrapper'>
                        <img
                            src='https://m.media-amazon.com/images/G/01/GiftCards/2024/Q1/VX-2422/VD24_Desktop_GCLP_Hero_3400x680_EN._SX3000_QL85_.jpg'
                            alt=''
                        />
                    </div>
                    <div className='carousel__wrapper'>
                        <img
                            src='https://m.media-amazon.com/images/G/01/GiftCards/GCLP/D_Hero_eGC._SX3000_QL85_.jpg'
                            alt=''
                        />
                    </div>
                    <div className='carousel__wrapper'>
                        <img
                            src='https://m.media-amazon.com/images/G/01/GiftCards/GCLP/D_Hero_eGC._SX3000_QL85_.jpg'
                            alt=''
                        />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default CarouselGiftCards;
