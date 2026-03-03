import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X } from "lucide-react";
import { useLocation } from "react-router-dom";
import { sendMessage as sendToApi } from "../services/ai";
import "./AIChat.css";

const AIChat = () => {
  const location = useLocation();

  // Hide chat on quiz and assignments pages
  const isHidden =
    location.pathname.includes("/quiz/") ||
    location.pathname.includes("/assignments/");
  if (isHidden) return null;

  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState(() => {
    try {
      const raw = localStorage.getItem("coursecode_ai_messages");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      return [];
    }
  });
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem("coursecode_ai_messages", JSON.stringify(messages));
    } catch (e) {}
  }, [messages]);

  useEffect(() => {
    if (open && endRef.current)
      endRef.current.scrollIntoView({ behavior: "smooth" });
  }, [open, messages]);

  const handleSend = async () => {
    const trimmed = input.trim();
    if (!trimmed) return;
    const userMsg = { from: "user", text: trimmed, ts: Date.now() };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const res = await sendToApi(trimmed);
      const botMsg = { from: "bot", text: res, ts: Date.now() };
      setMessages((m) => [...m, botMsg]);
    } catch (err) {
      const botMsg = {
        from: "bot",
        text: "Sorry, I couldn't reach the chat service.",
        ts: Date.now(),
      };
      setMessages((m) => [...m, botMsg]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && (e.ctrlKey || !e.shiftKey)) {
      e.preventDefault();
      handleSend();
    }
  };

  const clearConversation = () => {
    setMessages([]);
  };

  return (
    <>
      <div className="ai-chat-button-container">
        <button
          aria-label="Open course assistant"
          className="ai-chat-button"
          onClick={() => setOpen((o) => !o)}
        >
          <MessageCircle size={18} />
        </button>
      </div>

      {open && (
        <div className="ai-chat-modal">
          <div className="ai-chat-header">
            <div className="ai-chat-title">Course Assistant</div>
            <div className="ai-chat-header-buttons">
              <button onClick={clearConversation} className="ai-chat-clear-btn">
                Clear
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Close chat"
                className="ai-chat-close-btn"
              >
                <X size={20} />
              </button>
            </div>
          </div>
          <div className="ai-chat-messages">
            {messages.length === 0 && (
              <div className="ai-chat-empty-state">
                Ask about courses, lessons, or coding topics.
              </div>
            )}
            <div className="ai-chat-messages-list">
              {messages.map((m, idx) => (
                <div key={m.ts + idx} className={`ai-chat-message ${m.from}`}>
                  <div className={`ai-chat-bubble ${m.from}`}>{m.text}</div>
                </div>
              ))}
              <div ref={endRef} />
            </div>
          </div>

          <div className="ai-chat-footer">
            <textarea
              rows={2}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Type your question and press Enter"
              className="ai-chat-textarea"
            />
            <div className="ai-chat-footer-controls">
              <div className="ai-chat-tip">
                Tip: Enter to send, Shift+Enter for newline
              </div>
              <button
                onClick={handleSend}
                disabled={loading}
                className="ai-chat-send-btn"
              >
                {loading ? "Thinking..." : "Send"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;
