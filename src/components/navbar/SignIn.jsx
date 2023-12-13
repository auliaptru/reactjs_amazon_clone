import './signIn.scss';

const SignIn = () => {
    return (
        <div className='signIn'>
            <div className='top'></div>
            <div className='signIn__content'>
                <button>
                    <span>Sign in</span>
                </button>
                <div className='signIn__texts'>
                    <p>New customer?</p>
                    <span>
                        <a href=''>Start here.</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
