import './navFlyout.scss';

const NavFlyout = ({ data, arrowStyle }) => {
    return (
        <ul className='nav__flyout-content'>
            <div className='nav__flyout-arrow' style={arrowStyle}>
                <div className='arrow-inner'></div>
            </div>
            {data.map((item, i) => (
                <li className='nav__flyout-item' key={i}>
                    <div className='nf__item-wrapper'>
                        <img src={item.imageSrc} alt='' />
                        <span className='nf__item-title'>{item.title}</span>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default NavFlyout;
