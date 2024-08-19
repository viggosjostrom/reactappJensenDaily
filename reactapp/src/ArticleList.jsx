import React, { useEffect, useState } from 'react';
import './css/ArticleList.css'; // Importera CSS-filen

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div className="article-container">
            {articles.map(article => (
                <div key={article.title} className="article-item">
                    <h3 className="article-title">{article.title}</h3>
                    <p className="article-summary">{article.summary}</p>
                    <a href={article.link} className="article-link">Read more</a>
                </div>
            ))}
        </div>
    );
};

export default ArticleList;
