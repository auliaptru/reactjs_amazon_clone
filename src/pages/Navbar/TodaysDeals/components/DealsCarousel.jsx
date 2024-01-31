import { carouselData } from '../../../../utils/TodaysDeals.json';
import MultipleItemCarousel from '../../../../components/carousel/MultipleItemCarousel';
import './dealsCarousel.scss';

const Content = () => (
    <>
        {carouselData.map((data, index) => (
            <li className='dealsCarousel__lists' key={index}>
                <div className='dealsCarousel__img'>
                    <img src={data.img} alt='' />
                </div>
                <span className='dealsCarousel__name'>{data.name}</span>
            </li>
        ))}
    </>
);

const DealsCarousel = () => {
    return (
        <div className='deals__carousel-container'>
            <MultipleItemCarousel
                displayedItems={11}
                widthItem={121}
                gapItem={26}
                data={carouselData}
                content={Content}
            />
        </div>
    );
};

export default DealsCarousel;
