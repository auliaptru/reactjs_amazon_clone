import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import CarouselGiftCards from './components/CarouselGiftCards';
import Subnav from './components/Subnav';
import './giftCards.scss';

const GiftCards = () => {
    return (
        <>
            <Navbar />
            <div className='giftCards'>
                <Subnav />
                <CarouselGiftCards />
            </div>
            <Footer />
        </>
    );
};

export default GiftCards;
