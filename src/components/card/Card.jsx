import './card.scss';

const Card = ({ data, type }) => {
    const { title, images, promo, name, image, button_text } = data;
    return (
        <div className={`card ${type}`}>
            <h1>{title}</h1>
            <div className='card__images'>
                {type === 'card-1-image' && (
                    <div className='single-image'>
                        <img className='card__image' src={images} alt='' />
                    </div>
                )}
                {type === 'card-4-images' && (
                    <div className='card-4-images__wrapper'>
                        {images.map((item, i) => (
                            <div className='four-images' key={i}>
                                <img
                                    className='card__image'
                                    src={item.img}
                                    alt=''
                                />
                                <p className='card__image-name'>{item.name}</p>
                            </div>
                        ))}
                    </div>
                )}
                {type === 'card-promo' && (
                    <div className='card-promo'>
                        <div className='card-promo__image'>
                            <img
                                className='card__image contain'
                                src={images}
                                alt=''
                            />
                        </div>
                        <div className='card-promo__texts'>
                            <div className='texts__wrapper'>
                                <span>{promo.text1}</span>
                                <span>{promo.text2}</span>
                            </div>
                            <span>{promo.text3}</span>
                        </div>
                    </div>
                )}
                {type === 'card-1-large-3-cards' && (
                    <div className='card-1-large-3-cards'>
                        <div className='lg-image'>
                            <img src={image} alt='' />
                            <p>{name}</p>
                        </div>
                        <div className='three-image'>
                            {images.map((item, i) => (
                                <div className='images' key={i}>
                                    <img
                                        className='card__image'
                                        src={item.img}
                                        alt='Product'
                                    />
                                    <p className='card__image-name'>
                                        {item.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
            <button className='card__btn'>{button_text}</button>
        </div>
    );
};

export default Card;
