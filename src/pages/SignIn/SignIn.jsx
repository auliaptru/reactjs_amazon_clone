import './signIn.scss';

const SignIn = () => {
    return (
        <div className='signIn'>
            <div className='signIn__wrapper'>
                <div className='signIn__top'>
                    <i className='amazonIcon'></i>
                </div>
                <div className='signIn__content'>
                    <h1>Sign in</h1>
                    <form className='signIn__form'>
                        <div className='signUp__form-input'>
                            <label htmlFor='contactInfo'>
                                Email or mobile phone number
                            </label>
                            <input
                                type='text'
                                placeholder=''
                                id='contactInfo'
                                name='contactInfo'
                                // onChange={handleInputChange}
                                // className={error.nameError && 'input__alert'}
                            />
                        </div>

                        <button type='submit'>Continue</button>

                        <div className='signIn__center'>
                            <div className='signIn__policy'>
                                <p>
                                    By continuing, you agree to Amazon&rsquo;s{' '}
                                    <a href=''>Conditions of Use</a> and{' '}
                                    <a href=''>Privacy Notice</a>.
                                </p>
                            </div>
                            <div className='signIn__help'>
                                <i className='arrowIcon'></i>
                                <a href=''>Need help?</a>
                            </div>
                        </div>

                        <div className='signIn__footer'>
                            <hr />
                            <p className='p1'>Buying for work?</p>
                            <p className='p2'>
                                <a href=''>Shop on Amazon Business</a>
                            </p>
                        </div>
                    </form>
                </div>

                <div className='create__account'>
                    <div className='text__divider'>
                        <h5>New to Amazon?</h5>
                    </div>
                    <div className='create__account-btn'>
                        <button>
                            <a href='/register'>Create your Amazon account</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
