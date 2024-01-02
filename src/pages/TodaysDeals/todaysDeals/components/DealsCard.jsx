import './dealsCard.scss';
import { products } from '../../../../utils/DealsProducts.json';

const DealsCard = () => {
    return (
        <div className='deals__grid-container'>
            {products.map((product, i) => (
                <div className='deals__grid-card' key={i}>
                    <div className='deals__grid-img'>
                        <img src={product.img} alt='' />
                    </div>
                    <div className='deals__grid-text'>
                        {product.discount ? (
                            <div className='text__discount'>
                                <span className='discount'>Up to 35% off</span>
                                <span>Deals</span>
                            </div>
                        ) : (
                            <span>Deal</span>
                        )}
                    </div>
                    <div className='deals__grid-title'>
                        <p>{product.name}</p>
                    </div>
                </div>
            ))}
            {/* <div className='deals__grid-card'>
                <div className='deals__grid-img'>
                    <img
                        src='https://m.media-amazon.com/images/I/419TiCXsO-L._AC_UF226,226_FMjpg_.jpg'
                        alt=''
                    />
                </div>
                <div className='deals__grid-text'>
                    <span className='discount'>Up to 35% off</span>{' '}
                    <span>Deals</span>
                </div>
                <div className='deals__grid-title'>
                    <p>Home Products from Amazon Brands</p>
                </div>
            </div>
            <div className='deals__grid-card'>
                <div className='deals__grid-img'>
                    <img
                        src='https://m.media-amazon.com/images/I/419TiCXsO-L._AC_UF226,226_FMjpg_.jpg'
                        alt=''
                    />
                </div>
                <div className='deals__grid-text'>
                    <span className='discount'>Up to 35% off</span>{' '}
                    <span>Deals</span>
                </div>
                <div className='deals__grid-title'>
                    <p>Home Products from Amazon Brands</p>
                </div>
            </div>
            <div className='deals__grid-card'>
                <div className='deals__grid-img'>
                    <img
                        src='https://m.media-amazon.com/images/I/419TiCXsO-L._AC_UF226,226_FMjpg_.jpg'
                        alt=''
                    />
                </div>
                <div className='deals__grid-text'>
                    <span className='discount'>Up to 35% off</span>{' '}
                    <span>Deals</span>
                </div>
                <div className='deals__grid-title'>
                    <p>Home Products from Amazon Brands</p>
                </div>
            </div> */}
        </div>
    );
};

export default DealsCard;
