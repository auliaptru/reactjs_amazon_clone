import './cart.scss';

const Cart = () => {
    return (
        <div className='cart__container'>
            <div className='cart__count'>
                <div className='nav__sprite cart__icon'></div>
                <span className='cart__num'>0</span>
            </div>
            <span className='cart__text font-weight'>Cart</span>
        </div>
    );
};

export default Cart;
