import './search.scss';

const Search = () => {
    return (
        <div className='cs__search'>
            <h2>What do you need help with?</h2>
            <div className='cs__search-container'>
                <form className='input__wrapper'>
                    <i className='searchIcon'></i>
                    <input type='search' placeholder='Search Help' />
                    <button>Go</button>
                </form>
            </div>
        </div>
    );
};

export default Search;
