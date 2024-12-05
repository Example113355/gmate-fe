import React, { useState, useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages";

import Message from "./Message";
import useListenMessages from "../../hooks/useListenMessages";

const Messages: React.FC = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages();
  const lastMessageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto px-4 text-2xl">
      {!loading &&
        messages.length > 0 &&
        messages.map((message: any) => (
          <div key={message._id} ref={lastMessageRef} className="flex flex-col">
            <Message message={message} />
          </div>
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center">Gửi tin nhắn để bắt đầu cuộc trò chuyện</p>
      )}
    </div>
  );
};

export default Messages;
