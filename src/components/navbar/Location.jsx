import { useState } from 'react';
import PopoverLocation from '../popoverLocation/PopoverLocation';
import './location.scss';

const Location = () => {
    const [isOpenPopover, setIsOpenPopover] = useState(false);

    const handleOpenPopover = () => {
        setIsOpenPopover(true);
    };

    return (
        <>
            <div className='navbar__loc-link' onClick={handleOpenPopover}>
                <div className='nav__sprite navbar__loc-icon'></div>
                <div className='navbar__loc-texts'>
                    <span className='navbar__text1'>Deliver to</span>
                    <span className='navbar__text2'>Indonesia</span>
                </div>
            </div>

            {isOpenPopover && (
                <div className='loc__popover'>
                    <PopoverLocation
                        isOpenPopover={isOpenPopover}
                        setIsOpenPopover={setIsOpenPopover}
                    />
                </div>
            )}
        </>
    );
};

export default Location;
