import { navigations } from '../../../../utils/Warehouse';
import './sidenav.scss';

const Sidenav = () => {
    return (
        <div className='sidenav'>
            <h4>Department</h4>
            <ul>
                {navigations.map((item, index) => (
                    <li key={index}>
                        <a href={`#${item.link}`}>
                            <div className='icon'></div>
                            <span>{item.name}</span>
                        </a>
                    </li>
                ))}
            </ul>
            <div className='sidenav__img'>
                <img
                    src='https://images-na.ssl-images-amazon.com/images/G/01/acs/amazon-designer/2018/10/05/DURM-5B4D5F595D31L4FU.jpeg'
                    alt=''
                />
            </div>
        </div>
    );
};

export default Sidenav;
