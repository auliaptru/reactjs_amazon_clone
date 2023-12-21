import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './cart.scss';

const Cart = () => {
    return (
        <>
            <Navbar />
            <div className='cart'>
                <div className='cart__container'>
                    <div className='cart__img'>
                        <img
                            src='https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg'
                            alt=''
                        />
                    </div>
                    <div className='cart__texts'>
                        <h2>Your Amazon Cart is empty</h2>
                        <p>Shop today&apos;s deals</p>
                        <div className='cart__buttons'>
                            <button className='btn-signin'>
                                Sign into your account
                            </button>
                            <button className='btn-signup'>Sign up now</button>
                        </div>
                    </div>
                </div>
                <div className='cart__bottom'>
                    <div className='cart__blank'></div>
                    <p>
                        The price and availability of items at Amazon.com are
                        subject to change. The Cart is a temporary place to
                        store a list of your items and reflects each item&apos;s
                        most recent price. <a href=''>Learn more</a> Do you have
                        a gift card or promotional code? We&apos;ll ask you to
                        enter your claim code when it&apos;s time to pay.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
