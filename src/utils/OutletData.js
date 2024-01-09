const products = [
    {
        name: 'GoWISE USA 1700-Watt 5.8-QT 8-in-1 Digital Air Fryer with Recipe Book, Black',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/61TppnY3pgL._AC_UL160_SR160,160_.jpg',
        rating: '4.6 out of 5 stars',
        reviews: 34160,
        price: {
            whole: 59,
            friction: 88,
            list: 119.99,
            discountPercentage: '50% off',
        },
        link: 'https://www.amazon.com/GoWISE-USA-5-8-Quarts-Electric-Recipes/dp/B0777RJG6D/ref=outlet_zeitgeist_17851393011_1/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B0777RJG6D&outlet=1&psc=1',
    },
    {
        name: 'SALT Stainless Steel Flat Coarse Grater',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/417lx8QxUvL._AC_UL160_SR160,160_.jpg',
        rating: '4.7 out of 5 stars',
        reviews: 1181,
        price: {
            whole: 4,
            friction: 63,
            typical: 5.37,
            discountPercentage: '14% off',
        },
        link: 'https://www.amazon.com/SALT-Stainless-Steel-Coarse-Grater/dp/B077DD1TFR/ref=outlet_zeitgeist_17851393011_2/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B077DD1TFR&outlet=1&psc=1',
    },
    {
        name: 'Mueller Coffee Canister Stainless Steel Container for Coffee Beans or Grounds, Tea, Sugar, Rice - Day and Month Tracker, Built-In Calendar Wheel - 21oz Capacity - Stainless Steel Spoon Included',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/81OexoFUTEL._AC_UL160_SR160,160_.jpg',
        rating: '4.7 out of 5 stars',
        reviews: 417,
        price: {
            whole: 11,
            friction: 76,
            typical: 16.8,
            discountPercentage: '30% off',
        },
        link: 'https://www.amazon.com/Mueller-Canister-Stainless-Container-Grounds/dp/B09RQYR9NQ/ref=outlet_zeitgeist_17851393011_3/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B09RQYR9NQ&outlet=1&psc=1',
    },
    {
        name: "Hallmark Plaid Shirt Box Bundle (12 Boxes, 3 Designs) Blue, Green, Red Plaid, Black Buffalo Check for Valentine's Day, Birthdays, Father's Day",
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/91NmdlmsaOL._AC_UL160_SR160,160_.jpg',
        rating: '4.7 out of 5 stars',
        reviews: 3288,
        price: {
            whole: 12,
            friction: 89,
            list: 14.99,
            discountPercentage: '14% off',
        },
        link: 'https://www.amazon.com/Hallmark-0005XBC1124-Required-Shirt-Plaid/dp/B088SKMR64/ref=outlet_zeitgeist_17851393011_4/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B088SKMR64&outlet=1&psc=1',
    },
    {
        name: 'BELLA Rapid Electric Egg Cooker and Poacher with Auto Shut Off for Omelet, Soft, Medium and Hard Boiled Eggs - 7 Egg Capacity Tray, Single Stack, Black',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/71IHsdiU08S._AC_UL160_SR160,160_.jpg',
        rating: '4.6 out of 5 stars',
        reviews: 6827,
        price: {
            whole: 14,
            friction: 79,
            list: 15.99,
            discountPercentage: '8% off',
        },
        link: 'https://www.amazon.com/BELLA-17283-Egg-Cooker-Black/dp/B08P26DYTJ/ref=outlet_zeitgeist_17851393011_5/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B08P26DYTJ&outlet=1&psc=1',
    },
    {
        name: 'Elite Platinum EWMST-325R Maxi-Matic Triple Slow Cooker Buffet Server Adjustable Temp Dishwasher-Safe Oval Ceramic Pots, Lid Rests, 3 x 2.5 Qt Capacity, Red',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/61JlWh6ulHL._AC_UL160_SR160,160_.jpg',
        rating: '4.7 out of 5 stars',
        reviews: 2188,
        price: {
            whole: 65,
            friction: 2,
            list: 69.99,
            discountPercentage: '7% off',
        },
        link: 'https://www.amazon.com/Elite-Platinum-Adjustable-Dishwasher-Safe-Capacity/dp/B07D7MF5HF/ref=outlet_zeitgeist_17851393011_6/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B07D7MF5HF&outlet=1&psc=1',
    },
    {
        name: 'Mind Reader Single Serve Coffee Pod Drawer, 30 Pod Capacity, Countertop Organizer, 10.5"L x 12.75"W x 2.5"H, Black',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/718stfaeeDL._AC_UL160_SR160,160_.jpg',
        rating: '4.6 out of 5 stars',
        reviews: 25571,
        price: {
            whole: 15,
            friction: 99,
        },
        link: 'https://www.amazon.com/Mind-Reader-Coffee-Storage-Verismo/dp/B00XBLGRES/ref=outlet_zeitgeist_17851393011_7/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B00XBLGRES&outlet=1&psc=1',
    },
    {
        name: 'Chefman Electric Panini Press Grill and Gourmet Sandwich Maker w/ Non-Stick Coated Plates, Opens 180 Degrees to Fit Any Type or Size Food, Dishwasher Safe Removable Drip Tray, Stainless Steel/Black',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/61vpR5EJy4L._AC_UL160_SR160,160_.jpg',
        rating: '4.4 out of 5 stars',
        reviews: 8885,
        price: {
            current: 31.0,
            list: 34.99,
            discountPercentage: '11% off',
        },
        link: 'https://www.amazon.com/Chefman-RJ02-180-Non-Stick-Stainless-Removable/dp/B01J1AWMFU/ref=outlet_zeitgeist_17851393011_8/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B01J1AWMFU&outlet=1&psc=1',
    },
    {
        name: 'GoWISE USA 1700-Watt 5.8-QT 8-in-1 Digital Air Fryer with Recipe Book, Black',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/61TppnY3pgL._AC_UL160_SR160,160_.jpg',
        rating: '4.6 out of 5 stars',
        reviews: 34160,
        price: {
            whole: 59,
            friction: 88,
            list: 119.99,
            discountPercentage: '50% off',
        },
        link: 'https://www.amazon.com/GoWISE-USA-5-8-Quarts-Electric-Recipes/dp/B0777RJG6D/ref=outlet_zeitgeist_17851393011_1/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B0777RJG6D&outlet=1&psc=1',
    },
    {
        name: 'SALT Stainless Steel Flat Coarse Grater',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/417lx8QxUvL._AC_UL160_SR160,160_.jpg',
        rating: '4.7 out of 5 stars',
        reviews: 1181,
        price: {
            whole: 4,
            friction: 63,
            typical: 5.37,
            discountPercentage: '14% off',
        },
        link: 'https://www.amazon.com/SALT-Stainless-Steel-Coarse-Grater/dp/B077DD1TFR/ref=outlet_zeitgeist_17851393011_2/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B077DD1TFR&outlet=1&psc=1',
    },
    {
        name: 'Mueller Coffee Canister Stainless Steel Container for Coffee Beans or Grounds, Tea, Sugar, Rice - Day and Month Tracker, Built-In Calendar Wheel - 21oz Capacity - Stainless Steel Spoon Included',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/81OexoFUTEL._AC_UL160_SR160,160_.jpg',
        rating: '4.7 out of 5 stars',
        reviews: 417,
        price: {
            whole: 11,
            friction: 76,
            typical: 16.8,
            discountPercentage: '30% off',
        },
        link: 'https://www.amazon.com/Mueller-Canister-Stainless-Container-Grounds/dp/B09RQYR9NQ/ref=outlet_zeitgeist_17851393011_3/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B09RQYR9NQ&outlet=1&psc=1',
    },
    {
        name: "Hallmark Plaid Shirt Box Bundle (12 Boxes, 3 Designs) Blue, Green, Red Plaid, Black Buffalo Check for Valentine's Day, Birthdays, Father's Day",
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/91NmdlmsaOL._AC_UL160_SR160,160_.jpg',
        rating: '4.7 out of 5 stars',
        reviews: 3288,
        price: {
            whole: 12,
            friction: 89,
            list: 14.99,
            discountPercentage: '14% off',
        },
        link: 'https://www.amazon.com/Hallmark-0005XBC1124-Required-Shirt-Plaid/dp/B088SKMR64/ref=outlet_zeitgeist_17851393011_4/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B088SKMR64&outlet=1&psc=1',
    },
    {
        name: 'BELLA Rapid Electric Egg Cooker and Poacher with Auto Shut Off for Omelet, Soft, Medium and Hard Boiled Eggs - 7 Egg Capacity Tray, Single Stack, Black',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/71IHsdiU08S._AC_UL160_SR160,160_.jpg',
        rating: '4.6 out of 5 stars',
        reviews: 6827,
        price: {
            whole: 14,
            friction: 79,
            list: 15.99,
            discountPercentage: '8% off',
        },
        link: 'https://www.amazon.com/BELLA-17283-Egg-Cooker-Black/dp/B08P26DYTJ/ref=outlet_zeitgeist_17851393011_5/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B08P26DYTJ&outlet=1&psc=1',
    },
    {
        name: 'Elite Platinum EWMST-325R Maxi-Matic Triple Slow Cooker Buffet Server Adjustable Temp Dishwasher-Safe Oval Ceramic Pots, Lid Rests, 3 x 2.5 Qt Capacity, Red',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/61JlWh6ulHL._AC_UL160_SR160,160_.jpg',
        rating: '4.7 out of 5 stars',
        reviews: 2188,
        price: {
            whole: 65,
            friction: 2,
            list: 69.99,
            discountPercentage: '7% off',
        },
        link: 'https://www.amazon.com/Elite-Platinum-Adjustable-Dishwasher-Safe-Capacity/dp/B07D7MF5HF/ref=outlet_zeitgeist_17851393011_6/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B07D7MF5HF&outlet=1&psc=1',
    },
    {
        name: 'Mind Reader Single Serve Coffee Pod Drawer, 30 Pod Capacity, Countertop Organizer, 10.5"L x 12.75"W x 2.5"H, Black',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/718stfaeeDL._AC_UL160_SR160,160_.jpg',
        rating: '4.6 out of 5 stars',
        reviews: 25571,
        price: {
            whole: 15,
            friction: 99,
        },
        link: 'https://www.amazon.com/Mind-Reader-Coffee-Storage-Verismo/dp/B00XBLGRES/ref=outlet_zeitgeist_17851393011_7/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B00XBLGRES&outlet=1&psc=1',
    },
    {
        name: 'Chefman Electric Panini Press Grill and Gourmet Sandwich Maker w/ Non-Stick Coated Plates, Opens 180 Degrees to Fit Any Type or Size Food, Dishwasher Safe Removable Drip Tray, Stainless Steel/Black',
        imageURL:
            'https://images-na.ssl-images-amazon.com/images/I/61vpR5EJy4L._AC_UL160_SR160,160_.jpg',
        rating: '4.4 out of 5 stars',
        reviews: 8885,
        price: {
            current: 31.0,
            list: 34.99,
            discountPercentage: '11% off',
        },
        link: 'https://www.amazon.com/Chefman-RJ02-180-Non-Stick-Stainless-Removable/dp/B01J1AWMFU/ref=outlet_zeitgeist_17851393011_8/133-7716221-4439163?pd_rd_w=WUmWM&content-id=amzn1.sym.77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_p=77efd490-c71e-4614-b1fe-9c82f75964fe&pf_rd_r=J7K9452PAJNVJX96MDDG&pd_rd_wg=OOEKQ&pd_rd_r=7ccd08bc-2066-4c67-887e-569e59da8730&pd_rd_i=B01J1AWMFU&outlet=1&psc=1',
    },
];

