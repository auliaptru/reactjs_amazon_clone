import { useEffect, useState } from 'react';
import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import {
    dataBox1,
    dataBox2,
    dataBox3,
    aboutLists,
    ecommerceSelling,
} from '../../../utils/Sell';
import BoxSell from './components/BoxSell';
import NavSell from './components/NavSell';
import NavSell2 from './components/NavSell2';
import './sell.scss';

const Sell = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavSticky1, setIsNavSticky1] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (scrollPosition >= 6000 && isNavSticky1) {
            setIsNavSticky1(false);
        } else if ((scrollPosition < 6000) & !isNavSticky1) {
            setIsNavSticky1(true);
        }
    }, [scrollPosition, isNavSticky1]);

    return (
        <>
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

                {isNavSticky1 ? <NavSell2 /> : <NavSell />}

                <div className='sell__business-at-scale'>
                    <BoxSell data={dataBox1} heightImgQuote={11} />
                </div>

                <div className='sell__brand-experience'>
                    <BoxSell data={dataBox2} heightImgQuote={24} />
                </div>

                <div className='sell__brand-experience'>
                    <BoxSell
                        data={dataBox3}
                        heightImgQuote={28}
                        heightBanner={100}
                    />
                </div>

                <div className='sell__caseStudies'>
                    <h1>Brand case studies</h1>
                    <div className='caseStudies__cards'>
                        <div className='caseStudies__card'>
                            <div className='caseStudies__card-img'>
                                <img
                                    src='https://m.media-amazon.com/images/G/01/sell/images/posters/freshly-picked-03-sm.jpg'
                                    alt=''
                                />
                            </div>
                            <div className='caseStudies__card-texts'>
                                <span>Case study</span>
                                <h2>Freshly Picked</h2>
                                <p>
                                    Freshly Picked sells high-end shoes and
                                    accessories for babies, children and their
                                    moms to help make life a little more fun,
                                    colorful and easier.
                                </p>
                            </div>
                        </div>
                        <div className='caseStudies__card'>
                            <div className='caseStudies__card-img'>
                                <img
                                    src='https://m.media-amazon.com/images/G/01/sell/images/posters/hope-and-henry-03-sm.jpg'
                                    alt=''
                                />
                            </div>
                            <div className='caseStudies__card-texts'>
                                <span>Case study</span>
                                <h2>Hope & Henry</h2>
                                <p>
                                    Hope & Henry sells beautiful, high-quality,
                                    and affordable clothing using organic cotton
                                    and sharing profits with the women and men
                                    who sew them.
                                </p>
                            </div>
                        </div>
                        <div className='caseStudies__card'>
                            <div className='caseStudies__card-img'>
                                <img
                                    src='https://m.media-amazon.com/images/G/01/sell/images/posters/new-republic-02-sm.jpg'
                                    alt=''
                                />
                            </div>
                            <div className='caseStudies__card-texts'>
                                <span>Case study</span>
                                <h2>New Republic</h2>
                                <p>
                                    New Republic sells refined styles of men's
                                    footwear and accessories that incorporate
                                    unexpected twists on memorable classics at
                                    affordable prices.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sell__programs'>
                    <div className='sell__programs-wrapper'>
                        <div className='sell__programs-left'>
                            <div className='programs__left-wrapper'>
                                <span>Programs</span>
                                <h1 className='programs__title'>
                                    Unlock a universe of selling opportunities
                                </h1>
                                <p className='programs__desc'>
                                    What type of Amazon seller are you? Play to
                                    your strengths and create your selling
                                    strategy with a variety of programs made to
                                    support your unique business.
                                </p>
                                <div className='programs__button-wrapper'>
                                    <button className='explore__btn'>
                                        Explore programs
                                    </button>
                                    <button className='watch__btn'>
                                        Watch Video
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='sell__programs-right'>
                            <div className='sell__programs-img'>
                                <img
                                    src='https://m.media-amazon.com/images/G/01/sp-marketing-toolkit/guides/design/illustration/sell-universe-3.svg'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='sell__learnMore'>
                    <div className='sell__learnMore-wrapper'>
                        <div className='learnMore__texts'>
                            <h1>Learn more about selling with Amazon</h1>
                            <div className='learnMore-lists-wrapper'>
                                {aboutLists.map((lists, i) => (
                                    <div className='learnMore__lists' key={i}>
                                        {lists.links.map((cate) => (
                                            <div
                                                className='learnMore'
                                                key={cate.id}
                                            >
                                                <a href={cate.url}>
                                                    {cate.title}
                                                </a>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <svg
                        alt=''
                        className='wave-placement-top'
                        height='354px'
                        preserveAspectRatio='none'
                        role='presentation'
                        version='1.1'
                        viewBox='0 0 1440 354'
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
                                d='M0,351.933506 C116,262.863915 341.333333,211.08769 676,196.604829 C1010.66667,182.121969 1265.33333,116.587026 1440,0 L1440,354 L0,353.994109 L0,351.933506 Z'
                                id='Wave'
                                fill='#fff'
                            ></path>
                        </g>
                    </svg>
                </div>

                <div className='sell__ecommerce'>
                    <h1>Introduction to ecommerce selling</h1>
                    <div className='sell__ecommerce-wrapper'>
                        {ecommerceSelling.map((data, i) => (
                            <div className='ecommerce__cards' key={i}>
                                <div className='ecommerce__cards-wrapper'>
                                    {data.data1?.map((card, i) => (
                                        <div
                                            className='ecommerce__card'
                                            key={i}
                                        >
                                            <div className='ecommerce__card-img'>
                                                <img src={card.image} alt='' />
                                            </div>
                                            <h2 className='ecommerce__card-title'>
                                                {card.title}
                                            </h2>
                                            <p className='ecommerce__card-desc'>
                                                {card.content}
                                            </p>
                                            <div className='learnMore'>
                                                <a href={card.link.url}>
                                                    {card.link.text}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='ecommerce__cards-wrapper'>
                                    {data.data2?.map((card, i) => (
                                        <div
                                            className='ecommerce__card'
                                            key={i}
                                        >
                                            <div className='ecommerce__card-img'>
                                                <img src={card.image} alt='' />
                                            </div>
                                            <h2 className='ecommerce__card-title'>
                                                {card.title}
                                            </h2>
                                            <p className='ecommerce__card-desc'>
                                                {card.content}
                                            </p>
                                            <div className='learnMore'>
                                                <a href={card.link.url}>
                                                    {card.link.text}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className='ecommerce__cards-wrapper'>
                                    {data.data3?.map((card, i) => (
                                        <div
                                            className='ecommerce__card'
                                            key={i}
                                        >
                                            <div className='ecommerce__card-img'>
                                                <img src={card.image} alt='' />
                                            </div>
                                            <h2 className='ecommerce__card-title'>
                                                {card.title}
                                            </h2>
                                            <p className='ecommerce__card-desc'>
                                                {card.content}
                                            </p>
                                            <div className='learnMore'>
                                                <a href={card.link.url}>
                                                    {card.link.text}
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className='sell__signUp'>
                    <div className='sell__signUp-wrapper'>
                        <div className='sell__signUp-top'>
                            <span>Just have a few items to sell?</span>
                            <div className='learnMore'>
                                <a href=''>
                                    Sign up to become an individual seller
                                </a>
                            </div>
                        </div>
                        <div className='sell__signUp-bottom'>
                            <div className='signUp__box'>
                                <div className='signUp__box-left'>
                                    <h1>Start selling today</h1>
                                    <p>
                                        Put your products in front of the
                                        millions of customers who search
                                        Amazon.com every day.
                                    </p>
                                    <a href='/register'>
                                        <button>Sign up</button>
                                    </a>
                                    <span>$39.99 a month + selling fees</span>
                                </div>
                                <div className='signUp__box-right'>tex</div>
                            </div>
                            <div className='signUp__img'>
                                <img
                                    src='https://m.media-amazon.com/images/G/01/sell/images/prime-boxes/prime-boxes-6-sm.png'
                                    alt=''
                                />
                            </div>
                        </div>
                    </div>
                    <svg
                        alt=''
                        className='wave-placement-bottom wave-flip'
                        height='354px'
                        preserveAspectRatio='none'
                        role='presentation'
                        version='1.1'
                        viewBox='0 0 1440 354'
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
                                d='M0,351.933506 C116,262.863915 341.333333,211.08769 676,196.604829 C1010.66667,182.121969 1265.33333,116.587026 1440,0 L1440,354 L0,353.994109 L0,351.933506 Z'
                                id='Wave'
                                fill='#fff'
                            ></path>
                        </g>
                    </svg>
                </div>

                <div className='sell__footer-text'>
                    <span>
                        <sup> 1</sup> Amazon internal data, FY2021 survey of
                        21.2K U.S. multichannel sellers
                    </span>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Sell;
