import { useState } from 'react';
import ChatBox from './messages/ChatBox';
import MessageModal from './messages/MessageModal';

const Navbar = () => {
  const [isChatBoxOpen, setChatBoxOpen] = useState(false);
  const [isMessageModalOpen, setMessageModalOpen] = useState(false);

  const openChatBox = () => setChatBoxOpen(true);
  const closeChatBox = () => setChatBoxOpen(false);

  const openMessageModal = () => setMessageModalOpen(true);
  const closeMessageModal = () => setMessageModalOpen(false);

  return (
    <>
      <nav className="bg-white shadow-md border-b-4 border-primary">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a className="text-2xl font-bold text-red-600" href="/">
            Gmate
          </a>
          <div className="flex items-center space-x-4">
            <button className="text-red-500 hover:text-red-600" onClick={openChatBox}>
              <span
                className="iconify w-6 h-6"
                data-icon="fluent:chat-multiple-heart-28-regular"
                data-inline="false"
              ></span>
            </button>
            <button className="text-gray-700 hover:text-gray-800" onClick={openMessageModal}>
              <span
                className="iconify w-6 h-6"
                data-icon="fa-solid:comment"
                data-inline="false"
              ></span>
              CHAT
            </button>
          </div>
        </div>
      </nav>

      {/* Chat Box Component */}
      <ChatBox isOpen={isChatBoxOpen} onClose={closeChatBox} />

      {/* Message Modal Component */}
      <MessageModal isOpen={isMessageModalOpen} onClose={closeMessageModal} />
    </>
  );
};

export default Navbar;
