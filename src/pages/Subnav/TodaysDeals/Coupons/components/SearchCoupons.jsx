import './searchCoupons.scss';

const SearchCoupons = () => {
    return (
        <div className='searchCoupons'>
            <h4>Search coupons by brand</h4>
            <div className='searchCoupons__container'>
                <div className='searchCoupons__input'>
                    <div className='searchIcon'>
                        <i></i>
                    </div>
                    <input type='search' />
                </div>
                <button className='searchCoupons__btn'>Search</button>
            </div>
        </div>
    );
};

export default SearchCoupons;
