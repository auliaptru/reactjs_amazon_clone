import './badgeDeal.scss';

const BadgeDeal = ({ label }) => {
    return (
        <div className='badgeDeal__wrapper'>
            <span className='deal__label'>
                {label === 'Deal' ? 'Deal' : label}
            </span>
            <span className='deal__messaging'>
                {label === 'Deal' ? '' : 'Deal'}
            </span>
        </div>
    );
};

export default BadgeDeal;
