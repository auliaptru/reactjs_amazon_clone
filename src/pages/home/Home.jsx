import CardsHome from './components/Cards';
import FullScreenSlider from './components/FullScreenSlider';
import Footer from '../../components/footer/Footer';
import { books, games } from '../../utils/DataSliderProducts.json';
import { data1, data2 } from '../../utils/DataCard.json';

import './home.scss';
import ScrollableCarousel from '../../components/carousel/ScrollableCarousel';

const Content = ({ data }) => (
    <>
        {data.images.map((product, i) => (
            <li key={i}>
                <div className='image__wrapper'>
                    <img className='image' src={product} alt='Product' />
                </div>
            </li>
        ))}
    </>
);

const Home = () => {
    return (
        <div className='home'>
            <div className='slider-gradient'></div>
            <div>
                <FullScreenSlider />
            </div>
            <div className='home__cards'>
                <CardsHome data={data1} />
                <ScrollableCarousel
                    data={games}
                    content={Content}
                    isHidden={true}
                />
                <ScrollableCarousel
                    data={games}
                    content={Content}
                    isHidden={true}
                />
                <CardsHome data={data2} />
                <ScrollableCarousel
                    data={games}
                    content={Content}
                    isHidden={true}
                />
                <ScrollableCarousel
                    data={books}
                    content={Content}
                    isHidden={true}
                />
                <CardsHome data={data2} />
                <ScrollableCarousel
                    data={books}
                    content={Content}
                    isHidden={true}
                />
                <ScrollableCarousel
                    data={games}
                    content={Content}
                    isHidden={true}
                />
                <CardsHome data={data2} />
                <ScrollableCarousel
                    data={books}
                    content={Content}
                    isHidden={true}
                />
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
