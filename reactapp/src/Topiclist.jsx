import React, { useEffect, useState } from 'react';
import './css/TopicList.css'; // Import the CSS file

const TopicList = () => {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
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

    return (
        <div className="topic-menu">
            <ul className="topic-list">
                {topics.map(topic => (
                    <li key={topic} className="topic-item">
                        <a href={`#${topic}`} className="topic-link">{topic}</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopicList;