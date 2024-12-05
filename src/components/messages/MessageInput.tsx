import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

import useSendMessage from "../../hooks/useSendMessage";

const MessageInput: React.FC = () => {
  const [message, setMessage] = useState("");
  const { sendMessage } = useSendMessage();

  const handleSubmit = async () => {
    if (!message) return;
    try {
      await sendMessage(message);
      setMessage("");
    } catch (error) {
      alert("Bạn cần thuê Player trước khi nhắn tin");
      setMessage("");
    }
  };

  return (
    <div className="flex items-center px-4 py-3 bg-white border-t border-gray-300 h-1/7">
      <input
        type="text"
        placeholder="Type a message"
        className="h-full flex-1 border rounded-lg p-3 bg-white border-gray-300 text-2xl"
        value={message} // Bind the input value to state
        onChange={(e) => setMessage(e.target.value)} // Update state on input change
      />
      <button onClick={() => handleSubmit()} className="ml-3">
        <FontAwesomeIcon
          icon={faPaperPlane}
          color={message ? "#f0564a" : "gray"}
          className="text-4xl"
        />
      </button>
    </div>
  );
};

export default MessageInput;
