import React, { useState } from 'react';
import '../css/subscriptionStyle.css'; // Anpassa vägen efter din filstruktur

function Subscription() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('Super Deal!');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all the required fields.');
    } else {
      alert(`Thank you for subscribing, ${name}!`);
      // Här kan du också hantera formulärdata, skicka till en server, etc.
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setTitle(event.target.value ? `Welcome, ${event.target.value}!` : 'Super Deal!');
  };

  return (
    <div>
      <h1><strong>{title}</strong></h1>
      <div className="container">
        <p>Sign up now and get 50% off!</p>
        <p>Subscribe now to read full news!</p>
      </div>

      <div className="SubBox">
        <h3><i>Subscribe by filling in this form and click "Apply"</i></h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastname">Lastname:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit">Apply</button>
        </form>
      </div>
    </div>
  );
}

export default Subscription;
