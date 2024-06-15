import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import './styles.css'; // Import the stylesheet
import 'react-toastify/dist/ReactToastify.css'; // Import toast styles

function ChatbotInterface() {
  const [message, setMessage] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const handleChange = (event) => {
    setMessage(event.target.value); // Update message state on change
  };

  const [uploadSuccessMessage, setUploadSuccessMessage] = useState('');

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append('pdfFile', selectedFile);

    const response = await fetch('/upload-pdf', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      setUploadSuccessMessage('PDF uploaded successfully!');
      toast.success(uploadSuccessMessage, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    } else {
      // Handle upload errors (e.g., display error toast)
      toast.error("Error uploading PDF!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
      });
    }
  };

  const handleSendMessage = async () => {
    if (!message) return;

    const response = await fetch('/process-prompt', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: message }),
    });

    const responseData = await response.json();

    // Update the chatbot UI with the response from FastAPI (e.g., chatbot answer)
    setMessage(''); // Clear the message input after sending
  };

  return (
    <div className="chatbot-container">
      <header className="chatbot-header">
        <h2>Chatbot</h2>
        <button className="add-pdf-button" onClick={() => document.getElementById('pdf-upload').click()}>
          Upload PDF
        </button>
      </header>
      <div className="chatbot-body">
        {/* Chat history would go here */}
      </div>
      <footer className="chatbot-footer">
        <label htmlFor="prompt-input">Send Message:</label>
        <input
          id="prompt-input"
          type="text"
          value={message}
          onChange={handleChange}
          placeholder="Type your message here..."
        />
        <button className="send-message-button" onClick={handleSendMessage}>
          Send Message
        </button>
      </footer>
      <input
        type="file"
        id="pdf-upload"
        accept=".pdf"
        onChange={handleFileChange}
        style={{ display: 'none' }}
      />
      <ToastContainer />
    </div>
  );
}

export default ChatbotInterface;
