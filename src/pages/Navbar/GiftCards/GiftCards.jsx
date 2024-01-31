import { useState } from 'react';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import WideCarousel from './components/WideCarousel';
import NavType from './components/NavType';
import Subnav from './components/Subnav';
import ContentGrid from './components/GiftCardsContent';
import { navTypes } from '../../../utils/GiftCards';
import './giftCards.scss';

const GiftCards = () => {
    const [selectedType, setSelectedType] = useState('gc');
    const filteredData = navTypes.filter((data) => data.type === selectedType);

    return (
        <>
            <Navbar />
            <div className='giftCards'>
                <Subnav />
                <WideCarousel />
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
