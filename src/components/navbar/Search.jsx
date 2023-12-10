import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import { options } from '../../utils/dropdownOptions.json';
import { MdArrowDropDown } from 'react-icons/md';
import './search.scss';

const Search = ({ isFocus, setIsFocus }) => {
    const [selectedOption, setSelectedOption] = useState('All');
    const [isOpen, setIsOpen] = useState(false);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [isClickedOutside, setIsClickedOutside] = useState(false);

    const inputRef = useRef(null);
    const selectRef = useRef(null);

    const option = options.find(
        (opt) => `search-alias=${opt.value}` === selectedOption
    )?.label;

    const handleSelectChange = (event) => {
        inputRef.current.focus();
        setIsFocus(true);
        setSelectedOption(event.target.value);
        setIsClickedOutside(false);
    };

    const handleFocusInput = () => {
        setIsFocus(true);
    };

    const handleFocusBlur = () => {
        setIsFocus(false);
        setIsOpen(false);
        setShowSuggestion(false);
    };

    useEffect(() => {
        let delayTimer;

        if (selectedOption === 'search-alias=aps' && !isClickedOutside) {
            delayTimer = setTimeout(() => {
                setShowSuggestion(true);
            }, 500);
        } else {
            setShowSuggestion(false);
            clearTimeout(delayTimer);
        }

        const handleClickOutside = (event) => {
            if (inputRef.current && !selectRef.current.contains(event.target)) {
                setShowSuggestion(false);
                setIsClickedOutside(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            clearTimeout(delayTimer);
        };
    }, [selectedOption, isClickedOutside, showSuggestion, setShowSuggestion]);

    return (
        <form className={`navbar__form ${isFocus && 'nav__focus'}`}>
            <div
                className={`${isOpen && 'nav__focus'} form__dropdown`}
                onClick={() => {
                    setIsOpen(true);
                }}
            >
                <div className='form__dropdown-label' ref={selectRef}>
                    <div>
                        <span style={{ textTransform: 'capitalize' }}>
                            {option ? option : 'All'}
                        </span>
                    </div>

                    <MdArrowDropDown className='dropdownIcon' />
                    <select
                        className='form__dropdown-select'
                        onChange={handleSelectChange}
                        value={selectedOption}
                        title='Search in'
                        tabIndex='0'
                        onFocus={handleFocusInput}
                    >
                        {options.map((opt, i) => (
                            <option
                                key={i}
                                value={`search-alias=${opt.value}`}
                                style={{
                                    textTransform: 'capitalize',
                                    fontSize: '14px',
                                    letterSpacing: '0.04rem',
                                }}
                            >
                                {opt.label}
                            </option>
                        ))}
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

            <div
                className={
                    showSuggestion
                        ? 'form__suggestion-container block'
                        : 'form__suggestion-container'
                }
                onClick={(e) => e.stopPropagation()}
            >
                <div className='search__suggestion'>
                    <div className='search__suggestion-text'>
                        <span>beauty</span> <p>in All Departments</p>
                    </div>
                    <div className='close__container-icon'>
                        <i className='close-icon'></i>
                    </div>
                </div>
                <div className='search__trending'>
                    <div className='trending__icon-container'>
                        <i className='trending-icon'></i>
                    </div>
                    <span>gift cards amazon</span>
                </div>
                <div className='search__trending'>
                    <div className='trending__icon-container'>
                        <i className='trending-icon'></i>
                    </div>
                    <span>aaa battery</span>
                </div>
                <div className='search__trending'>
                    <div className='trending__icon-container'>
                        <i className='trending-icon'></i>
                    </div>
                    <span>white elephant gifts</span>
                </div>
                <div className='search__trending'>
                    <div className='trending__icon-container'>
                        <i className='trending-icon'></i>
                    </div>
                    <span>teacher christmas gifts</span>
                </div>
            </div>
        </form>
    );
};

Search.propTypes = {
    isFocus: PropTypes.bool,
    setIsFocus: PropTypes.func,
};

export default Search;
