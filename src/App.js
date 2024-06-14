import React, { useState } from 'react';
import './styles.css'; // Import the stylesheet




function ChatbotInterface() {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <h2>Chatbot</h2>
        <button className="add-pdf-button">Add PDF</button>
      </header>
      <div className="chatbot-body">
        {/* Chat history would go here */}
      </div>
      <footer className="chatbot-footer">
        <label htmlFor="prompt-input">Enter your message:</label>
        <input
          id="prompt-input"
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message here..."
        />
      </footer>
    </div>
  );
}

export default ChatbotInterface;

