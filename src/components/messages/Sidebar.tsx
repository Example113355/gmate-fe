import React from 'react';
import Conversation from './conversation';

const Sidebar: React.FC = () => {
  return (
    <div className="flex flex-col overflow-auto">
      <Conversation
        name="Khải Tạ"
        lastMessage="hello b"
        lastActive="8 giờ trước"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
      {/* Additional conversations */}
      <Conversation
        name="John Doe"
        lastMessage="See you soon!"
        lastActive="1 giờ trước"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
      <Conversation
        name="John Doe"
        lastMessage="See you soon!"
        lastActive="1 giờ trước"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
      <Conversation
        name="John Doe"
        lastMessage="See you soon!"
        lastActive="1 giờ trước"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
      <Conversation
        name="John Doe"
        lastMessage="See you soon!"
        lastActive="1 giờ trước"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
      <Conversation
        name="John Doe"
        lastMessage="See you soon!"
        lastActive="1 giờ trước"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
      <Conversation
        name="John Doe"
        lastMessage="See you soon!"
        lastActive="1 giờ trước"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
      <Conversation
        name="John Doe"
        lastMessage="See you soon!"
        lastActive="1 giờ trước"
        avatarUrl="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
      />
    </div>
  );
};

export default Sidebar;
