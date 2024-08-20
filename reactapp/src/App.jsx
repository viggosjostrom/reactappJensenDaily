import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import ArticleList from './ArticleList';
import TopicList from './TopicList';
import Subscription from './pages/Subscription';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/articles" element={
            <>
              <TopicList />
              <ArticleList />
            </>
          } />
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
