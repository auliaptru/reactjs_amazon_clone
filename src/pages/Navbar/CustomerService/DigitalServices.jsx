import Navbar from '../../../components/navbar/Navbar';
import Options from './components/Options';
import Articles from './components/Articles';
import Footer from '../../../components/footer/Footer';
import Search from './components/Search';
import DevicePicker from './components/DevicePicker';
import './digitalServices.scss';

const DigitalServices = () => {
    return (
        <>
            <Navbar />
            <div className='service__content'>
                <div className='service__content-header'>
                    <h1>Digital Services and Device Support</h1>
                    <div className='sc__video'></div>
                    <div className='sc__wrapper'>
                        <Options />
                        <Articles />
                    </div>
                </div>
                <div className='service__content-picker'>
                    <Search />
                    <DevicePicker />
                </div>
                <div className='service__content-footer'>
                    <h2>Additional Resources</h2>
                    <div className='sc__footer-options'>
                        <div className='footer__option'>
                            <img
                                src='https://m.media-amazon.com/images/G/01/support_images/GUID-A7ECC701-DE4A-4948-BBB8-EFD5CBC7FC19=1=en-US=Normal.png'
                                alt='askIcon'
                            />
                            <h3>Ask the Amazon Community</h3>
                            <p>
                                Get answers from other Amazon customers on the
                                Digital and Device Forum.
                            </p>
                            <a href='https://www.amazon.com/gp/redirect.html/ref=hp_ss_fusion_footer_forum?location=https://www.amazonforum.com&token=5E63CC8FE7382CA39F445357CC28A39A7FA43038&source=standards'>
                                Visit the Digital and Device Forum
                            </a>
                        </div>
                        <div className='footer__option'>
                            <img
                                src='https://m.media-amazon.com/images/G/01/support_images/GUID-384C4769-1F42-4A90-BC6B-50FBF811B4CD=1=en-US=Normal.png'
                                alt='chatIcon'
                            />
                            <h3>Start a Chat Now</h3>
                            <p>
                                The bot quickly fixes your problem or connects
                                you to someone who can.
                            </p>
                            <a href='javascript:window.open(%27/message-us?ref_=d2_help_gateway_contact&paradigm=d2-mu-digital&muClientName=d2-mu-digital%27,%20%27mozillaWindow%27,%20%27popup,height=800,width=500%27);'>
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DigitalServices;
