import React, { useState } from 'react';
import '../css/contact.css'; // Anpassa vägen efter din filstruktur

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('Contact Form');
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      nameLabel: "Name:",
      emailLabel: "Email:",
      messageLabel: "Message:",
      submitText: "Submit"
    },
    es: {
      nameLabel: "Nombre:",
      emailLabel: "Correo electrónico:",
      messageLabel: "Mensaje:",
      submitText: "Enviar"
    },
    it: {
      nameLabel: "Nome:",
      emailLabel: "Email:",
      messageLabel: "Messaggio:",
      submitText: "Invia"
    },
    fr: {
      nameLabel: "Nom:",
      emailLabel: "Email:",
      messageLabel: "Message:",
      submitText: "Soumettre"
    },
    da: {
      nameLabel: "Navn:",
      emailLabel: "Email:",
      messageLabel: "Besked:",
      submitText: "Send"
    },
    sv: {
      nameLabel: "Namn:",
      emailLabel: "E-post:",
      messageLabel: "Meddelande:",
      submitText: "Skicka"
    }
  };

  const labels = translations[language] || translations['en'];

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      alert('Please fill in all the required fields.');
    } else {
      alert(`Thank you for contacting us, ${name}!`);
      // Här kan du också hantera formulärdata, skicka till en server, etc.
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
    setTitle(event.target.value ? `Welcome, ${event.target.value}!` : 'Contact Form');
  };

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <div className="bodyclass">
      <h1>{title}</h1>
      <div className="formclass">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name" id="nameLabel">{labels.nameLabel}</label>
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
            <label htmlFor="email" id="emailLabel">{labels.emailLabel}</label>
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
            <label htmlFor="message" id="messageLabel">{labels.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>

          <div className="button-container">
            <select
              id="languageDropdown"
              value={language}
              onChange={handleLanguageChange}
            >
              <option value="en">English</option>
              <option value="es">Español</option>
              <option value="it">Italiano</option>
              <option value="fr">Français</option>
              <option value="da">Dansk</option>
              <option value="sv">Svenska</option>
              {/* Lägg till fler språk här om det behövs */}
            </select>
            
            <input type="submit" value={labels.submitText} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;