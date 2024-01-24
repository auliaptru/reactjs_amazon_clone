import { devicePickerOpts } from '../../../utils/DigitalServices';
import './devicePicker.scss';

const DevicePicker = () => {
    return (
        <div className='device__picker'>
            <div className='device__picker-wrapper'>
                {devicePickerOpts.map((opt, i) => (
                    <a href='#' key={i}>
                        <div className='dp__option'>
                            <img src={opt.img} alt='' />
                            <span>{opt.text}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default DevicePicker;
