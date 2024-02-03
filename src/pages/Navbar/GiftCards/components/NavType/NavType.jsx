import './navType.scss';

const NavType = ({ data, setSelectedType }) => {
    return (
        <div className='nav__type'>
            {data.map((data, i) => (
                <nav className='nav__type-wrapper' key={i}>
                    <img src={data.title} alt='' />
                    <ul className='nav__type-lists'>
                        {data.lists.map((list, i) => (
                            <li
                                className={`nav__type-list ${
                                    list.subcategories ? 'has-children' : ''
                                }`}
                                key={i}
                                onClick={() => setSelectedType(list.type)}
                            >
                                <p>{list.text}</p>

                                {list.subcategories && (
                                    <ul
                                        className={`nav__type-subcates-wrapper cate-${i}`}
                                    >
                                        {list.subcategories.map((cate, i) => (
                                            <li
                                                key={i}
                                                className={`nav__type-subcate-list ${
                                                    cate.subcategories
                                                        ? 'has-children'
                                                        : ''
                                                }`}
                                            >
                                                <a href=''>{cate.text}</a>
                                                {cate.subcategories && (
                                                    <ul
                                                        className={`nav__type-subcates-wrapper`}
                                                    >
                                                        {cate.subcategories.map(
                                                            (cate, i) => (
                                                                <li
                                                                    key={i}
                                                                    className={`nav__type-subcate-list ${
                                                                        cate.subcategories
                                                                            ? 'has-children'
                                                                            : ''
                                                                    }`}
                                                                >
                                                                    <a href=''>
                                                                        {
                                                                            cate.text
                                                                        }
                                                                    </a>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                )}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}
        </div>
    );
};

export default NavType;
