import CardsHome from '../../components/cards/CardsHome';
import ProductCarousel from '../../components/slider/ProductCarousel';
import { books, games } from '../../utils/DataSliderProducts.json';
import { data1, data2 } from '../../utils/DataCard.json';
import FullScreenSlider from '../../components/slider/FullScreenSlider';
import Footer from '../../components/footer/Footer';

import './home.scss';

const Home = () => {
    return (
        <div className='home'>
            <div className='slider-gradient'></div>
            <div>
                <FullScreenSlider />
            </div>
            <div className='home__cards'>
                <CardsHome data={data1} />
                <ProductCarousel products={books} />
                <ProductCarousel products={games} />
                <CardsHome data={data2} />
                <ProductCarousel products={books} />
                <ProductCarousel products={games} />
                <CardsHome data={data2} />
                <ProductCarousel products={books} />
                <ProductCarousel products={games} />
                <CardsHome data={data2} />
                <ProductCarousel products={games} />

                <div className='footer'>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
