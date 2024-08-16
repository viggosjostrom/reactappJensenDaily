import React, { useEffect, useState } from 'react';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/articles')
            .then(response => response.json())
            .then(data => setArticles(data))
            .catch(error => console.error('Error fetching articles:', error));
    }, []);

    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map(article => (
                    <li key={article.title}>
                        <h3>{article.title}</h3>
                        <p>{article.summary}</p>
                        <a href={article.link}>Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;
