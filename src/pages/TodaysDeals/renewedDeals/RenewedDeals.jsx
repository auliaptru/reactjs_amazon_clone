import Footer from '../../../components/footer/Footer';
import Navbar from '../../../components/navbar/Navbar';
import ProductGrid from '../../../components/productGrid/ProductGrid';
import CouponsCard from '../components/CouponsCard';
import DealsCard from '../components/DealsCard';
import Filter from '../components/Filter';
import './renewedDeals.scss';

const data = [
    {
        name: 'Renewed Coupons',
        link: 'See all Renewed coupons',
        items: [
            {
                title: 'UTV ATV SXS Turn Signal Kit, Street Legal Kit with Toggle Switch 110DB Horn Amber LED Light Flasher Relay Wiring Harness, Compatible with Pioneer Can-Am Polaris RZR',
                image: 'https://m.media-amazon.com/images/I/71rT4jhXidL.jpg',
                couponDetails: {
                    saving: '$10.00 at checkout',
                    couponLink: '/promotion/psp/A2C1EYUPE9XDGW',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A2C1EYUPE9XDGW',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'Official Creality Falcon 2 Laser Engraver, 40W Output Laser Engraver Machine, DIY Laser Cutter and Engraver Machine with Air Assist, 25000mm/min Speed Laser Engrave for Wood, Metal, Acrylic, Leather',
                image: 'https://m.media-amazon.com/images/I/717jSPbidKL.jpg',
                couponDetails: {
                    saving: '$409.00 at checkout',
                    couponLink: '/promotion/psp/AXREI7SXU5S29',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/AXREI7SXU5S29',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'Furinno Collins Curtain 52x84 inches, White,FC66004WH',
                image: 'https://m.media-amazon.com/images/I/81+9U+koerL.jpg',
                couponDetails: {
                    saving: '$10.50 at checkout',
                    couponLink: '/promotion/psp/A257VKDYNHEXTN',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A257VKDYNHEXTN',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: "SISGEM 14K Real Gold Flower Bracelet for Women Girls,Yellow Gold Exquisite Lotus Pearl Bracelet/Daisy Heart Bracelet/Sunflower Bracelet Anklet Anniversary Birthday Gifts for Her 6.5''+1''+1''",
                image: 'https://m.media-amazon.com/images/I/51e-V5m0XAL.jpg',
                couponDetails: {
                    saving: '$10.00 at checkout',
                    couponLink: '/promotion/psp/A3J9CORJ3ACTVR',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A3J9CORJ3ACTVR',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'Armen Living Koala/Clip/Camino Modern Outdoor Patio Dining Set, 6 Piece, Dark Eucalyptus/Grey Rope',
                image: 'https://m.media-amazon.com/images/I/71cYlZoAJ4L.jpg',
                couponDetails: {
                    saving: '$559.00 at checkout',
                    couponLink: '/promotion/psp/A3QAX9FPF1BO71',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A3QAX9FPF1BO71',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'Cell Phone Signal Booster,Cell Phone Booster for Home,Band 5/12/13/17/4/66, Up to 5,000 Sq ft, Boost 3G 4G 5G Voice & Data for All US Carriers, FCC Approved',
                image: 'https://m.media-amazon.com/images/I/61cd1Zyh+wL.jpg',
                couponDetails: {
                    saving: '$32.00 at checkout',
                    couponLink: '/promotion/psp/A1SN5F5GZSJFD8',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A1SN5F5GZSJFD8',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'VIAGDO Queen Bed Frame with Storage, LED Bed Frame Queen Size with Charging Station, Upholstered Headboard with Hidden Storage and 2-Tier Shelves, Sturdy Metal Slats, No Box Spring Needed, Noise Free',
                image: 'https://m.media-amazon.com/images/I/81cxqyTO+PL.jpg',
                couponDetails: {
                    saving: '$28.00 at checkout',
                    couponLink: '/promotion/psp/AOZRT34ODHQKR',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/AOZRT34ODHQKR',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'Kumi Smart Watches for Men, 1.43" AMOLED Smartwatch for Android iPhone, Answer/Make Call & Voice Assistant, 24H Heart Rate, Sleep Monitor, Activity Trackers, 100+ Sport Modes, IP68 Waterproof, Black',
                image: 'https://m.media-amazon.com/images/I/71k+FcOxB8L.jpg',
                couponDetails: {
                    saving: '$25.00 at checkout',
                    couponLink: '/promotion/psp/A1438STB9RLBH2',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A1438STB9RLBH2',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'Superior Cotton Blend Bed Sheet Set, Elegant Bedding, 6-Piece Set Includes 1 Elastic Deep Pocket Fitted Bedsheet, 1 Flat Sheet, 4 Pillowcases, Modern Sateen Weave - King, Lavender',
                image: 'https://m.media-amazon.com/images/I/81xF1vlZIrL.jpg',
                couponDetails: {
                    saving: '$42.00 at checkout',
                    couponLink: '/promotion/psp/A3LH86G8DM0PGC',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A3LH86G8DM0PGC',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'wuyule 2HP 110V 20" Chicken Plucker Machine, Chicken Feather Plucker, Poultry Plucker Machine, Automatic Chicken Plucker - Ideal for Poultry Chicken, Bird, Duck, Turkey, Quail',
                image: 'https://m.media-amazon.com/images/I/715hLslKenL.jpg',
                couponDetails: {
                    saving: '$40.00 at checkout',
                    couponLink: '/promotion/psp/A17QAE7O8SBKX5',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A17QAE7O8SBKX5',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
            {
                title: 'Raised Toilet Seat with Handles and Back, 330lb Over The Toilet Commode with 5L Foldable Bucket, 4-in-1 Adjustable Adult Potty Chair, Over The Toilet Commode with Arms for Elderly, Pregnant, Disabled',
                image: 'https://m.media-amazon.com/images/I/71LwfVjNsjL.jpg',
                couponDetails: {
                    saving: '$20.00 at checkout',
                    couponLink: '/promotion/psp/A1QDP8RPL9CWRK',
                    couponStatus: 'Clip Coupon',
                    clippedLink: '/promotion/psp/A1QDP8RPL9CWRK',
                    clipFailedMessage:
                        'Coupon is currently not available. Please try other coupons.',
                },
            },
        ],
    },
];

const avaliability = ['all deals', 'available', 'upcoming'];
const departments = [
    'Amazon Devices & Accessories',
    'Computers & Accessories',
    'Electronics',
    'Tools & Home Improvement',
];

const products = [
    {
        name: 'Certified Refurbished eero WiFi routers and range extenders',
        img: 'https://m.media-amazon.com/images/I/71gt120ApqL._AC_UF226,226_FMjpg_.png',
        discount: 36,
    },
    {
        name: 'Honeywell Home Thermostats Renewed',
        img: 'https://m.media-amazon.com/images/I/419TiCXsO-L._AC_UF226,226_FMjpg_.jpg',
        discount: 38,
    },
];
const RenewedDeals = () => {
    return (
        <>
            <Navbar />
            <div className='renewedDeals'>
                <h1>Deals on like-new products on Amazon Renewed </h1>
                <p>
                    Products on Amazon Renewed have been inspected and tested by
                    qualified suppliers to work and look like new, and come with
                    the Amazon Renewed Guarantee. Get great deals on
                    smartphones, computers, laptops, tablets, home and kitchen
                    appliances, game consoles, office products, and more.
                </p>
                <div className='renewedDeals__coupons'>
                    <CouponsCard
                        data={data}
                        widthSlide='100%'
                        widthCard='175px'
                        widthCarousel={205}
                    />
                </div>
                <div className='renewedDeals__wrapper'>
                    <div className='renewedDeals__products'>
                        <ProductGrid
                            filterComponents={
                                <Filter
                                    availability={avaliability}
                                    departments={departments}
                                />
                            }
                            gridComponents={<DealsCard products={products} />}
                        />
                    </div>
                    <div className='renewedDeals__pagination'>
                        <ul>
                            <li>
                                <span></span>
                                <button className='disabled'>Previous</button>
                            </li>
                            <li>
                                <button className='disabled'>1</button>
                            </li>
                            <li>
                                <span></span>
                                <button className='disabled'>Next</button>
                            </li>
                        </ul>
                        <div className='pagination__link'>
                            <span>
                                <a href='#'>Restrictions apply</a>
                            </span>
                        </div>
                    </div>
                    <div className='renewedDeals__img2'>
                        <img
                            src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Certified_Refurbished/XCM_Manual_1228189_1199690_US_us_evergreen_gg_shop_all_us_en_3133593_1500x150_en_US.jpg'
                            alt=''
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default RenewedDeals;
