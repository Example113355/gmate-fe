import React, { useEffect, useState } from "react";
import Conversation from "./Conversation";

import { get } from "../../utils/http_2";
interface SidebarProps {
  selectedConversation: any;
  setSelectedConversation: React.Dispatch<React.SetStateAction<null>>;
}

const Sidebar = ({
  selectedConversation,
  setSelectedConversation,
}: SidebarProps) => {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    // Fetch conversations
    get("/messages/get-conversations", {}).then((response: any) => {
      console.log("Get conversations response:");
      console.log(response);
      if (response.status === 200) {
        setConversations(response.data);
      }
      console.log("Conversations:");
      console.log(response.data);
      setSelectedConversation(response.data[0]);
    });
  }, []);
  return (
    <div className="flex flex-col overflow-auto">
      {/* Additional conversations */}
      {conversations.map((conversation: any) => (
        <Conversation
          name={conversation.firstName + " " + conversation.lastName}
          lastMessage=""
          lastActive=""
          avatarUrl={
            conversation.avatar ??
            "https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png"
          }
          onClick={() => setSelectedConversation(conversation)}
          isSelected={selectedConversation?._id === conversation._id}
        />
      ))}
    </div>
  );
};

export default Sidebar;
