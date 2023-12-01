import './location.scss';

const Location = () => {
    return (
        <a href='#' className='navbar__loc-link'>
            <div className='nav__sprite navbar__loc-icon'></div>
            <div className='navbar__loc-texts'>
                <span className='navbar__text1'>Deliver to</span>
                <span className='navbar__text2'>Indonesia</span>
            </div>
        </a>
    );
};

export default Location;
