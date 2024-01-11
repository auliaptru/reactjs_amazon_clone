import './dgCarousel.scss';
import BadgeDeal from '../../../../components/badgeDeal/BadgeDeal';
import { useRef, useState } from 'react';
import Carousel from '../../../../components/slider/Carousel';
import Cards from './Cards';

const DgCarousel = ({ data }) => {
    const [numSlide, setNumSlide] = useState(1);

    const itemsPerView = 3;
    const widthCarousel = 240;

    const arrowStyle = {
        width: '45px',
        height: '100px',
        boxShadow: '2px 1px 3px #888',
        border: 'none',
        marginRight: '20px',
    };

    return (
        <div className='dgCarousel'>
            <div className='dgCarousel__container'>
                {data.map((item, index) => {
                    const products = data.map((item) => item.products);
                    const totalSlides = Math.ceil(
                        products[index].length / itemsPerView
                    );
                    return (
                        <ul className='dgCarousel__products' key={index}>
                            <div className='product__top'>
                                <h2>{item.title}</h2>
                                <span>
                                    Page {numSlide} of {totalSlides}
                                </span>
                            </div>
                            <div className='dgCarousel__products-wrapper'>
                                <Carousel
                                    content={<Cards item={item} />}
                                    setNumSlide={setNumSlide}
                                    itemsPerView={itemsPerView}
                                    widthCarousel={widthCarousel}
                                    totalSlides={totalSlides}
                                    data={products}
                                    arrowStyle={arrowStyle}
                                    index={index}
                                />
                            </div>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
};

export default DgCarousel;
