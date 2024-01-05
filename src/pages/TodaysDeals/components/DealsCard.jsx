import './dealsCard.scss';
// import { products } from '../../../utils/DealsProducts.json';

const DealsCard = ({ products }) => {
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
        </div>
    );
};

export default DealsCard;
