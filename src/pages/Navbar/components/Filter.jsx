import './filter.scss';

const Filter = ({ availability, departments }) => {
    return (
        <div className='deals__filter-container'>
            <ul className='deals__filter availability'>
                {availability.map((data, index) => (
                    <li key={index}>
                        <a href='#' style={{ textTransform: 'capitalize' }}>
                            {data}
                        </a>
                    </li>
                ))}
            </ul>
            <div className='deals__filter-checkbox prime'>
                <h3>Prime programs</h3>
                <ul>
                    <li>
                        <label>
                            <input type='checkbox' />
                            <div>
                                <i className='primeIcon'></i>
                            </div>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' />
                            <span>Prime Early Access deals</span>
                        </label>
                    </li>
                    <li>
                        <label>
                            <input type='checkbox' />
                            <span>Prime Exclusive deals</span>
                        </label>
                    </li>
                </ul>
            </div>
            <div className='deals__filter-checkbox departments'>
                <h3>Departments</h3>
                <span className='departments__select'>
                    <a href=''>Select All</a>
                </span>
                <ul>
                    {departments.map((data, index) => (
                        <li key={index} style={{ textTransform: 'capitalize' }}>
                            <label>
                                <input type='checkbox' />
                                <span>{data}</span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='deals__filter type'>
                <h3>Deal type</h3>
                <ul>
                    <li>
                        <a href=''>All deals</a>
                    </li>
                    <li>
                        <a href=''>Top Deal</a>
                    </li>
                    <li>
                        <a href=''>Lightning deal</a>
                    </li>
                    <li>
                        <a href=''>Best deal</a>
                    </li>
                </ul>
            </div>
            <div className='deals__filter price'>
                <h3>Price</h3>
                <ul>
                    <li>
                        <a href=''>All </a>
                    </li>
                    <li>
                        <a href=''>Under $10</a>
                    </li>
                    <li>
                        <a href=''>$10 to $25</a>
                    </li>
                    <li>
                        <a href=''>$25 to $50</a>
                    </li>
                </ul>
            </div>
            <div className='deals__filter price'>
                <h3>Discount</h3>
                <ul>
                    <li>
                        <a href=''>All deals</a>
                    </li>
                    <li>
                        <a href=''>$10 off or more</a>
                    </li>
                    <li>
                        <a href=''>$25 off or more</a>
                    </li>
                    <li>
                        <a href=''>$50 off or more</a>
                    </li>
                    <li>
                        <a href=''>$70 off or more</a>
                    </li>
                </ul>
            </div>
            <div className='deals__filter review'>
                <h3>Average Customer Review</h3>
                <div className='deals__review-wrapper'>
                    <i className='starIcon star-4'></i>
                    <span>& up</span>
                </div>
                <div className='deals__review-wrapper'>
                    <i className='starIcon star-3'></i>
                    <span>& up</span>
                </div>
                <div className='deals__review-wrapper'>
                    <i className='starIcon star-2'></i>
                    <span>& up</span>
                </div>
                <div className='deals__review-wrapper'>
                    <i className='starIcon star-1'></i>
                    <span>& up</span>
                </div>
            </div>
        </div>
    );
};

export default Filter;
