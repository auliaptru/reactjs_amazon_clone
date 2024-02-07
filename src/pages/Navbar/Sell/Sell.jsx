import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import BoxSell from './components/BoxSell';
import NavSell from './components/NavSell';
import NavSell2 from './components/NavSell2';
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
                                <h3 className='review__quote'>
                                    "I’ve actually been really impressed—and
                                    kind of surprised, quite frankly—at how much
                                    Amazon has helped us build the brand; not
                                    just on Amazon, but outside of Amazon."
                                </h3>
                                <div className='review__founder'>
                                    <div className='founder__img'>
                                        <img
                                            src='https://m.media-amazon.com/images/G/01/sell/images/headshots/mmccauley-2x.png'
                                            alt=''
                                        />
                                    </div>
                                    <div className='founder__name-wrapper'>
                                        <span className='founder__name'>
                                            Matt McCauley
                                        </span>
                                        <span className='founder__title'>
                                            Co-Founder
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className='review__discovery-stats'>
                                <div className='stats__first'>
                                    <h3>
                                        <strong>74%</strong>
                                    </h3>
                                    <p>
                                        of Amazon Customers use Amazon to
                                        discover new products or brands
                                    </p>
                                </div>
                                <div className='stats__second'>
                                    <h3>
                                        <strong>500K</strong>
                                    </h3>
                                    <p>
                                        brands are in Brand Registry, unlocking
                                        our powerful tools
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sell__incentives'>
                    <div className='sell__incentives-left'>
                        <button>
                            <div className='icon'>
                                <img
                                    src='https://m.media-amazon.com/images/G/01/sell/images/icon-magic-sparkle-white.svg'
                                    alt=''
                                />
                            </div>
                            <span>New Seller Incentives</span>
                            <div className='icon'>
                                <img
                                    src='https://m.media-amazon.com/images/G/01/sell/images/icon-magic-sparkle-white.svg'
                                    alt=''
                                />
                            </div>
                        </button>
                        <h1>Over $50K in potential benefits</h1>
                        <p>
                            Ready to sell? Launch your brand today with a
                            powerful playbook for new sellers and over $50K in
                            potential benefits.
                        </p>
                        <div className='incentives__benefits'>
                            <div className='incentives__benefits-wrapper'>
                                <div className='checkIcon'>
                                    <img
                                        src='https://m.media-amazon.com/images/G/01/sell/images/icon-check-blue-thick.svg'
                                        alt=''
                                    />
                                </div>
                                <span>
                                    Get 5% back on your first $1,000,000 in
                                    branded sales
                                </span>
                            </div>
                            <div className='incentives__benefits-wrapper'>
                                <div className='checkIcon'>
                                    <img
                                        src='https://m.media-amazon.com/images/G/01/sell/images/icon-check-blue-thick.svg'
                                        alt=''
                                    />
                                </div>
                                <span>
                                    Try FBA with free inbound shipping, storage,
                                    removals, and returns
                                </span>
                            </div>
                            <div className='incentives__benefits-wrapper'>
                                <div className='checkIcon'>
                                    <img
                                        src='https://m.media-amazon.com/images/G/01/sell/images/icon-check-blue-thick.svg'
                                        alt=''
                                    />
                                </div>
                                <span>
                                    Get $50 credit for Sponsored Products CPC
                                    ads—bids are up to you
                                </span>
                            </div>
                            <div className='incentives__benefits-wrapper'>
                                <div className='checkIcon'>
                                    <img
                                        src='https://m.media-amazon.com/images/G/01/sell/images/icon-check-blue-thick.svg'
                                        alt=''
                                    />
                                </div>
                                <span>
                                    Get a head start on brand protection,
                                    <a href='' className='underlineTransition'>
                                        product reviews,
                                    </a>
                                    and more
                                </span>
                            </div>
                            <div className='learnMore'>
                                <a href='https://sell.amazon.com/grow?initialSessionID=133-7716221-4439163&ld=AZUSSOA-sell'>
                                    Learn More
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className='sell__incentives-right'>
                        <img
                            src='https://m.media-amazon.com/images/G/01/sell/images/illustration/illustration-growth-graph.svgg'
                            alt=''
                        />
                    </div>
                </div>
                <NavSell2 />
                <BoxSell />
            </div>
            <Footer />
        </>
    );
};

export default Sell;
