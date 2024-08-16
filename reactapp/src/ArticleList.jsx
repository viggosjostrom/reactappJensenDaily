import React, { useEffect, useState } from 'react';
const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/articles')
            .then(response => response.json())
            .then(data => {
                setArticles(data);
            })
            .catch(error => {
                console.error('There was an error fetching the articles!', error);
            });
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {articles.map(article => (
                    <li key={article.title}>
                        <h2>{article.title}</h2>
                        <p>{article.summary}</p>
                        <a href={article.link}>Read more</a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ArticleList;

//Hejsan