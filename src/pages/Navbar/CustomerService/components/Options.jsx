import { options } from '../../../../utils/DigitalServices';
import './options.scss';

const Options = () => {
    return (
        <div className='sc__options'>
            <h2>Things you can do</h2>
            <div className='sc__options-tools'>
                <ul>
                    {options.map((opt, i) => (
                        <li key={i}>
                            <a href={opt.link} target='_blank' rel='noreferrer'>
                                <img src={opt.imgUrl} alt='' />
                                <span>{opt.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Options;
