import React from 'react';
import './css/TopicList.css'; // Importera CSS-filen

const TopicList = ({ onTopicSelect }) => {
    const [topics, setTopics] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:3000/api/articles')
            .then(response => response.json())
            .then(data => {
                const topicsSet = new Set();
                data.forEach(article => {
                    article.topic.forEach(t => topicsSet.add(t));
                });
                setTopics(Array.from(topicsSet));
            })
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    const handleTopicClick = (topic) => {
        onTopicSelect(topic); // Skicka det valda ämnet uppåt
    };

    return (
        <div className="topic-menu">
            <ul className="topic-list">
                {topics.map(topic => (
                    <li key={topic} className="topic-item">
                        <button onClick={() => handleTopicClick(topic)} className="topic-link">{topic}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicList;