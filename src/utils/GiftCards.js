const giftCardsMenu = [
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_eGC_US_1x._CB595403223_.jpg',
        title: 'eGift Cards',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_PaH_US_1x._CB595403223_.jpg',
        title: 'Print at home',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_pGC_US_1x._CB595403223_.jpg',
        title: 'Physical gift cards',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_BGC_US_1x._CB595403223_.jpg',
        title: 'Specialty gift cards',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Reload_US_1x._CB595403223_.jpg',
        title: 'Reload',
    },
];

const byOccasion = [
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Birthday_US_1x._CB595403223_.jpg',
        title: 'Birthday',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_ThankYou_US_1x._CB595403223_.jpg',
        title: 'Thank you',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Celebration_US_1x._CB595403223_.jpg',
        title: 'Congrats',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_NewBaby_US_1x._CB595403223_.jpg',
        title: 'New baby',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Wedding_US_1x._CB595403223_.jpg',
        title: 'Wedding',
    },
];

const byBrand = [
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Google-Play_US_1x._CB599458388_.jpg',
        title: 'Google Play',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Visa_US_1x._CB595403223_.jpg',
        title: 'Visa',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Starbucks_US_1x._CB595403223_.jpg',
        title: 'Starbucks',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Sephora_US_1x._CB595403223_.jpg',
        title: 'Sephora',
    },
    {
        imageSrc:
            'https://m.media-amazon.com/images/G/01/GiftCards/Consumer/GCLP/2023/Q2_Refresh/VX-1125-Q2_GCLP_Nav_Amazon_US_1x._CB595403223_.jpg',
        title: 'Amazon',
    },
];

