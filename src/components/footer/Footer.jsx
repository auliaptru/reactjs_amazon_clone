import { TfiWorld } from 'react-icons/tfi';
import { TbArrowsMoveVertical } from 'react-icons/tb';
import { data, affiliates } from '../../utils/footerLists.json';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__container'>
                <div className='footer__top'>
                    <div className='footer__personalized'>
                        <span>See personalized recommendations</span>
                        <button>Sign in</button>
                        <span>
                            New customer?
                            <a href=''>
                                <span>Start here.</span>
                            </a>
                        </span>
                    </div>
                </div>

                <div className='footer__center'>
                    <div className='footer__totop'>
                        <a href='#'>
                            <span>Back to top</span>
                        </a>
                    </div>
                    <div className='footer__lists'>
                        {data.map((item, i) => (
                            <div className='footer__lists-wrapper' key={i}>
                                <h4>{item.title}</h4>
                                <ul>
                                    {item.lists.map((list, i) => (
                                        <li key={i}>
                                            <a href=''>
                                                <span>{list}</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className='footer__preferences'>
                        <div className='footer__logo'></div>
                        <div className='footer__wrapper'>
                            <div className='footer__lang box'>
                                <TfiWorld className='world-icon ' />
                                <span>English</span>
                                <TbArrowsMoveVertical className='arrow-icon' />
                            </div>
                            <div className='footer__cop box'>
                                <span>$ </span>
                                <span>USD - U.S. Dollar</span>
                            </div>
                            <div className='footer__reg box'>
                                <span className='flagIcon'></span>
                                <span>United States</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='footer__bottom'>
                    <div className='footer__affiliates'>
                        <table>
                            <tbody>
                                <tr>
                                    {affiliates.data1.map((list, i) => (
                                        <td key={i}>
                                            <a href={list.link}>{list.name}</a>
                                            <span>{list.text}</span>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    {affiliates.data2.map((list, i) => (
                                        <td key={i}>
                                            <a href={list.link}>{list.name}</a>
                                            <span>{list.text}</span>
                                        </td>
                                    ))}
                                </tr>
                                <tr>
                                    {affiliates.data3.map((list, i) => (
                                        <td key={i}>
                                            <a href={list.link}>{list.name}</a>
                                            <span>{list.text}</span>
                                        </td>
                                    ))}
                                </tr>
                                <tr className='tr-data4'>
                                    {affiliates.data4.map((list, i) => (
                                        <td key={i}>
                                            <a href={list.link}>{list.name}</a>
                                            <span>{list.text}</span>
                                        </td>
                                    ))}
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <ul className='footer__policies'>
                        <li>
                            <a href=''>Conditions of Use</a>
                        </li>
                        <li>
                            <a href=''>Privacy Notice</a>
                        </li>
                        <li>
                            <a href=''>Your Ads Privacy Choices</a>
                        </li>
                        <li className='footer__icon'>
                            <div className='list-icon'></div>
                        </li>
                    </ul>
                    <span>© 1996-2023, Amazon.com, Inc. or its affiliates</span>
                </div>
            </div>
        </div>
    );
};

export default Footer;
