import MultipleItemCarousel from '../../../../../components/carousel/MultipleItemCarousel';
import ScrollableCarousel from '../../../../../components/carousel/ScrollableCarousel';
import './amazonGiftCardsContent.scss';

const Content = ({ data }) => (
    <>
        {data.map((product, i) => (
            <li key={i}>
                <div className='image__cs-wrapper'>
                    <img className='image' src={product} alt='Product' />
                </div>
            </li>
        ))}
    </>
);

const CarouselData = ({ data }) => (
    <>
        {data.map((item, i) => {
            const [integerPart, decimalPart] = item.price.split('.');
            return (
                <li className='carousel__content' key={i}>
                    <div className='cc__image'>
                        <img src={item.image} alt='' />
                    </div>
                    <h5 className='cc__title'>{item.title}</h5>
                    <span className='cc__contributor'>{item.contributor}</span>
                    <div className='cc__price'>
                        <span className='cc__price-icon'>$</span>
                        <span className='cc__price-whole'>{integerPart}</span>
                        <span className='cc__price-decimal'>{decimalPart}</span>
                    </div>
                </li>
            );
        })}
    </>
);

const AmazonGiftCardsContent = ({ data }) => {
    const images = data.map((navType) => navType.images).flat();
    const dataCarousel1 = data
        .map((navType) => navType.carouselScrollImgs)
        .flat();
    const dataCarousel2 = data.map((navType) => navType.carouselImgs).flat();

    const style = {
        gap: '60px',
        padding: '0 30px',
        maxWidth: '1240px',
    };
    return (
        <div className='amazonGiftCards'>
            <div className='amazonGiftCards__images'>
                <div className='amazonGiftCards__images-wrapper'>
                    {images.slice(0, 2).map((img, i) => (
                        <div key={i} className='amazonGiftCards__image'>
                            <a href='#'>
                                <img src={img} alt='' />
                            </a>
                        </div>
                    ))}
                </div>
                <div className='amazonGiftCards__images-wrapper'>
                    {images.slice(2).map((img, i) => (
                        <div key={i} className='amazonGiftCards__image'>
                            <a href='#'>
                                <img src={img} alt='' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='amazonGiftCards__carousel-scrollable'>
                <h2>Upcoming Events</h2>
                <ScrollableCarousel
                    data={dataCarousel1}
                    content={Content}
                    styleOl={style}
                    isHidden={true}
                />
            </div>
            <div className='amazonGiftCards__carousel'>
                <h2>{data.map((item) => item.carouselTitle)}</h2>

                <MultipleItemCarousel
                    data={dataCarousel2}
                    content={CarouselData}
                    displayedItems={7}
                    widthItem={178}
                    gapItem={18}
                    setNumPage='0'
                />
            </div>
        </div>
    );
};

export default AmazonGiftCardsContent;
