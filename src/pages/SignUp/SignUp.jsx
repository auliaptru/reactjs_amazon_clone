import { useEffect, useRef, useState } from 'react';
import { data } from '../../utils/countryPhoneCodes.json';
import './signUp.scss';

const initialState = {
    name: '',
    contactInfo: '',
    password: '',
    rePassword: '',
};

const errorState = {
    nameError: false,
    contactError: false,
    passwordError: false,
    rePasswordError: false,
};

const SignUp = () => {
    const [formData, setFormData] = useState(initialState);
    const [callingCode, setCallingCode] = useState('');
    const [showCode, setShowCode] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [selectPadding, setSelectPadding] = useState('10px');
    const [isVerify, setIsVerify] = useState(false);
    const [error, setError] = useState(errorState);

    const spanRef = useRef(null);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const setPaddingBasedOnSpanWidth = () => {
            if (showCode && spanRef.current) {
                const spanWidth = spanRef.current.getBoundingClientRect().width;
                setSelectPadding(spanWidth + 10 + 'px');
            }
        };

        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setShowOptions(false);
            }
        };

        setPaddingBasedOnSpanWidth();

        if (showOptions) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showOptions, showCode]);

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        setError(false);

        const isNumber = /^[0-9]*$/.test(value);

        if (isNumber && value !== '') {
            setShowCode(true);
            setSelectPadding('45px');
            setIsVerify(true);
        } else {
            setShowCode(false);
            setSelectPadding('10px');
            setIsVerify(false);
        }
    };

    const handleClickOption = (value) => {
        setCallingCode(value);
        // setFormData({
        //     ...formData,
        //     contactInfo: `+${callingCode}${formData.contactInfo}`,
        // });
        setShowOptions(false);

        if (spanRef.current) {
            const spanWidth = spanRef.current.getBoundingClientRect().width;
            setSelectPadding(spanWidth + 10 + 'px');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, password, contactInfo, rePassword } = formData;
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        const nameError = name === '';
        const contactError = contactInfo === '' || !contactInfo.test(regex);
        const passwordError = password === '' || password.length < 6;
        const rePasswordError =
            rePassword === '' || rePassword !== password || password.length < 6;

        setError({
            nameError,
            contactError,
            passwordError,
            rePasswordError,
        });

        if (!nameError && !contactError && !passwordError && !rePasswordError) {
            setFormData(initialState);
            // setFormData(formData);
        }
    };
    console.log(showOptions);

    return (
        <div className='signUp__container'>
            <div className='signUp__wrapper'>
                <div className='signUp__top'>
                    <i className='amazonIcon'></i>
                </div>
                <div className='signUp__content'>
                    <form className='signUp__form' onSubmit={handleSubmit}>
                        <h1>Create account</h1>
                        <div className='signUp__form-input'>
                            <label htmlFor='name'>Your name</label>
                            <input
                                type='text'
                                placeholder='First and last name'
                                id='name'
                                name='name'
                                onChange={handleInputChange}
                                className={error.nameError && 'input__alert'}
                            />
                            {error.nameError && (
                                <div className='form__alert error'>
                                    <i className='alertIcon'></i>
                                    <p>Enter your name</p>
                                </div>
                            )}
                        </div>
                        <div className='signUp__form-input'>
                            <label htmlFor='email'>
                                Mobile number or email
                            </label>
                            <div className='signUp__email-wrapper'>
                                <div className='signUp__email'>
                                    <input
                                        type='text'
                                        id='contactInfo'
                                        name='contactInfo'
                                        onChange={handleInputChange}
                                        style={{
                                            paddingLeft: selectPadding,
                                        }}
                                        className={
                                            error.contactError && 'input__alert'
                                        }
                                    />
                                    {error.contactError && (
                                        <div className='form__alert error'>
                                            <i className='alertIcon'></i>
                                            <p>
                                                Wrong or Invalid email address
                                                or mobile phone number. Please
                                                correct and try again.{' '}
                                            </p>
                                        </div>
                                    )}
                                    {showCode && (
                                        <>
                                            <span
                                                ref={spanRef}
                                                onClick={() =>
                                                    setShowOptions(true)
                                                }
                                            >
                                                {data.find(
                                                    (item) =>
                                                        item.dataCallingCode ===
                                                        callingCode
                                                )?.displayText || 'US +1'}
                                            </span>
                                            {showOptions && (
                                                <div
                                                    className='signUp__options-show'
                                                    ref={dropdownRef}
                                                >
                                                    <ul>
                                                        {data.map((item) => (
                                                            <li
                                                                key={
                                                                    item.dataCountryCode
                                                                }
                                                                onClick={() =>
                                                                    handleClickOption(
                                                                        item.dataCallingCode
                                                                    )
                                                                }
                                                            >
                                                                {
                                                                    item.dataCountryName
                                                                }
                                                                {' +'}
                                                                {
                                                                    item.dataCallingCode
                                                                }
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className='signUp__pw-wrapper'>
                            <div className='signUp__form-input'>
                                <label htmlFor='pw'>Password</label>
                                <input
                                    type='password'
                                    id='password'
                                    name='password'
                                    placeholder='At least 6 characters'
                                    onChange={handleInputChange}
                                    className={
                                        error.passwordError && 'input__alert'
                                    }
                                />
                                {error.passwordError ? (
                                    <div className='form__alert error'>
                                        <i className='alertIcon'></i>
                                        <p>Minimum 6 characters required</p>
                                    </div>
                                ) : (
                                    <div className='form__alert'>
                                        <i className='alertIcon'></i>
                                        <p>
                                            Passwords must be at least 6
                                            characters
                                        </p>
                                    </div>
                                )}
                            </div>
                            <div className='signUp__form-input'>
                                <label htmlFor='rePassword'>
                                    Re-enter password
                                </label>
                                <input
                                    type='text'
                                    id='rePassword'
                                    name='rePassword'
                                    onChange={handleInputChange}
                                    className={
                                        error.rePasswordError && 'input__alert'
                                    }
                                />
                                {error.rePasswordError && (
                                    <div className='form__alert error'>
                                        <i className='alertIcon'></i>
                                        <p>Type your password again </p>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='signUp__submit'>
                            {isVerify ? (
                                <p>
                                    By enrolling a mobile phone number, you
                                    consent to receive automated security
                                    notifications via text message from Amazon.
                                    Remove your number in Login & Security to
                                    cancel. For more information reply HELP.
                                    Message and data rates may apply. Message
                                    frequency varies.
                                </p>
                            ) : (
                                <p>
                                    By creating an account, you agree to
                                    Amazon&rsquo;s{' '}
                                    <a href=''>Conditions of Use</a> and{' '}
                                    <a href=''>Privacy Notice</a>.
                                </p>
                            )}
                            {isVerify ? (
                                <button
                                    type='submit'
                                    onClick={() => setIsVerify(false)}
                                >
                                    Verify mobile number
                                </button>
                            ) : (
                                <button type='submit'>Continue</button>
                            )}
                        </div>

                        <div className='divider__container'>
                            <div className='divider'></div>
                        </div>

                        <div className='signIn'>
                            <p>
                                Already have an account?{' '}
                                <a href='' className='link'>
                                    Sign in
                                </a>
                            </p>
                            <p>
                                Buying for work?{' '}
                                <a href='' className='link'>
                                    Create a free business account
                                </a>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
