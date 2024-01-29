import { useState } from 'react';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import CarouselGiftCards from './components/CarouselGiftCards';
import NavType from './components/NavType';
import Subnav from './components/Subnav';
import './giftCards.scss';
import { navTypes } from '../../utils/GiftCards';
import ContentGrid from './components/ContentType';

const GiftCards = () => {
    const [selectedType, setSelectedType] = useState('gc');
    const filteredData = navTypes.filter((data) => data.type === selectedType);

    return (
        <>
            <Navbar />
            <div className='giftCards'>
                <Subnav />
                <CarouselGiftCards />
                <NavType
                    data={filteredData}
                    setSelectedType={setSelectedType}
                />
                <ContentGrid data={filteredData} />
            </div>
            <Footer />
        </>
    );
};

export default GiftCards;
