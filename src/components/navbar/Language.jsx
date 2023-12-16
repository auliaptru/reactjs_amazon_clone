import './language.scss';
import { MdArrowDropDown } from 'react-icons/md';
import { languages } from '../../utils/Languages.json';
import Loading from '../loading/Loading';

const Language = ({ isLoading }) => {
    return (
        <div className='nav__a'>
            <div className='navbar__lang-wrapper'>
                <div className='flag'></div>
                <span>EN</span>
                <div className='nav__icon'>
                    <MdArrowDropDown className='arrow-down' />
                </div>
            </div>
            <div className='navbar__lang-hover'>
                <div className='top'></div>
                <div className='nav__text'>
                    <h4>Choose language</h4>
                    <span>
                        <a href=''>Learn more</a>
                    </span>
                </div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <div className='nav__languages'>
                            <a href=''>
                                <div className='radio selected'></div>
                                <span>English - EN</span>
                            </a>
                            <div className='line' />
                            {languages.map((lang, i) => (
                                <a href='' key={i}>
                                    <div className='radio'></div>
                                    <span>{lang}</span>
                                </a>
                            ))}
                        </div>

                        <div className='line' />

                        <div className='nav__currency'>
                            <div className='nav__text'>
                                <h4>Change currency</h4>
                                <span>
                                    <a href=''>Learn more</a>
                                </span>
                            </div>
                            <div className='nav__text currency'>
                                <span>$ - USD - US Dollar</span>
                                <span>
                                    <a href=''>Change</a>
                                </span>
                            </div>
                        </div>

                        <div className='line'></div>

                        <span className='nav__country'>
                            <i className='flag'></i> You are shopping on
                            <span>Amazon.com</span>
                        </span>
                        <a href='' className='nav__change'>
                            <span>Change country/region.</span>
                        </a>
                    </>
                )}
            </div>
        </div>
    );
};

export default Language;
