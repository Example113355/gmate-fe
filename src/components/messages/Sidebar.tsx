import React from 'react';
import Conversation from './Conversation';
import useGetConversations from '../../hooks/useGetConversations';

interface ConversationState {
  _id: string;
  avatar: string;
  firstName: string;
  lastName: string;
}

const Sidebar: React.FC = () => {
  const { conversations } = useGetConversations();

  return (
    <div className="flex flex-col overflow-auto">
      {
        conversations.map((conversation: ConversationState) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
          />
        ))
      }
    </div>
  );
};

export default Sidebar;
