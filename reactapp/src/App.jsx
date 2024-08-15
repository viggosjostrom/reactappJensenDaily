import React, { useState, useEffect } from 'react';
import './App.css'; // Import the CSS file

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
    <div className="container">
      <h1>{message}</h1>
      <div className="counter">
        <p>You clicked {count} times</p>
        <button onClick={incrementCounter}>Click me</button>
      </div>
    </div>
  );
}

export default App;
