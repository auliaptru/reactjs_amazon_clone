import BadgeDeal from '../../../components/badgeDeal/BadgeDeal';
import './dealsCard.scss';

const DealsCard = ({ products }) => {
    return (
        <div className='deals__grid-container'>
            {products.map((product, i) => (
                <div className='deals__grid-card' key={i}>
                    <div className='deals__grid-img'>
                        <img src={product.image} alt='' />
                    </div>
                    <div className='deals__grid-text'>
                        <BadgeDeal label={product.discount} />
                    </div>
                    <a href={product.link}>
                        <div className='deals__grid-title'>{product.name}</div>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default DealsCard;
