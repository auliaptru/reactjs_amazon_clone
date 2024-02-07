import { dataBox1 } from '../../../../utils/Sell';
import './boxSell.scss';

const BoxSell = () => {
    console.log(dataBox1.bg);
    return (
        <div
            className='sell__pricing'
            style={{ backgroundImage: `url(${dataBox1.bg})` }}
        >
            <div className='sell__pricing-wrapper'>
                <div className='sell__pricing-left'>
                    <div className='pricing__left-explore'>
                        <div className='border'></div>
                        <div className='pricing__title'>
                            <h3>{dataBox1.title}</h3>
                        </div>
                        <div className='pricing__desc'>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: dataBox1.desc,
                                }}
                            ></p>
                        </div>
                        <div className='pricing__button-wrapper'>
                            <button className='explore__btn'>
                                {dataBox1.btn1}
                            </button>
                            <button className='watch__btn'>
                                {dataBox1.btn2}
                            </button>
                        </div>
                    </div>
                    <div className='pricing__quotes'>
                        <div className='pricing__quotes-title'>
                            <img src={dataBox1.titleQuote} alt='' />
                        </div>
                        <p>{dataBox1.quote}</p>
                        <div className='pricing__quotes-wrapper'>
                            <div className='quotes__img'>
                                <img src={dataBox1.quoteImg} alt='' />
                            </div>
                            <div className='quotes__name-wrapper'>
                                <span className='quotes__name'>
                                    {dataBox1.quoteName}
                                </span>
                                <span className='quotes__title'>
                                    {dataBox1.quoteJob}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sell__pricing-right'>
                    <div className='sell__pricing-video'>
                        <video>
                            <source src={dataBox1.videoBg} />
                        </video>
                    </div>
                </div>
            </div>
            <div className='sell__banner'>
                <div
                    className='sell__banner-wrapper'
                    style={{ background: `url(${dataBox1.bgBanner})` }}
                >
                    <h3
                        dangerouslySetInnerHTML={{
                            __html: dataBox1.textBanner,
                        }}
                    ></h3>
                </div>
            </div>
            <div className='sell__lists'>
                <ul className='sell__list-wrapper'>
                    {dataBox1.lists.map((list, i) => (
                        <li className='sell__list' key={i}>
                            <div className='sell__list-icon'>
                                <img src={list.icon} alt='icon' />
                            </div>
                            <h3 className='sell__list-title'>{list.title}</h3>
                            <div
                                dangerouslySetInnerHTML={{ __html: list.desc }}
                                className='sell__list-desc'
                            ></div>
                            <div className='learnMore'>
                                <a href='https://sell.amazon.com/grow?initialSessionID=133-7716221-4439163&ld=AZUSSOA-sell'>
                                    Learn More
                                </a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BoxSell;
