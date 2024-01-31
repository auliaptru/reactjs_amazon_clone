import { useEffect, useRef, useState } from 'react';
import './registrySearch.scss';

const RegistrySearch = () => {
    const [isOpen, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState('');

    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleCloseDropdown = (e) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target) &&
                e.target.className !== 'dropdown__popover'
            ) {
                setOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener('mousedown', handleCloseDropdown);
        }
        return () => {
            document.removeEventListener('mousedown', handleCloseDropdown);
        };
    }, [isOpen]);

    const handleClick = (value) => {
        setSelectedValue(value);
        setOpen(false);
    };

    return (
        <div className='registry__search'>
            <div className='registry__search-wrapper'>
                <h1>Find a registry or gift list</h1>

                <form className='search__form'>
                    <div className='search__form-input'>
                        <input type='search' placeholder='Search by name' />
                    </div>
                    <div className='search__form-dropdown'>
                        <select name='search' id='search'>
                            <option value=''>Search by</option>
                            <option value=''>Wedding Registry</option>
                            <option value=''>Baby Registry</option>
                            <option value=''>Gift List</option>
                        </select>
                        <div
                            className='dropdown__button'
                            onClick={() => setOpen(true)}
                        >
                            <div className='dropdown__button-wrapper'>
                                <span>
                                    {selectedValue === 'wedding'
                                        ? 'Wedding Registry'
                                        : selectedValue === 'baby'
                                        ? 'Baby Registry'
                                        : selectedValue === 'gift'
                                        ? 'Gift List'
                                        : 'Search by'}
                                </span>
                                <i className='dropdown__icon'></i>
                            </div>
                        </div>
                        {isOpen && (
                            <div
                                ref={dropdownRef}
                                className='dropdown__popover'
                            >
                                <ul className='dropdown__popover-wrapper'>
                                    <li
                                        className={
                                            selectedValue === 'wedding'
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => handleClick('wedding')}
                                    >
                                        Wedding Registry
                                    </li>
                                    <li
                                        className={
                                            selectedValue === 'baby'
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => handleClick('baby')}
                                    >
                                        Baby Registry
                                    </li>
                                    <li
                                        className={
                                            selectedValue === 'gift'
                                                ? 'active'
                                                : ''
                                        }
                                        onClick={() => handleClick('gift')}
                                    >
                                        Gift List
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                    <button type='submit' className='search__form-button'>
                        Search
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistrySearch;
