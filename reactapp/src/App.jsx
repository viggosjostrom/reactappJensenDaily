import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import ArticleList from './ArticleList';
import TopicList from './TopicList';
import Subscription from './pages/Subscription';
import Contact from './pages/Contact';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer'; // Kontrollera att filvägen är korrekt

function App() {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleTopicSelect = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route 
            path="/articles" 
            element={
              <>
                <TopicList onTopicSelect={handleTopicSelect} />
                <ArticleList selectedTopic={selectedTopic} />
              </>
            } 
          />
          <Route path="/contact" element={<Contact />} />  
          <Route path="/subscription" element={<Subscription />} />
        </Routes>
      </div>
      <Footer /> {/* Lägg till footern här */}
    </Router>
  );
}

export default App;