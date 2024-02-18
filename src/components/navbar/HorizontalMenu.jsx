import { useEffect, useState } from 'react';
import './horizontalMenu.scss';
import { hmenu } from '../../utils/SidenavMenu.json';

const HorizontalMenu = ({ isOpenHmenu, setIsOpenHmenu }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenSubmenu, setOpenSubmenu] = useState(false);
    const [dataSubmenu, setDataSubmenu] = useState([]);
    const [isDataLong, setDataLong] = useState(false);

    const handleOpenOtherMenu = (index) => {
        setIsOpen({ ...isOpen, [index]: !isOpen[index] });
    };

    const getSubmenuByName = (data, name) => {
        for (const item of data) {
            for (const menu of item.menu) {
                if (menu.name === name) {
                    return menu.submenu;
                }
            }
        }
        return null;
    };

    const handleOpenSubmenu = (index, name) => {
        setOpenSubmenu({ ...isOpen, [index]: !isOpen[index] });
        const data = getSubmenuByName(hmenu, name);

        setDataSubmenu(data);
    };

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
                <div className='hmenu__content-wrapper'>
                    <div
                        className={`hmenu__content ${
                            isOpenSubmenu ? 'hmenu__hidden' : 'hmenu__active'
                        }`}
                    >
                        {hmenu.map((item, index) => (
                            <ul key={index}>
                                <li className='hmenu__title'>
                                    <h3>{item.title}</h3>
                                </li>
                                {item.menu?.map((menuItem, i) => (
                                    <div key={i}>
                                        <li
                                            onClick={() =>
                                                handleOpenSubmenu(
                                                    i,
                                                    menuItem.name
                                                )
                                            }
                                        >
                                            <div
                                                href=''
                                                className='hmenu__item'
                                            >
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
                                            </div>
                                            {menuItem.arrow === 'yes' && (
                                                <i className='nav__sprite hmenu__arrow-icon'></i>
                                            )}
                                        </li>
                                    </div>
                                ))}
                                <ul
                                    className={`hmenu__other ${
                                        index === 1 ? 'large' : 'small'
                                    } ${!isOpen[index] && 'compressed'}`}
                                >
                                    <li className='hmenu__separator padding'></li>

                                    {item.hiddenMenu.map((link, i) => (
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
                                        onClick={() =>
                                            handleOpenOtherMenu(index)
                                        }
                                    >
                                        <span className='hmenu__item '>
                                            {item.label2}
                                        </span>
                                        <i className='nav__sprite hmenu__less-icon'></i>
                                    </li>
                                </ul>
                                {item.label1 !== null && (
                                    <li
                                        onClick={() =>
                                            handleOpenOtherMenu(index)
                                        }
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
                    <div
                        className={`hmenu__content ${
                            isOpenSubmenu ? 'hmenu__active' : 'hmenu__hidden'
                        }`}
                    >
                        <div
                            className='hmenu__submenu-main'
                            onClick={() => setOpenSubmenu(false)}
                        >
                            <i className='icon'></i>
                            MAIN MENU
                        </div>
                        <div className='hmenu__submenu-lists'>
                            {dataSubmenu.map((item, i) => (
                                <div className='hmenu__submenu-list' key={i}>
                                    <div className='hmenu__submenu-title'>
                                        <h3>{item.title}</h3>
                                    </div>
                                    <ul
                                        className='hmenu__submenu-link'
                                        style={{
                                            borderBottom:
                                                dataSubmenu.length > 1 &&
                                                '1px solid #d5dbdb',
                                            paddingBottom:
                                                dataSubmenu.length > 1 && '8px',
                                        }}
                                    >
                                        {item.menu.map((data, i) => (
                                            <li key={i}>{data.title}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HorizontalMenu;
