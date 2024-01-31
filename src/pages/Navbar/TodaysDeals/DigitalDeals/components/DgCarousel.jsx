import { useState } from 'react';
import MultiCarousel from '../../../../../components/carousel/MultiCarousel';
import Cards from './Cards';
import './dgCarousel.scss';

const DgCarousel = ({ data }) => {
    const [numPage, setNumPage] = useState(1);

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
                    const totalPages = Math.ceil(products[index].length / 3);
                    return (
                        <ul className='dgCarousel__products' key={index}>
                            <div className='product__top'>
                                <h2>{item.title}</h2>
                                <span>
                                    Page {numPage} of {totalPages}
                                </span>
                            </div>
                            <div className='dgCarousel__products-wrapper'>
                                <MultiCarousel
                                    data={products}
                                    content={<Cards item={item} />}
                                    widthItem={240}
                                    displayedItems={3}
                                    totalPages={totalPages}
                                    index={index}
                                    arrowStyle={arrowStyle}
                                    setNumPage={setNumPage}
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
