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
        shopByOccasion: [
            [
                {
                    name: 'Anniversary',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md1_w?bbn=2973103011&rh=n%3A2238192011%2Cp_n_feature_browse-bin%3A2740969011%2Cp_89%3AAmazon&pf_rd_i=2973102011&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=0a3109a7-878c-4bc5-8f3b-b3e509133037&pf_rd_r=WVQ52PQ2A90Y7CWH4Q18&pf_rd_s=merchandised-search-3&pf_rd_t=101&rw_useCurrentProtocol=1&ref=gc_browse_anniversary&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Celebration',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md2_w?k=celebration+gift+card&i=gift-cards&rh=n%3A2238192011%2Cp_89%3AAmazon&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Graduation',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md3_w?bbn=2973114011&rh=n%3A2973114011%2Cp_89%3AAmazon&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Sports',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md4_w?i=gift-cards&rh=n%3A2238192011&s=popularity-rank&hidden-keywords=B0B5QJM7DJ&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
            ],
            [
                {
                    name: 'Anytime',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md1_w?i=gift-cards&bbn=2238192011&rh=n%3A2238192011%2Cp_n_feature_browse-bin%3A2740974011%2Cp_89%3AAmazon&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Congratulations',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md2_w?i=gift-cards&bbn=2973109011&rh=n%3A2973109011%2Cp_n_feature_browse-bin%3A2740974011%2Cp_89%3AAmazon&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Love',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md3_w?i=gift-cards&rh=n%3A2238192011&s=popularity-rank&hidden-keywords=B07641DGK2%7CB0725JBZT1%7CB09PF2B34N%7CB07FL8KSN7%7CB07M6DFHZ6%7CB09RM9CWH7%7CB09PF19CNT%7CB0BRS461KH%7CB09PDZWKK9%7CB09PDZYCLS%7CB09PF658VR%7CB09RM4GSP8%7CB09PDY6MRK%7CB09H72DXXC%7CB0959NP57F%7CB0959JK7DH%7CB0959PP6Q6%7CB09H6YVT97&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Thank You',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md4_w?i=gift-cards&bbn=2238192011&rh=n%3A2238192011%2Cp_n_feature_browse-bin%3A2740972011%2Cp_89%3AAmazon&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
            ],
            [
                {
                    name: 'Baby & Expecting',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md1_w?i=gift-cards&bbn=2238192011&rh=n%3A2238192011%2Cp_n_theme_browse-bin%3A2864191011%2Cp_n_feature_browse-bin%3A2740970011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Friendship',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md2_w?k=friendship+gift+card&i=gift-cards&rh=n%3A2238192011%2Cp_n_theme_browse-bin%3A2864191011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Retirement',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md3_w?i=gift-cards&rh=n%3A2238192011&s=popularity-rank&hidden-keywords=B0B5QMR3PR%7CB01IE42ST4%7CB01K8RMDO0%7CB09RX1DBJP%7CB072F9T6VX%7CB07TLL1H7F%7CB01MDLOM4V%7CB0866RXCBJ&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Wedding',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md4_w?i=gift-cards&bbn=2973128011&rh=n%3A2973128011%2Cp_n_feature_browse-bin%3A2748973011%2Cp_89%3AAmazon&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
            ],
            [
                {
                    name: 'Birthday',
                    url: '/&ref=GC_AGCLP_BDAY_SUB/s/ref=s9_bw_cg_GCLPOCC2_md1_w?i=gift-cards&bbn=2238192011&rh=n%3A2238192011%2Cp_n_feature_browse-bin%3A2740971011%2Cp_n_theme_browse-bin%3A2864191011&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'Get Well',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md2_w?rh=i%3Agift-cards%2Cn%3A2238192011&hidden-keywords=B07MHB9SPK%7CB009WD445I%7CB0B5QMZ47S%7CB0B616TQMZ%7CB0BBMP9TN1%7CB0BXD295YT%7CB0BRLTD6S1%7C&sort=popularity-rank&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
                {
                    name: 'School',
                    url: '/s/ref=s9_bw_cg_GCLPOCC2_md3_w?i=gift-cards&rh=n%3A2238192011&s=popularity-rank&hidden-keywords=B09PDZH7B7%7CB086FNYH28%7CB01MYZ4FNL%7CB09PDZPLL8%7CB09BQTQDJG%7CB01NAFZQPX%7CB086GWT9Q8%7CB06WVJBLBQ%7CB077T9WSSN%7CB06W5SBSL7%7CB0C2TLFJCQ%7CB0C2TPN9CC%7CB0C2TMTSSW%7CB07PCMWTSG%7CB004LLIKVU%7CB09BZ4VF5R%7CB09RX35JF7%7CB0B13ZT755%7CB09BYZKMXZ%7CB0B131K7Y8%7CB09BQTQDJG%7CB09BQSN56N%7CB0B14RFMJL%7CB09RX3DY91%7CB08ZL24H9F%7CB09QQ272VJ%7CB08ZKYFD9F%7CB0B14PJG4K%7CB09X25JVH9%7CB07MDR5TG9%7CB08ZKR512N%7CB08ZKVFQN2%7CB07TLL2SLW%7CB0B13ZMCV1%7CB09QPYYKMK%7CB08ZKYM5CN%7CB08ZKWSL83%7CB0BXD5LHDQ%7CB0C6178LYF%7CB0BXCVDLFT&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=merchandised-search-7&pf_rd_r=BMW5H7RVZDEMKN752VYY&pf_rd_t=101&pf_rd_p=54d3a392-0f4a-4476-8b8e-ab979927cdb4&pf_rd_i=117059571011',
                },
            ],
        ],
    },
];

export { giftCardsMenu, byOccasion, byBrand, navTypes };
