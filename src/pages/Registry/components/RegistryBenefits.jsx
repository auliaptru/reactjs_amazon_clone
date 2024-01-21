import './registryBenefits.scss';
import { benefits } from '../../../utils/Registry';

const RegistryBenefits = () => {
    return (
        <div className='registry__benefits'>
            <h1> Reasons to create a registry or gift list on Amazon </h1>
            <div className='registry__benefits-cards'>
                {benefits.map((benefit, i) => (
                    <div key={i} className='registry__benefits-card'>
                        <img src={benefit.imgUrl} alt='' />
                        <h1>{benefit.title}</h1>
                        <span>{benefit.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RegistryBenefits;
