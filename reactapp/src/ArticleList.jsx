import React, { useEffect, useState } from 'react';
import './css/ArticleList.css'; 

const ArticleList = ({ selectedTopic }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    const filteredArticles = selectedTopic && selectedTopic !== 'Alla Artiklar'
        ? articles.filter(article => article.topic.includes(selectedTopic))
        : articles;

    return (
        <div className="article-container">
            {filteredArticles.map(article => (
                <div key={article.title} className="article-item">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-summary">{article.summary}</p>
                    <a href={article.link} className="article-link" target="_blank">Read more</a>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;