import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMessageCircle, FiX, FiSend } from "react-icons/fi";
import { chatbotData } from "../../data/portfolioData";
import "./Chatbot.css";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const quickReplies = [
    { label: "Skills", query: "What are your skills?" },
    { label: "Projects", query: "Tell me about your projects" },
    { label: "Contact", query: "How can I contact you?" },
    { label: "Experience", query: "Tell me about your experience" },
    { label: "AI Work", query: "What AI work have you done?" },
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setMessages([{ type: "bot", text: chatbotData.greeting }]);
        setIsTyping(false);
      }, 800);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  const findResponse = (query) => {
    const lowerQuery = query.toLowerCase();
    const { keywords, responses } = chatbotData;

    for (const [category, words] of Object.entries(keywords)) {
      if (words.some((word) => lowerQuery.includes(word))) {
        return responses[category];
      }
    }

    return responses.default;
  };

  const handleSend = (text = input) => {
    if (!text.trim()) return;

    const userMessage = { type: "user", text: text.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setShowQuickReplies(false);
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = findResponse(text);
      setMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
      setIsTyping(false);
      setShowQuickReplies(true);
    }, 800 + Math.random() * 600);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <motion.button
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Toggle chatbot"
        id="chatbot-toggle-btn"
      >
        {isOpen ? <FiX /> : <FiMessageCircle />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-info">
                <div className="chatbot-avatar">🤖</div>
                <div className="chatbot-header-text">
                  <h4>Nithin's Portfolio Assistant</h4>
                  <p>Ask me anything!</p>
                </div>
              </div>
              <button
                className="chatbot-close"
                onClick={() => setIsOpen(false)}
                aria-label="Close chatbot"
                id="chatbot-close-btn"
              >
                <FiX />
              </button>
            </div>

            {/* Messages */}
            <div className="chatbot-messages">
              {messages.map((msg, index) => (
                <div key={index} className={`chat-message ${msg.type}`}>
                  {msg.text}
                </div>
              ))}

              {isTyping && (
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}

              {showQuickReplies && messages.length > 0 && !isTyping && (
                <div className="quick-replies">
                  {quickReplies.map((reply, i) => (
                    <button
                      key={i}
                      className="quick-reply-btn"
                      onClick={() => handleSend(reply.query)}
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="chatbot-input">
              <input
                ref={inputRef}
                type="text"
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                id="chatbot-input-field"
              />
              <button
                className="chatbot-send"
                onClick={() => handleSend()}
                aria-label="Send message"
                id="chatbot-send-btn"
              >
                <FiSend />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
