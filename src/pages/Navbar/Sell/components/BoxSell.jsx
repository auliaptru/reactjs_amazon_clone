// import { data } from '../../../../utils/Sell';
import './boxSell.scss';

const BoxSell = ({ data, heightImgQuote }) => {
    return (
        <div
            className='sell__pricing'
            style={{ backgroundImage: `url(${data.bg})` }}
        >
            <div className='sell__pricing-wrapper'>
                <div className='sell__pricing-left'>
                    <div className='pricing__left-explore'>
                        <div
                            className='border'
                            style={{ backgroundImage: `url(${data.borderBg})` }}
                        ></div>
                        <div className='pricing__title'>
                            <h3>{data.title}</h3>
                        </div>
                        <div className='pricing__desc'>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: data.desc,
                                }}
                            ></p>
                        </div>
                        <div className='pricing__button-wrapper'>
                            <button className='explore__btn'>
                                {data.btn1}
                            </button>
                            <button className='watch__btn'>{data.btn2}</button>
                        </div>
                    </div>
                    <div className='pricing__quotes'>
                        <div
                            className='pricing__quotes-title'
                            style={{ height: `${heightImgQuote}px` }}
                        >
                            <img src={data.titleQuote} alt='' />
                        </div>
                        <p>{data.quote}</p>
                        <div className='pricing__quotes-wrapper'>
                            {data.quoteImg && (
                                <div className='quotes__img'>
                                    <img src={data.quoteImg} alt='' />
                                </div>
                            )}
                            <div className='quotes__name-wrapper'>
                                <span className='quotes__name'>
                                    {data.quoteName}
                                </span>
                                <span className='quotes__title'>
                                    {data.quoteJob}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='sell__pricing-right'>
                    <div className='sell__pricing-video'>
                        <video
                            preload='false'
                            autoPlay
                            style={{ backgroundImage: `url(${data.videoBg})` }}
                        >
                            <source type='video/mp4' src={data.videoUrl} />
                        </video>
                    </div>
                </div>
            </div>
            <div
                className='sell__banner'
                style={{ backgroundImage: `url(${data.bg})` }}
            >
                <div
                    className='sell__banner-wrapper'
                    style={{ backgroundImage: `url(${data.bgBanner})` }}
                >
                    <h3
                        dangerouslySetInnerHTML={{
                            __html: data.textBanner,
                        }}
                    ></h3>
                </div>
            </div>
            <div className='sell__lists'>
                <ul className='sell__list-wrapper'>
                    {data.lists.map((list, i) => (
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
                                <a href={list.link}>Learn More</a>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default BoxSell;
