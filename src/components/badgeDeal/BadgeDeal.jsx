import './badgeDeal.scss';

const BadgeDeal = ({ label, dealType }) => {
    return (
        <div className='badgeDeal__wrapper'>
            <span className='deal__label'>
                {label === 'Deal' ? 'Deal' : label}
            </span>
            <span className='deal__messaging'>
                {label === 'Deal' ? dealType : 'Deal'}
            </span>
        </div>
    );
};

export default BadgeDeal;
