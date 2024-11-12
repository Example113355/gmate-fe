import { useState } from "react";
import { apiCall } from "../utils/http";
import ChatBox from "./messages/ChatBox";

const Navbar = () => {
  let baseUrl = import.meta.env.VITE_API_BASE_URL;
  apiCall(baseUrl, "GET");

  const [isChatBoxOpen, setChatBoxOpen] = useState(false);

  const openChatBox = () => setChatBoxOpen(true);
  const closeChatBox = () => setChatBoxOpen(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="container">
            <a className="navbar-brand" href="/">
              Gmate
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              style={{ width: "35px", height: "35px" }} 
              className="text-red-500 hover:text-red-600 p-2 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              onClick={openChatBox}
            >
              <span
                className="iconify"
                style={{ fontSize: "28px" }} 
                data-icon="fluent:chat-multiple-heart-28-regular"
                data-inline="false"
              ></span>
            </button>
          </div>
        </div>
      </nav>

      <ChatBox isOpen={isChatBoxOpen} onClose={closeChatBox} />
    </>
  );
};

export default Navbar;
