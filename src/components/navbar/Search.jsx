import { FaSearch } from 'react-icons/fa';
import './search.scss';
import { MdArrowDropDown } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';

const Search = ({
    isFocus,
    isOpen,
    setIsOpen,
    handleFocusBlur,
    handleFocusInput,
    handleSelectChange,
    selectedOption,
    inputRef,
}) => {
    return (
        <form className={`navbar__form ${isFocus && 'nav__focus'}`}>
            <div
                className={`${isOpen && 'nav__focus'} form__dropdown`}
                onClick={() => {
                    setIsOpen(true);
                }}
                onBlur={handleFocusBlur}
            >
                <div className='form__dropdown-label'>
                    <span>{selectedOption}</span>

                    <MdArrowDropDown className='dropdownIcon' />
                    <select
                        className='form__dropdown-select'
                        onChange={handleSelectChange}
                        title='Search in'
                        tabIndex='0'
                    >
                        <option value='All'>All</option>
                        <option value='Arts & Crafts'>Arts & Crafts</option>
                        <option value='arts-crafts'>
                            Beauty & Personal Care
                        </option>
                    </select>
                </div>
            </div>

            <div className='form__search'>
                <input
                    ref={inputRef}
                    className='form__search-input'
                    type='text'
                    placeholder='Search Amazon'
                    onFocus={handleFocusInput}
                    onBlur={handleFocusBlur}
                />
            </div>
            <div className='nav__sprite form__submit'>
                <div className='nav__sprite form__submit-button'>
                    <input type='submit' value='Go' className='nav__sprite ' />
                </div>
            </div>
        </form>
    );
};

export default Search;
