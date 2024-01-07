import Card from './Card';
import './cards.scss';

const CardsHome = ({ data }) => {
    return (
        <div className='cardsHome'>
            {data.map((item, i) => (
                <Card key={i} type={item.type} data={item} />
            ))}
        </div>
    );
};

export default CardsHome;
