import './contents.scss';
import { categories, sliders } from '../../../../utils/Warehouse';
import Carousel from './Carousel';

const Contents = () => {
    return (
        <div className='warehouse__contents'>
            <div className='banner1'>
                <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/warehouse-deals/stripe_1500x80._CB1198675309_.jpg'
                    alt=''
                />
            </div>
            <div className='banner2'>
                <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/warehouse-deals/1500x150_second_banner.jpg'
                    alt=''
                />
            </div>
            <div className='slider'>
                <Carousel products={sliders} />
            </div>
            <hr />
            <div className='categories'>
                <div className='categories__title'>
                    <img
                        src='https://images-na.ssl-images-amazon.com/images/G/01/US-hq/2018/img/Warehouse_Deals/XCM_Manual_1114419_Storefront_Redesign_V3_1500x80_Warehouse_Deals_1114419_us_warehouse_deals_storefront_1500x80-jpg.jpg'
                        alt=''
                    />
                </div>
                <div className='categories__img-wrapper'>
                    {categories.map((cate, index) => (
                        <div className='cate' key={index}>
                            <img src={cate} alt='' />
                        </div>
                    ))}
                </div>
                <hr />
                <div className='video__player'>
                    <h4>
                        Watch and learn how we turn quality used products into
                        discounted deals
                    </h4>
                    <div className='video'>
                        <video
                            src='https://m.media-amazon.com/images/G/01/warehousedeals/AWD-720p.mp4'
                            poster='https://m.media-amazon.com/images/G/02/warehouse-deals/AWD_Thumbnail_2.png'
                        ></video>
                    </div>
                </div>
                <hr />
                <div className='questions__wrapper'>
                    <h1>Frequently Asked Questions</h1>
                    <hr />
                    <h2>What is Amazon Warehouse?</h2>
                    <hr />
                    <p>
                        Amazon Warehouse offers great deals on quality used,
                        pre-owned, or open box products. With all the benefits
                        of Amazon fulfilment, customer service, and returns
                        rights, we provide discounts on used items for customer
                        favorites: such as smartphones, laptops, tablets, home &
                        kitchen appliances, and thousands more. For each used
                        product we sell, we thoroughly test the condition of the
                        item and provide detailed descriptions to make it easier
                        for you to make a decision. Looking for great discounts
                        on some of your favorite items? Or prefer buying used
                        because it is better for the environment? Discover
                        Amazon Warehouse used offers via our storefront, search
                        bar, or on product detail pages.
                    </p>
                    <h2>How do you evaluate a product's condition?</h2>
                    <hr />
                    <p>
                        All of our products go through a quality check by us
                        prior to being sold. We thoroughly test the functional
                        and physical condition of each item and give the product
                        a specific grade before selling it. We also inspect our
                        products for missing accessories and packaging damage.
                        Based on our quality check, each item will be assigned
                        one of the four evaluations to describe its overall
                        condition: “Like New”, “Very Good”, “Good”, and
                        “Acceptable”.
                    </p>
                    <h2>How can I understand a product's condition?</h2>
                    <hr />
                    <p>
                        Since each item is unique, we use detailed descriptions
                        to help you better understand the item condition, by
                        describing its appearance, functional qualities,
                        accessories and packaging condition. We provide all the
                        detailed information on the product condition right on
                        the product detail page, to help you make your decision.
                        Depending on the item condition, you will find that some
                        items have even deeper discounts.
                    </p>
                    <p>
                        <span className='bold'>Used - Like New</span>: An item
                        in perfect working condition, the packaging may bear
                        some damage. The item fully functions, and all its
                        essential accessories are complete.
                    </p>
                    <p>
                        <span className='bold'>Used - Very Good</span>: An item
                        in very good condition that may have seen limited use
                        and fully functions. The item may have minor cosmetic
                        imperfections. It may arrive with damaged packaging or
                        be repackaged and could be missing some non-essential
                        accessories. Missing accessories are shown under
                        individual item description.
                    </p>
                    <p>
                        <span className='bold'>Used - Good</span>: An item in
                        good condition that may show wear from moderate use and
                        fully functions. The item may arrive with damaged
                        packaging or be repackaged. It may have minor cosmetic
                        damage, such as a small scratch. The item may be missing
                        some valuable accessories and it may not be used until
                        those accessories are purchased separately. Missing
                        accessories are shown under individual item description.
                    </p>
                    <p>
                        <span className='bold'>Used - Acceptable</span>: An item
                        may have clear signs of usage but still serves its main
                        function. Item may arrive with damaged packaging or be
                        repackaged. The item may have cosmetic damages on it or
                        show other signs of previous use. Signs of usage can
                        include scratches, dents, and worn corners or edges. The
                        item may be missing some valuable accessories,
                        components or spare parts, and it may not be used until
                        those parts are purchased separately. Missing parts are
                        shown under individual item description.
                    </p>
                    <h2>How can I return my product if I am not satisfied?</h2>
                    <hr />
                    <p>
                        Your Amazon Warehouse purchases are covered under
                        Amazon's Returns Policy. Just like with any Amazon
                        purchase you make, if you are unsatisfied with the
                        product for any reason, you can return the item in
                        accordance with Amazon's Returns Policy. Since each item
                        at Amazon Warehouse is unique due to its nature, we
                        unfortunately will be unable to replace any item with
                        its exact same condition, but we might have a similar
                        item in stock, so don’t forget to check!
                    </p>
                    <h2>Your inventory keeps changing, is this normal?</h2>
                    <hr />
                    <p>
                        Yes. Since we specialize in used, pre-owned, or open box
                        products, we can't predict future availability for any
                        specific item, so check back often and order quickly.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contents;
