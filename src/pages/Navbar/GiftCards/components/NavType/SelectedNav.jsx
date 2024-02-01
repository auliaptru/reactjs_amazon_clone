import AmazonGiftCardsContent from './AmazonGiftCardsContent';
import GiftCardsContent from './GiftCardsContent';
import './selectedNav.scss';

const SelectedNav = ({ selectedNav, data }) => {
    switch (selectedNav) {
        case 'gc':
            return <GiftCardsContent data={data} />;
        case 'agc':
            return <AmazonGiftCardsContent data={data} />;
        default:
            break;
    }
};

export default SelectedNav;
