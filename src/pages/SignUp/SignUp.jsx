import { useState } from 'react';
import { data } from '../../utils/countryPhoneCodes.json';
import './signUp.scss';

const SignUp = () => {
    const [selectedNum, setSelectedNum] = useState(null);
    const [showOptions, setShowOptions] = useState(true);

    const handleChangeSelect = (e) => {
        setSelectedNum(e.target.value);
    };

    return (
        <div className='signUp__container'>
            <div className='signUp__wrapper'>
                <div className='signUp__top'>
                    <i className='amazonIcon'></i>
                </div>
                <div className='signUp__content'>
                    <form className='signUp__form'>
                        <h1>Create account</h1>
                        <div className='signUp__form-input'>
                            <label htmlFor='name'>Your name</label>
                            <input
                                type='text'
                                placeholder='First and last name'
                                id='name'
                            />
                        </div>
                        <div className='signUp__form-input'>
                            <label htmlFor='email'>
                                Mobile number or email
                            </label>
                            <div className='signUp__email-wrapper'>
                                <div className='signUp__selectNum'>
                                    <select
                                        name='num'
                                        id='num'
                                        value={selectedNum}
                                        onChange={handleChangeSelect}
                                    >
                                        {data.map((item) => (
                                            <option
                                                value={item.dataCountryCode}
                                                key={item.dataCountryCode}
                                            >
                                                <div
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.dataAHtmlContent,
                                                    }}
                                                ></div>
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className='signUp__email'>
                                    <input type='text' id='email' />
                                </div>
                                <span>
                                    {
                                        data.find(
                                            (item) =>
                                                item.dataCountryCode ===
                                                selectedNum
                                        )?.displayText
                                    }
                                </span>
                            </div>
                        </div>
                        <div className='signUp__pw-wrapper'>
                            <div className='signUp__form-input'>
                                <label htmlFor='pw'>Password</label>
                                <input
                                    type='text'
                                    id='pw'
                                    placeholder='At least 6 characters'
                                />
                                <div className='signUp__pw-alert'>
                                    <i className='alertIcon'></i>
                                    <p>
                                        Passwords must be at least 6 characters
                                    </p>
                                </div>
                            </div>
                            <div className='signUp__form-input'>
                                <label htmlFor='repw'>Re-enter password</label>
                                <input type='text' id='repw' />
                            </div>
                        </div>
                        <div className='signUp__submit'>
                            <p>
                                By enrolling a mobile phone number, you consent
                                to receive automated security notifications via
                                text message from Amazon. Remove your number in
                                Login & Security to cancel. For more information
                                reply HELP. Message and data rates may apply.
                                Message frequency varies.
                            </p>
                            <button type='submit'>Verify mobile number</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
