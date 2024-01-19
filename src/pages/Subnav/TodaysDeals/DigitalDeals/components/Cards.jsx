import BadgeDeal from '../../../../../components/badgeDeal/BadgeDeal';
import './cards.scss';

const Cards = ({ item }) => {
    return (
        <div className='product__card'>
            {item.products.map((product, index) => (
                <li className='product' key={index}>
                    <a href={product.link}>
                        <div className='product__img'>
                            <img src={product.imageURL} alt='' />
                        </div>
                    </a>
                    <div className='product__deal'>
                        <BadgeDeal
                            label={product.discountPercentage}
                            dealType={product.dealType}
                        />
                    </div>
                    <div className='product__name'>
                        <p>
                            <a href={product.link}>{product.name}</a>
                        </p>
                    </div>
                </li>
            ))}
        </div>
    );
};

export default Cards;
