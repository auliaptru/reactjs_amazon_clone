import { articles } from '../../../../utils/DigitalServices';
import './articles.scss';

const Articles = () => {
    return (
        <div className='sc__articles'>
            <h2>Popular Articles</h2>
            <div className='sc__articles-wrapper'>
                <ul>
                    {articles.map((article, i) => (
                        <li key={i}>
                            <a
                                href={article.link}
                                target='_blank'
                                rel='noreferrer'
                            >
                                <img src={article.imgSrc} alt='' />
                                <span>{article.text}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Articles;
