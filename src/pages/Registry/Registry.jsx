import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import RegistryBenefits from './components/RegistryBenefits';
import RegistrySearch from './components/RegistrySearch';
import RegistrySubnav from './components/RegistrySubnav';
import RegistryTypes from './components/RegistryTypes';
import './registry.scss';

const Registry = () => {
    return (
        <>
            <Navbar />
            <div className='registry'>
                <div className='registry__subnav'>
                    <RegistrySubnav />
                </div>
                <div className='registry__header'>
                    <div className='registry__header-img'>
                        <img
                            src='https://m.media-amazon.com/images/G/01/home/awr/2023_Projects/GiftLists/CGL21_A009_OwnerViewHeader_GenderNeutralGifting_421.jpg'
                            alt=''
                        />
                    </div>
                    <div className='registry__header-text'>
                        <div className='text__wrapper'>
                            <h1>Unwrap joyful possibilities</h1>
                            <p>
                                For weddings, babies, birthdays, or any life
                                event, registries and gift lists ensure the
                                perfect gifts.{' '}
                            </p>
                            <button>Create a registry or gift list </button>
                        </div>
                    </div>
                </div>
                <RegistrySearch />
                <RegistryTypes />
                <div className='registry__banner'>
                    <img
                        src='https://m.media-amazon.com/images/G/01/US-hq/2024/img/Home/XCM_CUTTLE_1684200_3588186_1500x100_en_US._CB585771562_.jpg'
                        alt=''
                    />
                </div>
                <RegistryBenefits />
            </div>
            <Footer />
        </>
    );
};

export default Registry;
