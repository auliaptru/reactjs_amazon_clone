const options = [
    {
        link: 'https://www.amazon.com/gp/redirect.html?ref_=hp_d2gw_tools_managedevices&location=/hz/mycd/myx',
        imgUrl: 'https://m.media-amazon.com/images/G/01/support_images/GUID-541A4D29-C2A4-4613-A8EF-1C61833717EC=1=en-US=Normal.png',
        text: 'Manage Content & Devices',
    },
    {
        link: 'https://www.amazon.com/gp/redirect.html?ref_=hp_d2gw_tools_pvsettingss&location=/gp/video/settings',
        imgUrl: 'https://m.media-amazon.com/images/G/01/support_images/GUID-A3D00497-4C84-4BF9-B3CE-C70463AC7403=1=en-US=Normal.png',
        text: 'Prime Video Settings',
    },
    {
        link: 'https://www.amazon.com/gp/redirect.html?ref_=hp_d2gw_tools_forum&location=/forumhelp',
        imgUrl: 'https://m.media-amazon.com/images/G/01/support_images/GUID-A31808A2-D1DD-46B2-9D8B-CA75CF6B123C=1=en-US=Normal.png',
        text: 'Ask the Community',
    },
];

const articles = [
    {
        link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GBZEQSHZDCZNMVB8&ref_=hp_d2gw_pa_spot1_c',
        imgSrc: 'https://m.media-amazon.com/images/G/01/support_images/GUID-016353FC-A8E9-4749-AD53-DCB276938F20=1=en-US=Normal.png',
        text: 'Resolve Liquid Detection Issues on Your Fire Tablet',
    },
    {
        link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=G937D322PWZ6L9BL&ref_=hp_d2gw_pa_spot2_c',
        imgSrc: 'https://m.media-amazon.com/images/G/01/support_images/GUID-016353FC-A8E9-4749-AD53-DCB276938F20=1=en-US=Normal.png',
        text: 'Receive Kindle eBook Refund',
    },
    {
        link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GVL4UNHRC42KNP6K&ref_=hp_d2gw_pa_spot3_c',
        imgSrc: 'https://m.media-amazon.com/images/G/01/support_images/GUID-016353FC-A8E9-4749-AD53-DCB276938F20=1=en-US=Normal.png',
        text: 'Update Kindle Unlimited Payment Information',
    },
    {
        link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=GCRZL3F2UZMNP3T3&ref_=hp_d2gw_pa_spot4_c',
        imgSrc: 'https://m.media-amazon.com/images/G/01/support_images/GUID-FA20E736-54ED-4A5D-8A21-0D1D24ED33F6=1=en-US=Normal.png',
        text: 'Cancel Music Unlimited Subscription',
    },
    {
        link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=201975180&ref_=hp_d2gw_pa_spot5_c',
        imgSrc: 'https://m.media-amazon.com/images/G/01/support_images/GUID-2FD22702-4032-4899-B34E-A39F4B6BB76A=1=en-US=Normal.png',
        text: 'Cancel Prime Video Subscription Channel',
    },
    {
        link: 'https://www.amazon.com/gp/help/customer/display.html?nodeId=G4JL9SAJ88J85B53&ref_=hp_d2gw_pa_spot6_c',
        imgSrc: 'https://m.media-amazon.com/images/G/01/support_images/GUID-BC55AA84-83AE-4FC3-8972-0FEE6899EA0C=1=en-US=Normal.png',
        text: 'Alexa Preferences and Settings',
    },
];

const devicePickerOpts = [
    {
        href: '/gp/help/customer/display.html?nodeId=G9SY6AQJV45JFMET&ref_=hp_d2_cat_primevideo',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/video_gate.png',
        text: 'Prime Video',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GHH5TUHA7677G4HJ&ref_=hp_d2_cat_firetv',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/firetv_picker.png',
        text: 'Fire TV',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GDRLC59WEFZTBPU7&ref_=hp_d2_cat_kindle',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/kindle_picker.png',
        text: 'Kindle Devices',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GK4QXXXR76TPPVPM&ref_=hp_d2_cat_kindlecontent',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/KindleContent_gate.png',
        text: 'Kindle Content',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GAJYEL5VJLU5KF6L&ref_=hp_d2_cat_kindleapps',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/reading_apps_family.png',
        text: 'Kindle Apps',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=200875610&ref_=hp_d2_cat_general',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/general_gate.png',
        text: 'Manage Your Device, Content, and Account',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=G5ZL5HPKATHSNWKP&ref_=hp_d2_cat_amazonmusic',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/music_gate.png',
        text: 'Amazon Music',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=G201952240&ref_=hp_d2_cat_alexafeatures',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/alexa_features_family.png',
        text: 'Alexa Features',
    },
    {
        href: 'javascript:void(0);',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/echo_picker.png',
        text: 'Echo Family',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GJDXXK9NZ6FMB8PJ&ref_=hp_d2_cat_firetablet',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/tablets_picker.png',
        text: 'Fire Tablets',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GXEGY55XWZSR5ZN3&ref_=hp_d2_cat_kids',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/kids_gate.png',
        text: 'Amazon Kids',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=G9RZECBEL4EYXW6Z&ref_=hp_d2_cat_softwaregames',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/dsv_gate.png',
        text: 'Software & Games',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GDMHBWK3M5RAV5TY&ref_=hp_d2_cat_photodrive',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/photos_drive_gate.png',
        text: 'Amazon Photos',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GRBHRJHSSV9RA2PM&ref_=hp_d2_cat_appstore',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/appstore_gate.png',
        text: 'Amazon Appstore',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GNJHDM7G6F6NB3NG&ref_=hp_d2_cat_key',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/key_gate.png',
        text: 'Key by Amazon',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GBTCV4JNNMCXF8CV&ref_=hp_d2_cat_IMDbTV',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/freevee_logo_gate.png',
        text: 'Freevee',
    },
    {
        href: 'javascript:void(0);',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/smarthome_picker.png',
        text: 'Smart Home',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=Trwn5lh3I2HR2c1L1z&ref_=hp_d2_cat_',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/halo_picker.png',
        text: 'Amazon Halo',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=G24QJQ8LCD2GMUXE&ref_=hp_d2_cat_luna',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/T3875GT_gate.png',
        text: 'Amazon Luna',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GBAQFSFV6RQ36XQ4&ref_=hp_d2_cat_lunacontroller',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/B9084GP_gate.png',
        text: 'Amazon Luna Controller',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=G326SNX6ZMZ3JL8L&ref_=hp_d2_cat_astro',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/astro_picker.png',
        text: 'Amazon Astro',
    },
    {
        href: '/gp/help/customer/display.html?nodeId=GJMHSX9VWPYTXKSZ&ref_=hp_d2_cat_amazongames',
        img: 'https://m.media-amazon.com/images/G/01/x-locale/cs/help/images/kindle/amazongames_gate.png',
        text: 'Amazon Games',
    },
];

export { options, articles, devicePickerOpts };
