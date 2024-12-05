import React from 'react';

import useConversation from '../../zustand/useConversation';

import MessageInput from './MessageInput';
import Messages from './Messages';

const MessageContainer: React.FC = () => {
  const { selectedConversation } = useConversation();

  return (
    <div className="w-2/3 flex flex-col" style={{ maxHeight: "550px" }}>
      <div className="px-4 py-5 mb-2 bg-white border border-gray-300">
        <span className="label-text text-2xl pr-4">Tới:</span>{' '}
        <span className="text-gray-900 font-bold text-2xl">{selectedConversation?.firstName + " " + selectedConversation?.lastName}</span>
      </div>
      <Messages />
      <MessageInput />
    </div>
  );
};

export default MessageContainer;
