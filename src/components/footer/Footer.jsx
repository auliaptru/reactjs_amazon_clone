import React from 'react';
import { data, affiliates } from '../../utils/footerLists.json';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer__container'>
            <div className='footer__wrapper'>
                {data.map((item, i) => (
                    <div className='footer__lists'>
                        <h4>{item.title}</h4>
                        <ul>
                            {item.lists.map((list) => (
                                <li>
                                    <a href=''>
                                        <span>{list}</span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className='footer__middle'>
                <div className='footer__bottom-wrapper'>
                    <div className='footer__logo'></div>
                    <div className='footer__preferences'>
                        <div className='footer__lang box'>
                            <span>English</span>
                        </div>
                        <div className='footer__cop box'>
                            <span>$ USD - U.S. Dollar</span>
                        </div>
                        <div className='footer__reg box'>
                            <span>United States</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className='footer__aff'>
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

            <div className='footer__bottom'>
                <ul>
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
    );
};

export default Footer;
