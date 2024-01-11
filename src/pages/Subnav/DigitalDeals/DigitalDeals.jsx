import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import DgCarousel from './components/DgCarousel';
// import { software } from '../../../../utils/DgCarousel';

import './digitalDeals.scss';
import { data } from '../../../utils/DgCarousel.json';
import Subnav from '../../../components/subnav/Subnav';

const DigitalDeals = () => {
    return (
        <>
            <Navbar />
            <Subnav />
            <div className='digitalDeals'>
                <DgCarousel data={data} />
            </div>
            <Footer />
        </>
    );
};

export default DigitalDeals;
