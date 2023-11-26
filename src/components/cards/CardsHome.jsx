import Card from '../card/Card';
import './cardsHome.scss';

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
