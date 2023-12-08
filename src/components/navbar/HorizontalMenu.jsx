import { useState } from 'react';
import './horizontalMenu.scss';
import { hmenu } from '../../utils/SidenavMenu.json';

const HorizontalMenu = ({ isOpenHmenu, setIsOpenHmenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [heightChanged, setHeightChanged] = useState(false);

    const handleOpenOtherMenu = (index) => {
        setHeightChanged(true);
        setIsOpen({ ...isOpen, [index]: !isOpen[index] });
    };

    setTimeout(() => {
        setHeightChanged(false);
    }, 500);

    return (
        <>
            <div
                className={`${
                    isOpenHmenu
                        ? 'hmenu__focus-bg'
                        : 'hmenu__focus-bg hmenu__transparent'
                }`}
            >
                <div
                    className='nav__sprite hmenu__close-icon'
                    onClick={() => setIsOpenHmenu(false)}
                ></div>
            </div>
            <div className={`hmenu__canvas ${isOpenHmenu && 'hmenu__active'}`}>
                <div className='hmenu__profile'>
                    <div className='nav__sprite hmenu__profile-avatar'></div>
                    <div className='hmenu__profile-text'>Hello, sign in</div>
                </div>
                <div className='hmenu__content'>
                    {hmenu.map((item, index) => (
                        <ul key={index}>
                            <li className='hmenu__title'>
                                <h3>{item.title}</h3>
                            </li>
                            {item.menu?.map((menuItem, i) => (
                                <div key={i}>
                                    <li>
                                        <a href='' className='hmenu__item'>
                                            {menuItem.icon && (
                                                <div className='hmenu__item-icon'>
                                                    <i
                                                        style={{
                                                            backgroundImage: `url(${menuItem.icon.url})`,
                                                            backgroundPosition: `${menuItem.icon.position}`,
                                                            width: `${menuItem.icon.width}`,
                                                            height: `${menuItem.icon.height}`,
                                                            marginLeft: `${menuItem.icon.left}`,
                                                        }}
                                                    ></i>
                                                </div>
                                            )}
                                            <span>{menuItem.name}</span>
                                        </a>
                                        {menuItem.arrow === 'yes' && (
                                            <i className='nav__sprite hmenu__arrow-icon'></i>
                                        )}
                                    </li>
                                </div>
                            ))}
                            <ul
                                className={`hmenu__hidden ${
                                    index === 1 ? 'large' : 'small'
                                } ${!isOpen[index] && 'compressed'}`}
                            >
                                <li className='hmenu__separator padding'></li>

                                {item.submenu.map((link, i) => (
                                    <li key={i}>
                                        <a href='' className='hmenu__item'>
                                            {link}
                                        </a>
                                        <i className='nav__sprite hmenu__arrow-icon'></i>
                                    </li>
                                ))}
                                <li
                                    className={`'hmenu__less move-up' ${
                                        !isOpen && 'move-down'
                                    }`}
                                    onClick={() => handleOpenOtherMenu(index)}
                                >
                                    <span className='hmenu__item '>
                                        {item.label2}
                                    </span>
                                    <i className='nav__sprite hmenu__less-icon'></i>
                                </li>
                            </ul>
                            {item.label1 !== null && (
                                <li
                                    onClick={() => handleOpenOtherMenu(index)}
                                    className={`hmenu__more move-down ${
                                        isOpen[index] && 'hidden'
                                    }`}
                                >
                                    <span className='hmenu__item'>
                                        {item?.label1}
                                    </span>
                                    <i className='nav__sprite hmenu__more-icon'></i>
                                </li>
                            )}

                            <li className='hmenu__separator'></li>
                        </ul>
                    ))}
                </div>
            </div>
        </>
    );
};

export default HorizontalMenu;
