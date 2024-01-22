import './helpContent.scss';
import { helpTopics } from '../../../utils/CustomerService';
import { useEffect, useState } from 'react';

const HelpContent = () => {
    const [isSelected, setSelected] = useState(false);
    const [value, setValue] = useState('');
    const [contents, setContents] = useState([]);

    const handleSelected = (topic) => {
        setValue(topic);
        setSelected(topic);
    };

    useEffect(() => {
        const topicSelected = helpTopics.find((topic) => topic.label === value);
        if (topicSelected) {
            const contentsSelected = topicSelected.contents || [];
            setContents(contentsSelected);
        }
    }, [value]);

    return (
        <div className='help__content'>
            <div className='help__content-wrapper'>
                <label>
                    <h2>Search our help library</h2>
                    <form action='' className='help__content-search'>
                        <div className='search__wrapper'>
                            <i className='icon__search'></i>
                            <input
                                type='search'
                                placeholder='Type something like, "question about a charge"'
                                id='help'
                                name='help'
                            />
                        </div>
                    </form>
                </label>
                <h2>All help topics</h2>
                <div className='help__topics'>
                    <div className='help__topics-filter'>
                        <ul>
                            {helpTopics.map((data, i) => (
                                <li
                                    key={i}
                                    className={
                                        isSelected === data.label
                                            ? 'selected'
                                            : ''
                                    }
                                    onClick={() => handleSelected(data.label)}
                                >
                                    {data.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='help__topics-contents'>
                        <div className='contents__wrapper'>
                            {contents.map((content, i) => (
                                <div className='content__card-wrapper' key={i}>
                                    <div className='content__card'>
                                        <span className='card__title'>
                                            {content.title}
                                        </span>
                                        <div
                                            className='card__desc'
                                            dangerouslySetInnerHTML={{
                                                __html: content.desc,
                                            }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HelpContent;
