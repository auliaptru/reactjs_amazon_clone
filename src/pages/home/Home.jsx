import { useState } from 'react';
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { books, games } from '../../utils/DataSliderProducts.json';
import CardsHome from '../../components/cards/CardsHome';
import ProductCarousel from '../../components/slider/ProductCarousel';
import { data1, data2 } from '../../utils/DataCard.json';

import './home.scss';
import FullScreenSlider from '../../components/slider/FullScreenSlider';
import Footer from '../../components/footer/Footer';

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
                <div className='home__signin'>
                    <div className='home__sigin-texts'>
                        <span>See personalized recommendations</span>
                        <button>Sign in</button>
                        <span>
                            New customer{' '}
                            <a href=''>
                                <span>Start here.</span>
                            </a>
                        </span>
                    </div>
                </div>
                <div className='footer'>
                    <div className='home___totop'>
                        <a href=''>
                            <span>Back to top</span>
                        </a>
                    </div>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Home;
