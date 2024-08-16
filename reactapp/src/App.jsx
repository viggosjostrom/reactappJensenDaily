import React, { useState, useEffect } from 'react';
import './App.css';
import Main from './main';

function App() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0); // Initialize counter state

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  // Function to increment the counter
  const incrementCounter = () => {
    setCount(count + 1);
  };

  return (
    <div className='container'>
      {/* Display the message from the backend */}
      <h1>{message}</h1>
      {/* Render Main component which includes the ArticleList */}
      <Main />
    </div>
  );
}

export default App;