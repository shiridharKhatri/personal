"use client"

import { useState, useRef, useEffect } from "react"
import { IoClose, IoSend, IoChatbubble } from "react-icons/io5"
import { BiBot, BiUser } from "react-icons/bi"
import "../style/chatbot.css"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Shiridhar's AI assistant, powered by Gemini. How can I help you today?\n\nYou can ask me about:\n• Services & Skills\n• Projects & Experience\n• Contact Information\n• Pricing & Availability",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  // --- Gemini API Integration ---
  // Check your .env file to ensure this variable name is correct.
  const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 
  const GEMINI_API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_API_KEY}`;

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  /**
   * Fetches a response from the Gemini API with a retry mechanism.
   */
  const getGeminiResponse = async (message, retries = 3, delay = 1000) => {
    if (!GEMINI_API_KEY) {
      console.error("Gemini API key is missing. Please add VITE_GEMINI_API_KEY to your .env file.");
      return "API Key is not configured. Please contact the site administrator.";
    }

    const context = `You are a helpful and friendly AI assistant for a full-stack developer named Shiridhar Khatri. Your goal is to answer questions about his skills, services, projects, and experience to potential clients. Be professional, concise, and encouraging.

    Here's some information about Shiridhar:
    - **Services**: Custom websites, web applications, responsive design, e-commerce solutions, full-stack development, database design, SEO, AWS deployment.
    - **Skills**: HTML5, CSS3, JavaScript (ES6+), ReactJS, Next.js, Node.js, Express.js, MongoDB, SQL, AWS (EC2, S3, Lambda), Git.
    - **Experience**: 2+ years, 100+ completed projects, 4.9/5 star rating.
    - **Projects**: E-commerce brands (like Manifest & Elevate), admin dashboards, real-time chat apps.
    - **Contact**: shiridharkhatri2@gmail.com, Upwork, LinkedIn, GitHub.
    - **Pricing**: Starts from $280 for business websites and $310 for e-commerce. Offers custom quotes.
    - **Process**: Discovery -> Design -> Development -> Testing & Launch.
    - **Education**: Studying IT at London Metropolitan University.
    
    Now, please answer the following user question:`;

    const payload = {
      contents: [{ parts: [{ text: `${context} "${message}"` }] }],
    };

    try {
      const response = await fetch(GEMINI_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // If the service is unavailable (503), retry the request.
      if (response.status === 503 && retries > 0) {
        console.warn(`Service unavailable. Retrying in ${delay / 1000}s... (${retries - 1} retries left)`);
        await new Promise(res => setTimeout(res, delay));
        // Call itself again with one less retry and double the delay.
        return getGeminiResponse(message, retries - 1, delay * 2);
      }

      if (!response.ok) {
        console.error("API Error:", await response.json());
        return "Sorry, I'm having trouble connecting right now. Please try again later.";
      }

      const data = await response.json();
      const botResponse = data.candidates?.[0]?.content?.parts?.[0]?.text;
      
      return botResponse || "I'm not sure how to answer that. Could you ask in a different way?";

    } catch (error) {
      console.error("Failed to fetch Gemini response:", error);
      return "Oops! Something went wrong. Please check your connection or API key and try again.";
    }
  };

  const sendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return

    const userMessage = {
      id: Date.now(),
      text: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentMessage = inputMessage
    setInputMessage("")
    setIsLoading(true)

    try {
      const response = await getGeminiResponse(currentMessage);
      
      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
       console.error("An unexpected error occurred:", error);
       const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, a critical error occurred. I can't respond right now.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const handleInputChange = (e) => {
    setInputMessage(e.target.value)
    e.target.style.height = "auto"
    e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px"
  }

  const toggleChat = () => {
    setIsOpen(!isOpen)
  }

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  }

  const quickReplies = [
    "What services do you offer?",
    "What are your skills?",
    "How much do you charge?",
    "How can I contact you?",
  ]

  const handleQuickReply = async (reply) => {
    const userMessage = {
        id: Date.now(),
        text: reply,
        sender: "user",
        timestamp: new Date(),
    };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInputMessage(""); 

    try {
      const response = await getGeminiResponse(reply);
      const botMessage = {
          id: Date.now() + 1,
          text: response,
          sender: "bot",
          timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error("An unexpected error occurred in quick reply:", error);
       const errorMessage = {
        id: Date.now() + 1,
        text: "Sorry, a critical error occurred. I can't respond right now.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <>
      {/* Chat Bubble */}
      <div className={`chat-bubble ${isOpen ? "hidden" : ""}`} onClick={toggleChat}>
        <IoChatbubble />
        <div className="chat-bubble-pulse"></div>
      </div>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        {/* Header */}
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="bot-avatar">
              <BiBot />
            </div>
            <div className="bot-info">
              <h3>Shiridhar's AI Assistant</h3>
              <span className="status">Online • Ready to help</span>
            </div>
          </div>
          <button className="close-btn" onClick={toggleChat}>
            <IoClose />
          </button>
        </div>

        {/* Messages */}
        <div className="chat-messages">
          {messages.map((message) => (
            <div key={message.id} className={`message ${message.sender}`}>
              <div className="message-avatar">{message.sender === "bot" ? <BiBot /> : <BiUser />}</div>
              <div className="message-content">
                <div className="message-text" style={{ whiteSpace: "pre-line" }}>
                  {message.text}
                </div>
                <div className="message-time">{formatTime(message.timestamp)}</div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="message bot">
              <div className="message-avatar">
                <BiBot />
              </div>
              <div className="message-content">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}

          {/* Quick Replies */}
          {messages.length === 1 && !isLoading && (
            <div className="quick-replies">
              <div className="quick-replies-title">Quick questions:</div>
              <div className="quick-replies-buttons">
                {quickReplies.map((reply, index) => (
                  <button key={index} className="quick-reply-btn" onClick={() => handleQuickReply(reply)}>
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="chat-input">
          <div className="input-container">
            <textarea
              ref={inputRef}
              value={inputMessage}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything"
              rows="1"
              disabled={isLoading}
            />
            <button onClick={sendMessage} disabled={!inputMessage.trim() || isLoading} className="send-btn">
              <IoSend />
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && <div className="chat-overlay" onClick={toggleChat}></div>}
    </>
  )
}
