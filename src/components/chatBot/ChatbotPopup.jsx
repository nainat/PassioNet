import React, { useState } from "react";
import "./ChatbotPopup.css"; 

export default function ChatbotPopup() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button className="chatbot-btn" onClick={() => setIsOpen(true)}>
        Open Chatbot
      </button>

      {isOpen && (
        <div className="chatbot-modal">
          <div className="chatbot-content">
            <button className="close-btn" onClick={() => setIsOpen(false)}>×</button>
            <iframe
              src="http://localhost:3000" 
              title="Chatbot"
              className="chatbot-frame"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}
