import Navbar from '../../../../components/navbar/Navbar';
import Subnav from '../../../../components/subnav/Subnav';
import Footer from '../../../../components/footer/Footer';
import DgCarousel from './components/DgCarousel';
import { data } from '../../../../utils/DgCarousel.json';
import './digitalDeals.scss';

const DigitalDeals = () => {
    return (
        <>
            <Subnav />
            <div className='digitalDeals'>
                <DgCarousel data={data} />
            </div>
            <Footer />
        </>
    );
};

export default DigitalDeals;
