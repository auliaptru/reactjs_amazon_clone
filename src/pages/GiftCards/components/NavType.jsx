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
                                className='nav__type-list'
                                key={i}
                                onClick={() => setSelectedType(list.type)}
                            >
                                {list.text}
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}
        </div>
    );
};

export default NavType;