const categories = [
    {
        link: '/b/ref=cg_outlet22_3a1_w?node=17886612011&ref=outcat_1&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_clothing_v2.jpg',
        alt: 'Clothing',
    },
    {
        link: '/b/ref=cg_outlet22_3b1_w?node=18095130011&ref=outcat_2&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_watchesandjewelry_v2.jpg',
        alt: 'Watches & Jewelry',
    },
    {
        link: '/b/ref=cg_outlet22_3c1_w?node=19245101011&ref=outcat_3&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_shoesandbags_v2.jpg',
        alt: 'Shoes & Bags',
    },
    {
        link: '/b/ref=cg_outlet22_3d1_w?node=17851395011&ref=outcat_4&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_outdoors_v2.jpg',
        alt: 'Outdoors',
    },
    {
        link: '/b/ref=cg_outlet22_3e1_w?node=17851394011&ref=outcat_5&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_sports_v2.jpg',
        alt: 'Sports',
    },
    {
        link: '/b/ref=cg_outlet22_4a1_w?node=18066620011&ref=outcat_6&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_beauty_v2.jpg',
        alt: 'Beauty',
    },
    {
        link: '/b/ref=cg_outlet22_4b1_w?node=17851392011&ref=outcat_7&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_homeandfurniture_v2.jpg',
        alt: 'Home & Furniture',
    },
    {
        link: '/b/ref=cg_outlet22_4c1_w?node=17784028011&ref=outcat_8&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_toysandgames_v2.jpg',
        alt: 'Toys & Games',
    },
    {
        link: '/s/ref=cg_outlet22_4d1_w?i=garden&bbn=17851393011&rh=n%3A1055398%2Cn%3A17851393011%2Cn%3A284507&ref=outcat_9&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_kitchen_v2.jpg',
        alt: 'Kitchen',
    },
    {
        link: '/b/ref=cg_outlet22_4e1_w?node=17895003011&ref=outcat_10&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_electronics_v2.jpg',
        alt: 'Electronics',
    },

    {
        alt: 'Automotive',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_auto.jpg',
        link: '/b/ref=cg_outlet22_5a1_w?node=20946024011&ref=outsbcd_11&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Books',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_books.jpg',
        link: '/b/ref=cg_outlet22_5b1_w?node=20878322011&ref=outsbcd_12&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Pet Supplies',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_pets.jpg',
        link: '/b/ref=cg_outlet22_5c1_w?node=18366417011&ref=outsbcd_13&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Tools & Home Improvement',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_tools.jpg',
        link: '/b/ref=cg_outlet22_5d1_w?node=18079006011&ref=outsbcd_14&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Health & Personal Care',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_hpc.jpg',
        link: '/b/ref=cg_outlet22_5e1_w?node=18066690011&ref=outsbcd_15&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Baby',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_baby.jpg',
        link: '/b/ref=cg_outlet22_6a1_w?node=3542901011&ref=outsbcd_16&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Grocery',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_grocery.jpg',
        link: '/b/ref=cg_outlet22_6b1_w?node=20878320011&ref=outsbcd_17&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Patio, Lawn & Garden',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_plg.jpg',
        link: '/b/ref=cg_outlet22_6c1_w?node=18066692011&ref=outsbcd_18&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'PC & Camera',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_pc.jpg',
        link: '/b/ref=cg_outlet22_6d1_w?node=20878316011&ref=outsbcd_19&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Musical Instruments',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_musical_instruments.jpg',
        link: '/b/ref=cg_outlet22_6e1_w?node=20878318011&ref=outsbcd_20&pf_rd_m=ATVPDKIKX0DER&pf_rd_s=bottom_1&pf_rd_r=VZAX7SFGHY2Q33F2PQNE&pf_rd_t=0&pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Best Sellers',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_best_sellers.jpg',
        link: '/b/ref=cg_outlet22_7a1_w?node=17900676011&amp;ref=outsbcd_21&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=bottom_1&amp;pf_rd_r=VZAX7SFGHY2Q33F2PQNE&amp;pf_rd_t=0&amp;pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&amp;pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Under $10',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_U10.jpg',
        link: '/b/ref=cg_outlet22_7b1_w?node=17900677011&amp;ref=outsbcd_22&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=bottom_1&amp;pf_rd_r=VZAX7SFGHY2Q33F2PQNE&amp;pf_rd_t=0&amp;pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&amp;pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Last Chance Savings',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_last_chance_savings.jpg',
        link: '/b/ref=cg_outlet22_7c1_w?node=21561372011&amp;ref=outsbcd_23&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=bottom_1&amp;pf_rd_r=VZAX7SFGHY2Q33F2PQNE&amp;pf_rd_t=0&amp;pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&amp;pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Customer Favorites',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_customer_favorites.jpg',
        link: '/b/ref=cg_outlet22_7d1_w?node=23724319011&amp;ref=outsbcd_24&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=bottom_1&amp;pf_rd_r=VZAX7SFGHY2Q33F2PQNE&amp;pf_rd_t=0&amp;pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&amp;pf_rd_i=outlet_desktop_home',
    },
    {
        alt: 'Overstock deals',
        image: 'https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/New2022Oulet_LP_Tiles_overstock_deals.jpg',
        link: '/outlet/deals/ref=cg_outlet22_7e1_w?ref=outsbcd_25&amp;pf_rd_m=ATVPDKIKX0DER&amp;pf_rd_s=bottom_1&amp;pf_rd_r=VZAX7SFGHY2Q33F2PQNE&amp;pf_rd_t=0&amp;pf_rd_p=abe8214f-0a6d-4634-830f-267d440731e5&amp;pf_rd_i=outlet_desktop_home',
    },
];

export { products, categories };
