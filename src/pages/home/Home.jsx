import CardsHome from './components/Cards';
import ProductCarousel from './components/ProductCarousel';
import FullScreenSlider from './components/FullScreenSlider';
import Footer from '../../components/footer/Footer';
import { books, games } from '../../utils/DataSliderProducts.json';
import { data1, data2 } from '../../utils/DataCard.json';

import './home.scss';
import ScrollableCarousel from '../../components/carousel/ScrollableCarousel';

const Home = () => {
    return (
        <div className='home'>
            <div className='slider-gradient'></div>
            <div>
                <FullScreenSlider />
            </div>
            <div className='home__cards'>
                <CardsHome data={data1} />
                <ScrollableCarousel data={games} isHidden={true} />
                <ScrollableCarousel data={games} isHidden={true} />
                {/* <ProductCarousel products={books} /> */}
                {/* <ProductCarousel products={games} /> */}
                <CardsHome data={data2} />
                <ScrollableCarousel data={games} isHidden={true} />
                <ScrollableCarousel data={books} isHidden={true} />
                {/* <ProductCarousel products={books} />
                <ProductCarousel products={games} /> */}
                <CardsHome data={data2} />
                <ScrollableCarousel data={books} isHidden={true} />
                <ScrollableCarousel data={games} isHidden={true} />
                {/* <ProductCarousel products={books} />
                <ProductCarousel products={games} /> */}
                <CardsHome data={data2} />
                <ScrollableCarousel data={books} isHidden={true} />
                {/* <ScrollableCarousel data={games} isHidden={true} /> */}
                {/* <ProductCarousel products={games} /> */}
                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
