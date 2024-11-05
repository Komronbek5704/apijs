import React, { useState } from "react";
import { getChatResponse } from "../services/chatService";

const ChatComponent = () => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChat([...chat, { sender: "user", text: message }]);

    try {
      const reply = await getChatResponse(message);
      setChat([...chat, { sender: "user", text: message }, { sender: "bot", text: reply }]);
      setMessage("");
    } catch (error) {
      console.error("API xatosi:", error);
    }
  };

  return (
    <div>
      <div>
        {chat.map((msg, index) => (
          <div key={index} className={msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300"}>
            {msg.text}
          </div>
        ))}
      </div>
      <input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Send a message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default ChatComponent;
