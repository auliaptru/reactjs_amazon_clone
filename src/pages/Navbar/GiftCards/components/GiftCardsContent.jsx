import CarouselCards from './CarouselCards';
import './giftCardsContent.scss';

const GiftCardsContent = ({ data }) => {
    const images = data.map((navType) => navType.images).flat();
    const dataCarousel = data.map((navType) => navType.carouselImgs).flat();

    return (
        <div className='contentType'>
            <div className='contentType__images'>
                <div className='contentType__images-wrapper'>
                    {images.map((img, i) => (
                        <div key={i} className='contentType__image'>
                            <a href='#'>
                                <img src={img} alt='' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='contentType__carousel'>
                <h2>{data.map((item) => item.carouselTitle)}</h2>
                <CarouselCards dataCarousel={dataCarousel} />
            </div>
        </div>
    );
};

export default GiftCardsContent;
