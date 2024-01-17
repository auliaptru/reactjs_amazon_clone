const navigations = [
    {
        name: 'Books',
        link: '/s?i=stripbooks&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_0',
    },
    {
        name: 'Home & Kitchen',
        link: '/s?i=garden&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_1',
    },
    {
        name: 'Garden & Outdoor',
        link: '/s?i=lawngarden&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_2',
    },
    {
        name: 'Sports & Outdoors',
        link: '/s?i=sporting&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_3',
    },
    {
        name: 'Pet Supplies',
        link: '/s?i=pets&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_4',
    },
    {
        name: 'Office Products',
        link: '/s?i=office-products&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_5',
    },
    {
        name: 'Toys & Games',
        link: '/s?i=toys-and-games&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_6',
    },
    {
        name: 'Industrial & Scientific',
        link: '/s?i=industrial&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_7',
    },
    {
        name: 'Tools & Home Improvement',
        link: '/s?i=tools&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_8',
    },
    {
        name: 'Appliances',
        link: '/s?i=appliances&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_9',
    },
    {
        name: 'Electronics',
        link: '/s?i=electronics&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_10',
    },
    {
        name: 'Clothing, Shoes & Jewelry',
        link: '/s?i=fashion&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_11',
    },
    {
        name: 'Everything Else',
        link: '/s?i=misc&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_12',
    },
    {
        name: 'Health, Household & Baby Care',
        link: '/s?i=hpc&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_13',
    },
    {
        name: 'Cell Phones & Accessories',
        link: '/s?i=mobile&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_14',
    },
    {
        name: 'Arts, Crafts & Sewing',
        link: '/s?i=arts-crafts&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_15',
    },
    {
        name: 'Automotive Parts & Accessories',
        link: '/s?i=automotive&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_16',
    },
    {
        name: 'Baby',
        link: '/s?i=baby-products&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_17',
    },
    {
        name: 'Beauty & Personal Care',
        link: '/s?i=beauty&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_18',
    },
    {
        name: 'Grocery & Gourmet Food',
        link: '/s?i=grocery&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_19',
    },
    {
        name: 'Apps & Games',
        link: '/s?i=mobile-apps&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_20',
    },
    {
        name: 'Home & Business Services',
        link: '/s?i=local-services&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_21',
    },
    {
        name: 'CDs & Vinyl',
        link: '/s?i=popular&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_22',
    },
    {
        name: 'Kindle Accessories',
        link: '/s?i=kindle-accessories&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_23',
    },
    {
        name: 'Musical Instruments',
        link: '/s?i=mi&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_24',
    },
    {
        name: 'Video Games',
        link: '/s?i=videogames&bbn=10158976011&dc&qid=1705288477&ref=sr_nr_i_25',
    },
];

const categories = [
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_01_3362883_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_02_3362884_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_03_3362885_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_04_3362886_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/ZDE0MjRmZmUt/ZDE0MjRmZmUt-NWI5ZjNmNzMt-w440',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_06_3362888_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_07_3362889_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_08_3362890_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_09_3362891_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_10_3362892_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_11_3362893_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_12_3362894_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_13_3362895_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_14_3362896_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_15_3362897_440x440_en_US.jpg',
    'https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2020/img/Warehouse_Deals/XCM_Manual_ORIGIN_1266467_1364969_US_AW_us_warehouse_deals_16_3362898_440x440_en_US.jpg',
];

const sliders = {
    title: 'Best Sellers',
    images: [
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_Vacuums_English_2x._SS600_QL85_.jpg',
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_Monitors_English_2x._SS600_QL85_.jpg',
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_Wearables_English_2x._SS600_QL85_.jpg',
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_Headphones_English_2x._SS600_QL85_.jpg',
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_GraphicsCards_English_2x._SS600_QL85_.jpg',
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_BathroomAccessories_English_2x._SS600_QL85_.jpg',
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_Routers_English_2x._SS600_QL85_.jpg',
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_PhoneCases_English_2x._SS600_QL85_.jpg',
        'https://m.media-amazon.com/images/G/01/warehouse-deals/Subcat_SeeAll_English_2x._SS600_QL85_.jpg',
    ],
};

export { navigations, categories, sliders };
