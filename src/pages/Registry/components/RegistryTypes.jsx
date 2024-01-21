import { types } from '../../../utils/Registry';
import './registryTypes.scss';

const RegistryTypes = () => {
    return (
        <div className='registry__types-container'>
            <h1> Learn about our registries and gift lists </h1>
            <div className='registry__types-cards'>
                {types.map((type, i) => (
                    <a
                        href={type.link}
                        className='registry__types-card'
                        key={i}
                    >
                        <img src={type.imageUrl} alt='' />
                        <div className='types__card-text'>
                            <span>{type.text}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default RegistryTypes;
