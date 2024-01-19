import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
import RegistrySubnav from './components/RegistrySubnav';
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
            </div>
            <Footer />
        </>
    );
};

export default Registry;
