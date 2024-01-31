import Navbar from '../../../components/navbar/Navbar';
import HelpContent from './components/HelpContent';
import Footer from '../../../components/footer/Footer';
import { issueData } from '../../../utils/CustomerService';
import './customerService.scss';

const CustomerService = () => {
    return (
        <>
            <Navbar />
            <div className='cs'>
                <div className='cs__nav'>
                    <div className='cs__nav-title'>
                        <a href=''>Customer Service</a>
                    </div>
                    <div className='cs__nav-item active'>
                        <a href=''>Home</a>
                    </div>
                    <div className='cs__nav-item'>
                        <a href='/customer/digital-services' target='_blank'>
                            Digital Services and Device Support
                        </a>
                    </div>
                </div>
                <div className='cs__container'>
                    <h1>Welcome to Amazon Customer Service</h1>
                    <p>
                        What would you like help with today? You can quickly
                        take care of most things here, or connect with us when
                        needed.
                    </p>
                    <div className='cs__issue'>
                        <div className='cs__issue-cards'>
                            {issueData.map((data, i) => (
                                <div className='cs__issue-card' key={i}>
                                    <div className='card__icon'>
                                        <img src={data.imgUrl} alt='' />
                                    </div>
                                    <div className='card__desc'>
                                        <span>{data.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <HelpContent />
            </div>
            <Footer />
        </>
    );
};

export default CustomerService;
