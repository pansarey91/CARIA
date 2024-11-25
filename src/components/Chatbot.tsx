import React, { useState } from 'react';
import axios from 'axios';

const Chatbot: React.FC = () => {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [isThinking, setIsThinking] = useState(false); // State for loading animation

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    // Add user message to the chat
    const userMessage = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Reset input field and show the thinking animation
    setInput('');
    setIsThinking(true);

    // Simulated delay for "thinking"
    setTimeout(async () => {
      try {
        // Call OpenAI API
        const response = await axios.post(
          'https://api.openai.com/v1/chat/completions',
          {
            model: 'gpt-3.5-turbo',
            messages: [...messages, userMessage],
          },
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer YOUR_API_KEY`,
            },
          }
        );

        // Add AI response to the chat
        const aiMessage = { role: 'assistant', content: response.data.choices[0].message.content };
        setMessages((prev) => [...prev, aiMessage]);
      } catch (error) {
        console.error('Error communicating with AI:', error);
      } finally {
        setIsThinking(false); // Hide the thinking animation after response
      }
    }, 2000); // 2000ms delay (2 seconds)
  };

  return (
    <div>
      {/* Internal CSS for animation */}
      <style>{`
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin {
          animation: spin 1s linear infinite;
        }
        .thinking-container {
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 10px;
        }
        .thinking-message {
          margin-left: 10px;
          color: gray;
          font-size: 14px;
        }
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

        /* Glow effect for the card */
        .card {
          background: white;
          border-radius: 8px;
          padding: 20px;
          max-width: 600px;
          margin: 20px auto;
          border: 1px solid #ddd; /* Light border */
          box-shadow: 0 0 10px rgba(0, 0, 255, 0.5); /* Initial glow effect */
          transition: box-shadow 0.3s ease-in-out;
        }

        /* Glowing animation */
        .card:hover {
          box-shadow: 0 0 25px rgba(0, 0, 255, 0.8); /* Stronger glow on hover */
        }

        /* Simple message bubbles */
        .message {
          background: #f1f1f1;
          border-radius: 12px;
          padding: 12px;
          margin-bottom: 10px;
          max-width: 80%;
        }
        .message.user {
          background-color: #007bff;
          color: white;
          text-align: right;
        }
        .message.assistant {
          background-color: #e1e1e1;
          color: black;
          text-align: left;
        }

        /* Simple input and button */
        .input, .button {
          width: 100%;
          padding: 12px;
          border-radius: 8px;
          border: 1px solid #ddd;
          font-size: 16px;
        }

        .button {
          background-color: #007bff;
          color: white;
          cursor: pointer;
        }
        .button:hover {
          background-color: #0056b3;
        }

        .button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }

      `}</style>

      <div className="card" style={{marginTop: '100px'}}>
        <h2 className="text-xl font-bold mb-4" style={{ fontSize: '30px', fontWeight: 'bold', color: 'black', textAlign: 'center', marginTop: '30px' }}>
          Chat with Career Counselor
        </h2>
        <div className="h-64 overflow-y-auto mb-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`message ${msg.role === 'user' ? 'user' : 'assistant'}`}
            >
              {msg.content}
            </div>
          ))}

          {/* Thinking animation */}
          {isThinking && (
            <div className="thinking-container">
              <div
                className="animate-spin"
                style={{
                  width: '30px',
                  height: '30px',
                  border: '4px solid blue',
                  borderTop: '4px solid transparent',
                  borderRadius: '50%',
                }}
              ></div>
              <span className="thinking-message">Bot is Thinking...</span>
            </div>
          )}
        </div>

        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
          className="input mb-2"
        />
        <button
          onClick={handleSendMessage}
          className="button"
          disabled={isThinking}
        >
          {isThinking ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
