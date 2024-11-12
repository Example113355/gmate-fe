import React, { useEffect, useRef } from 'react';
import Message from './Message';

const Messages: React.FC = () => {
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, []);

  return (
    <div className="flex-1 overflow-y-auto px-4 text-2xl">
      <Message text="Hello, this is a message from the other user! Hello, this is a message from the other user!" isUser={false} />
      <Message text="Hello! This is a message from you." isUser={true} />
      <Message text="Another message to test scrolling..." isUser={false} />
      <Message text="More messages to test scrollability." isUser={true} />
      <Message text="Hello, this is a message from the other user!" isUser={false} />
      <Message text="Hello! This is a message from you." isUser={true} />
      <Message text="Another message to test scrolling..." isUser={false} />
      <Message text="More messages to test scrollability." isUser={true} />

      {/* Invisible div to anchor scroll position */}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default Messages;