const navTypes = [
    {
        type: 'gc',
        title: 'https://m.media-amazon.com/images/G/01/GiftCards/GCLP/LOGO_GC_space.png',
        lists: [
            { text: 'Amazon Gift Cards', type: 'agc' },
            { text: 'Specialty Gift Cards', type: 'sgc' },
            { text: 'Redeem Amazon gift cards', type: 'ragc' },
            { text: 'View your balance', type: 'vyb' },
            { text: 'Amazon Reload', type: 'ar' },
        ],
        images: [
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_AGC.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_BGC.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_Reload.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/D_Incentives.jpg',
        ],
        carouselTitle: 'Trending now',
        carouselImgs: [
            {
                id: 'B09RX1DBJP',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51uC7FOrwBL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09KXT1HLH',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/41zRJ1VZdYL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09PF19CNT',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51k5nmRTSRL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B07PCMWTSG',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/41CMZ4XoAJL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09X25CND3',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51R2uK3wpnL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B06WVJBLBQ',
                title: 'Amazon.com Gift Card in a Mini Envelope',
                image: 'https://m.media-amazon.com/images/I/51gGBAHMwtL.AC_SX250.jpg',
                price: '10.00',
                contributor: 'Amazon',
            },
            {
                id: 'B01MSBQB1P',
                title: 'Visa $100 Gift Card (plus $5.95 Purchase Fee)',
                image: 'https://m.media-amazon.com/images/I/51fzVd3I6aL.AC_SX250.jpg',
                price: '105.95',
                contributor: 'Visa',
            },
            {
                id: 'B01MSBQ1P',
                title: 'Visa $100 Gift Card (plus $5.95 Purchase Fee)',
                image: 'https://m.media-amazon.com/images/I/51fzVd3I6aL.AC_SX250.jpg',
                price: '105.95',
                contributor: 'Visa',
            },
            {
                id: 'B09KXT1HLH',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/41zRJ1VZdYL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09PF1CNT',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51k5nmRTSRL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B07PCMWSG',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/41CMZ4XoAJL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09X25CN3',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51R2uK3wpnL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B06WVJBLQ',
                title: 'Amazon.com Gift Card in a Mini Envelope',
                image: 'https://m.media-amazon.com/images/I/51gGBAHMwtL.AC_SX250.jpg',
                price: '10.00',
                contributor: 'Amazon',
            },
            {
                id: 'B01MSBQ1P',
                title: 'Visa $100 Gift Card (plus $5.95 Purchase Fee)',
                image: 'https://m.media-amazon.com/images/I/51fzVd3I6aL.AC_SX250.jpg',
                price: '105.95',
                contributor: 'Visa',
            },
        ],
    },
    {
        type: 'agc',
        title: 'https://m.media-amazon.com/images/G/01/GiftCards/GCLP/LOGO_AGC.png',
        lists: [
            {
                text: 'eGift Cards',
                subcategories: [{ text: 'Animated' }, { text: 'Personalized' }],
            },
            {
                text: 'Physical Gift Cards',
                subcategories: [
                    { text: 'Gift Boxes' },
                    { text: 'Greeting Card' },
                    {
                        text: 'Print at Home',
                        subcategories: [
                            { text: 'Coloring Page' },
                            { text: 'Personalized' },
                        ],
                    },
                ],
            },
            {
                text: 'Shop by Occasion',
                subcategories: [
                    { text: 'Anniversary' },
                    { text: 'Anytime' },
                    { text: 'Baby & Expecting' },
                    { text: 'Birthday' },
                    // ... (other subcategories)
                ],
            },
            { text: 'Featured: Birthday' },
            { text: 'Gift Cards in Spanish' },
        ],
        images: [
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/AGC/D_cat_2c_eGC.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/AGC/D_cat_2c_pGC.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/AGC/D_cat_4c_CIU.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/AGC/D_cat_4c_CIU.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/AGC/D_cat_4c_Coloring.jpg',
            'https://images-na.ssl-images-amazon.com/images/G/01/GiftCards/GCLP/AGC/D_cat_4c_PAH.jpg',
        ],
        carouselScrollTitle: 'Upcoming Events',
        carouselScrollImgs: [
            'https://m.media-amazon.com/images/G/01/GiftCards/GCLP/AGC/Carousel_Holiday_Winter._CB578198795_.jpg',
            'https://m.media-amazon.com/images/G/01/GiftCards/2023/Q4/LNY._CB585985842_.jpg',
            'https://m.media-amazon.com/images/G/01/GiftCards/2023/Q4/Vday._CB585985805_.jpg',
            'https://m.media-amazon.com/images/G/01/GiftCards/2023/Q4/Spring._CB585985842_.jpg',
            'https://m.media-amazon.com/images/G/01/GiftCards/2023/Q4/Easter._CB585985842_.jpg',
            'https://m.media-amazon.com/images/G/01/GiftCards/2023/Q4/Teacher._CB585985805_.jpg',
        ],
        carouselTitle: 'Many ways to say thanks',
        carouselImgs: [
            {
                id: 'B09RX1DBJP',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51uC7FOrwBL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09KXT1HLH',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/41zRJ1VZdYL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09PF19CNT',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51k5nmRTSRL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B07PCMWTSG',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/41CMZ4XoAJL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09X25CND3',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51R2uK3wpnL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B06WVJBLBQ',
                title: 'Amazon.com Gift Card in a Mini Envelope',
                image: 'https://m.media-amazon.com/images/I/51gGBAHMwtL.AC_SX250.jpg',
                price: '10.00',
                contributor: 'Amazon',
            },
            {
                id: 'B01MSBQB1P',
                title: 'Visa $100 Gift Card (plus $5.95 Purchase Fee)',
                image: 'https://m.media-amazon.com/images/I/51fzVd3I6aL.AC_SX250.jpg',
                price: '105.95',
                contributor: 'Visa',
            },
            {
                id: 'B01MSBQ1P',
                title: 'Visa $100 Gift Card (plus $5.95 Purchase Fee)',
                image: 'https://m.media-amazon.com/images/I/51fzVd3I6aL.AC_SX250.jpg',
                price: '105.95',
                contributor: 'Visa',
            },
            {
                id: 'B09KXT1HLH',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/41zRJ1VZdYL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09PF1CNT',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51k5nmRTSRL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B07PCMWSG',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/41CMZ4XoAJL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B09X25CN3',
                title: 'Amazon.com eGift Card',
                image: 'https://m.media-amazon.com/images/I/51R2uK3wpnL.AC_SX250.jpg',
                price: '50.00',
                contributor: 'Amazon',
            },
            {
                id: 'B06WVJBLQ',
                title: 'Amazon.com Gift Card in a Mini Envelope',
                image: 'https://m.media-amazon.com/images/I/51gGBAHMwtL.AC_SX250.jpg',
                price: '10.00',
                contributor: 'Amazon',
            },
            {
                id: 'B01MSBQ1P',
                title: 'Visa $100 Gift Card (plus $5.95 Purchase Fee)',
                image: 'https://m.media-amazon.com/images/I/51fzVd3I6aL.AC_SX250.jpg',
                price: '105.95',
                contributor: 'Visa',
            },
        ],
    },
];

export { giftCardsMenu, byOccasion, byBrand, navTypes };
