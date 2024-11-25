import { useState } from "react";
import { apiCall } from "../utils/http";
import ChatBox from "./messages/ChatBox";
import TabBar from "./tabs/tabBar";
import { TabState } from "./tabs/interface";
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import { Button } from "antd";
import PaymentModal from '../components/payment-modal';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let baseUrl = import.meta.env.VITE_API_BASE_URL;
  apiCall(baseUrl, "GET");
  const hasNoti = true;
  const navigate = useNavigate();
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [tabState, setTabState] = useState<TabState>({
    activeTabId: "1",
    tabs: [
      { id: "1", title: "Trang chủ", to: "/" },
      { id: "2", title: "Trở thành GMater", to: "/user-homepage" },
      { id: "3", title: "Cài đặt", to: "/settings" },
    ],
  });

  const handleTabChange = (id: string) => {
    setTabState((prevState) => ({ ...prevState, activeTabId: id }));
    navigate(tabState.tabs.find((tab) => tab.id === id)?.to || "/");
  };

  const openChatBox = () => setIsChatBoxOpen(true);
  const closeChatBox = () => setIsChatBoxOpen(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const handleOpenPaymentModal = () => {
    setShowPaymentModal(true);
  };

  const handleClosePaymentModal = () => {
    setShowPaymentModal(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-md">
        <div className="px-14 py-3 flex justify-between items-center relative">
          <div className="flex items-center">
            <TabBar
              isDesktop={false}
              tabState={tabState}
              onTabChange={handleTabChange}
            />
            <a className="navbar-brand flex items-center shrink-0" href="/">
              <img src="/assets/img/Logo@2x.png" width="140" alt=""></img>
            </a>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2">
            <TabBar
              isDesktop={true}
              tabState={tabState}
              onTabChange={handleTabChange}
            />
          </div>

          <div className="flex items-center space-x-4">
            <button
              style={{ width: "35px", height: "35px" }}
              className="text-red-500 hover:text-red-600 p-2 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              onClick={() => {
                navigate("/user/1");
              }}
            >
              <CiSearch style={{ fontSize: "28px" }} />
            </button>
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
            <button
              style={{ width: "35px", height: "35px" }}
              className="relative  text-red-500 hover:text-red-600 p-2 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              onClick={() => {}}
            >
              <RiNotification2Line style={{ fontSize: "24px" }} />
              {
                // Notification badge
                hasNoti ? (
                  <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full" />
                ) : null
              }
            </button>

            <div
              className="
            hidden miic:flex items-center justify-center bg-background px-4 py-2 rounded-lg   
            "
            >
              <img
                src="/assets/img/token-branded_bcoin.png"
                alt=""
                className="w-10 h-10"
              ></img>
              <h1 className="font-suez text-black text-xl ml-2">20.000đ</h1>
              <button className="flex items-center justify-center ml-3" onClick={handleOpenPaymentModal}>
                <img
                  src="src/assets/img/PlusIcon.png"
                  alt=""
                  className="w-6 h-6"
                />
              </button>
            </div>

            <div className="flex items-center shrink-0">
              <img
                src="/assets/img/Player Image.png"
                alt="Player"
                className="w-20 h-20 rounded-full ml-4 border-3 border-primary" // Adds a border
              />
            </div>
          </div>
        </div>
      </nav>
      <PaymentModal show={showPaymentModal} onClose={handleClosePaymentModal} />

      <ChatBox isOpen={isChatBoxOpen} onClose={closeChatBox} />
    </>
  );
};

export default Navbar;
