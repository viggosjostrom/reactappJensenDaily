import React from 'react';
import './App.css';
import ArticleList from './ArticleList';
import TopicList from './Topiclist'; // Import the new component

function App() {
  return (
    <div className='container'>
      <TopicList /> {/* Add the TopicList component */}
      <ArticleList />
    </div>
  );
}

export default App;