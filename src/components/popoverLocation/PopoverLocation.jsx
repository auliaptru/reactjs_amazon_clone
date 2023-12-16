import { useEffect, useRef, useState } from 'react';
import { countries } from '../../utils/dropdownOptions.json';
import './popoverLocation.scss';
import Loading from '../loading/Loading';

const PopoverLocation = ({ isOpenPopover, setIsOpenPopover, isLoading }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Australia');
    const [showOptions, setShowOptions] = useState(false);

    const selectRef = useRef(null);
    const dropdownRef = useRef(null);

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
        setIsClicked(!isClicked);
    };

    const handleClickOption = (value) => {
        setSelectedOption(value);
        setShowOptions(false);
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                selectRef.current &&
                !selectRef.current.contains(event.target)
            ) {
                setIsOpenPopover(false);
            }
        };
        if (isOpenPopover || showOptions) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpenPopover]);

    return (
        <div className='poploc__container'>
            <div className='poploc' ref={selectRef}>
                <header className='poploc__header'>
                    <h3>Choose your location</h3>
                </header>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div className='poploc__content'>
                            <div className='poploc__content-address'>
                                <p>
                                    Delivery options and delivery speeds may
                                    vary for different locations
                                </p>
                                <button className='yellow-btn'>
                                    Sign in to see your addresses
                                </button>
                            </div>
                            <div className='poploc__content-zip'>
                                <div className='text__divider'>
                                    <h5>or enter a US zip code</h5>
                                </div>
                                <div className='zip__field'>
                                    <input
                                        type='text'
                                        aria-label='or enter a US zip code'
                                    />
                                    <button type='submit'>Apply</button>
                                </div>
                            </div>
                            <div className='poploc__content-dropdown'>
                                <div className='text__divider'>
                                    <h5>or</h5>
                                </div>
                                <div className='dropdown__container'>
                                    <select
                                        className='dropdown__options'
                                        name='countryList'
                                        id='countryList'
                                        style={{ display: 'none' }}
                                        onChange={handleSelectChange}
                                    >
                                        <option value=''>
                                            Ship outside the US
                                        </option>
                                        <optgroup className='group-1'>
                                            {countries.map((item) => (
                                                <option
                                                    value={item.code}
                                                    key={item.code}
                                                >
                                                    {item.name}
                                                </option>
                                            ))}
                                        </optgroup>
                                    </select>
                                    <div
                                        className='dropdown__selected'
                                        onClick={toggleOptions}
                                        ref={dropdownRef}
                                    >
                                        <div className='selected__country'>
                                            <span>
                                                {countries.find(
                                                    (option) =>
                                                        option.code ===
                                                        selectedOption
                                                )?.name || 'Australia'}
                                            </span>
                                        </div>
                                        <i className='arrowIcon'></i>
                                    </div>
                                </div>
                                {showOptions && (
                                    <div className='dropdown__custom-wrapper'>
                                        <div className='dropdown__custom'>
                                            <ul>
                                                {countries.map(
                                                    (item, index) => (
                                                        <>
                                                            <li
                                                                key={item.code}
                                                                onClick={() =>
                                                                    handleClickOption(
                                                                        item.code
                                                                    )
                                                                }
                                                            >
                                                                {item.name}
                                                            </li>
                                                            {index !== 0 &&
                                                                item.code ===
                                                                    'GB' &&
                                                                countries[
                                                                    index + 1
                                                                ].code ===
                                                                    'AF' && (
                                                                    <hr />
                                                                )}
                                                        </>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </>
                )}
                <div className='poploc__content-submit'>
                    <button
                        className='yellow-btn submit'
                        onClick={() => setIsOpenPopover(false)}
                    >
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

PopoverLocation.displayName = 'PopoverLocation';

export default PopoverLocation;
