import './navSell.scss';

const NavSell = () => {
    return (
        <nav className='sell__top'>
            <div className='sell__nav-wrapper'>
                <h1>Sell with Amazon</h1>
                <div className='sell__learn-how'>
                    <img
                        src='https://m.media-amazon.com/images/G/01/sell/images/icon-magic-sparkle-dark.svg'
                        alt=''
                    />
                    <p>
                        Start today for{' '}
                        <strong>5% back on up to $1,000,000</strong> in branded
                        sales.{' '}
                        <a href='' className='learn-how__text'>
                            <strong>Learn how</strong>
                        </a>
                    </p>
                    <img
                        src='https://m.media-amazon.com/images/G/01/sell/images/icon-magic-sparkle-dark.svg'
                        alt=''
                    />
                </div>
                <button className='btn-orange signUp'>Sign up</button>
            </div>
        </nav>
    );
};

export default NavSell;
