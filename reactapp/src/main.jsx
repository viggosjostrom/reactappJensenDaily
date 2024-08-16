import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import React from 'react';
import ArticleList from './ArticleList';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


const Main = () => {
    return (
        <div>
            <h1>Welcome to the News App</h1>
            <ArticleList/>
        </div>
    );
};

export default Main;