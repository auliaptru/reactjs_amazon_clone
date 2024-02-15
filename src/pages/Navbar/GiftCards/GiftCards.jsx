import { useState } from 'react';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import WideCarousel from './components/WideCarousel';
import NavType from './components/NavType/NavType';
import Subnav from './components/GiftCardsSubnav/Subnav';
import { navTypes } from '../../../utils/GiftCards';
import './giftCards.scss';
import SelectedNav from './components/NavType/SelectedNav';

const GiftCards = () => {
    const [selectedType, setSelectedType] = useState('gc');
    const filteredData = navTypes.filter((data) => data.type === selectedType);

    return (
        <>
            <div className='giftCards'>
                <Subnav />
                <WideCarousel />
                <NavType
                    data={filteredData}
                    setSelectedType={setSelectedType}
                />
                <SelectedNav selectedNav={selectedType} data={filteredData} />
            </div>
            <Footer />
        </>
    );
};

export default GiftCards;
