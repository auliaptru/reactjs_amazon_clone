import Footer from '../../../../components/footer/Footer';
import Navbar from '../../../../components/navbar/Navbar';
import Contents from './Contents';
import Sidenav from './Sidenav';
import Subnav from './Subnav';
import './warehouse.scss';

const Warehouse = () => {
    return (
        <>
            <Navbar />
            <Subnav />
            <div className='warehouse'>
                <div className='warehouse__left'>
                    <Sidenav />
                </div>
                <div className='warehouse__right'>
                    <Contents />
                </div>
            </div>
            <Footer isFooterTop={false} />
        </>
    );
};

export default Warehouse;
