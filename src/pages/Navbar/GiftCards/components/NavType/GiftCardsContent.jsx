import MultipleItemCarousel from '../../../../../components/carousel/MultipleItemCarousel';
import './giftCardsContent.scss';

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

const GiftCardsContent = ({ data }) => {
    const images = data.map((navType) => navType.images).flat();
    const dataCarousel = data.map((navType) => navType.carouselImgs).flat();

    return (
        <div className='giftCards'>
            <div className='giftCards__images'>
                <div className='giftCards__images-wrapper'>
                    {images.map((img, i) => (
                        <div key={i} className='giftCards__image'>
                            <a href='#'>
                                <img src={img} alt='' />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            <div className='giftCards__carousel'>
                <h2>{data.map((item) => item.carouselTitle)}</h2>
                <MultipleItemCarousel
                    data={dataCarousel}
                    content={CarouselData}
                    displayedItems={7}
                    widthItem={178}
                    gapItem={18}
                    setNumPage='0'
                />
            </div>
            <div className='giftCards__grid'>
                <div className='giftCards__grid-image'>
                    <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_tile_3c_1_redeem.jpg'
                        alt=''
                    />
                </div>
                <div className='giftCards__grid-image'>
                    <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_tile_3c_2_balance.jpg'
                        alt=''
                    />
                </div>
                <div className='giftCards__grid-image'>
                    <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_tile_3c_3_autoreload.jpg'
                        alt=''
                    />
                </div>
            </div>
            <div className='giftCards__lm'>
                <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_Fraud.jpg'
                    alt=''
                />
            </div>
            <div className='giftCards__texts'>
                <h2>Frequently Asked Questions</h2>
                <h4>What can Amazon Gift Cards be redeemed towards?</h4>
                <p>
                    Amazon Gift Cards are redeemable towards the purchase of
                    millions of eligible goods and services provided by
                    Amazon.com Services LLC and its affiliates on
                    www.amazon.com, or certain of its affiliated properties,
                    such as smile.amazon.com. Eligible goods and services are
                    subject to change in our sole discretion.
                </p>
                <h4>Are there any shipping costs on Amazon Gift Cards?</h4>
                <p>
                    Physical Amazon.com gift cards (except Anytime Gift Cards)
                    are delivered with FREE One-Day shipping when you select
                    One-Day shipping at checkout. For more information, check
                    this page.
                </p>
                <h4>
                    Are there any fees or expiration date to use Amazon Gift
                    Cards?
                </h4>
                <p>Amazon Gift Cards have no fees and no expiration date.</p>
                <h4>
                    Someone has asked me to pay them with a gift card. Is this a
                    scam?
                </h4>
                <p>
                    Beware of gift card scams. Do not provide any gift card
                    details (such as the claim code) to someone you do not know
                    or trust. Never use Amazon.com Gift Cards for payment
                    outside of Amazon or its affiliated stores, and never use
                    gift cards for other retailers and brands outside of their
                    stores. Please visit this page for information or if you
                    think you have been the target of a gift card scam.
                </p>
            </div>
        </div>
    );
};

export default GiftCardsContent;
