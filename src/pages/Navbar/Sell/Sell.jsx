import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import NavSell from './components/NavSell';
import './sell.scss';

const Sell = () => {
    return (
        <>
            <Navbar />
            <div className='sell'>
                <NavSell />
                <div className='sell__banner'>
                    <div className='sell__banner-texts'>
                        <h1 className='sell__banner-title'>
                            Start selling with Amazon
                        </h1>
                        <p className='sell__banner-desc'>
                            The fastest-growing and preferred acquisition
                            channel for over half our multichannel sellers.
                            <sup>1</sup>
                        </p>
                        <button className='btn-orange sell__banner-btn'>
                            Sign up
                        </button>
                        <span className='sell__banner-text'>
                            $39.99 a month + selling fees
                        </span>
                    </div>
                    <div className='sell__banner-img'>
                        <img
                            src='https://m.media-amazon.com/images/G/01/sell/images/homepage-hero-image-03-sm.png'
                            alt=''
                        />
                    </div>
                    <svg
                        className='sell__banner-wave'
                        alt=''
                        height='278px'
                        preserveAspectRatio='none'
                        role='presentation'
                        version='1.1'
                        viewBox='0 0 1440 278'
                        width='1440px'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <g
                            id='Sandbox'
                            stroke='none'
                            strokeWidth='1'
                            fill='none'
                            fillRule='evenodd'
                        >
                            <path
                                d='M0,260.670469 C268,291.980818 533.333333,258.847538 796,161.270627 C1058.66667,63.6937169 1273.33333,9.93684108 1440,0 L1440,278 L0,278 L0,260.670469 Z'
                                id='Path-8'
                                fill='#fff'
                                transform='translate(720.000000, 139.000000) scale(-1, 1) translate(-720.000000, -139.000000) '
                            ></path>
                        </g>
                    </svg>
                </div>
                <div className='sell__brand-review'>
                    <div className='sell__video'>
                        <div className='sell__video-wrapper'>
                            <div className='sell__video-play'></div>
                        </div>
                    </div>
                    <div className='sell__review-texts'>
                        <div className='sell__review-wrapper'>
                            <div className='hh__logo'>
                                <div className='hh__logo-wrapper'>
                                    <img
                                        src='https://m.media-amazon.com/images/G/01/sell/images/HH-Logo-white.svg'
                                        alt=''
                                    />
                                </div>
                            </div>
                            <div className='border__container'>
                                <div className='border__img'></div>
                            </div>
                            <div className='review__text-wrapper'>
                                <h3 className='review__text'>
                                    "I’ve actually been really impressed—and
                                    kind of surprised, quite frankly—at how much
                                    Amazon has helped us build the brand; not
                                    just on Amazon, but outside of Amazon."
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Sell;
