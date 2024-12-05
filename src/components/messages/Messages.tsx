import React, { useEffect, useRef } from "react";
import Message from "./Message";
import { useUser } from "../../contexts/UserContext";

interface MessagesProps {
  listMessages: any[]; // Adjust the type according to your actual data structure
}

const Messages: React.FC<MessagesProps> = ({ listMessages }) => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const {user} = useUser();

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto px-4 text-2xl">
      <div className=" flex flex-col px-4 ">
      {listMessages.map((message, index) => (
        <Message
          key={index}
          text={message.message}
          isUser={message.senderId == user._id}
        />
      ))}
      </div>
      

      {/* Example messages */}

      {/* Invisible div to anchor scroll position */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
