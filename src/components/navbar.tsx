import { useState, useEffect } from "react";
import { apiCall } from "../utils/http";
import ChatBox from "./messages/ChatBox";
import TabBar from "./tabs/tabBar";
import { TabState } from "./tabs/interface";
import { CiSearch  } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";

import PaymentModal from "../components/payment-modal";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

interface NavbarProps {
  tabState: TabState;
  setTabState: React.Dispatch<React.SetStateAction<TabState>>;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ tabState, setTabState, onLogout }) => {
  const navigate = useNavigate();
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const { user } = useUser();
  const [balance, setBalance] = useState(0);

  const handleTabChange = (id: string) => {
    setTabState((prevState) => ({ ...prevState, activeTabId: id }));
    navigate(tabState.tabs.find((tab) => tab.id === id)?.to || "/");
  };

  useEffect(() => {
    const fetchBalance = async () => {
      console.log("user:", user);
      if( user._id)
      {
        try {
          console.log(user._id);
          const response = await apiCall('get', `http://localhost:3000/api/v1/wallets/user/${user._id}`);
          setBalance(response.balance);
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    };

    fetchBalance();
  }, [user._id]);

  const openChatBox = () => setIsChatBoxOpen(true);
  const closeChatBox = () => setIsChatBoxOpen(false);
  const handleOpenPaymentModal = () => setShowPaymentModal(true);
  const handleClosePaymentModal = () => setShowPaymentModal(false);

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
          {user.email === "" ? (
            //login button
            <span
              className="text-primary  text-2xl "
              //set cursor to pointer
              style={{ cursor: "pointer" }}
              onClick={() => {
                navigate("/login");
              }}
            >
              Đăng nhập
            </span>
          ) : (
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
                  true ? (
                    <div className="absolute top-3 right-3 w-3 h-3 bg-red-500 rounded-full" />
                  ) : null
                }
              </button>

              <div className="hidden miic:flex items-center justify-center bg-background px-4 py-2 rounded-lg">
                <img
                  src="/assets/img/token-branded_bcoin.png"
                  alt=""
                  className="w-10 h-10"
                ></img>
                <h1 className="font-suez text-black text-xl ml-2">{balance.toLocaleString()} đ</h1>
                <button
                  className="flex items-center justify-center ml-3"
                  onClick={handleOpenPaymentModal}
                >
                  <img
                    src="/assets/img/PlusIcon.png"
                    alt=""
                    className="w-6 h-6"
                  />
                </button>
              </div>

              <button
                className="flex items-center shrink-0"
                onClick={() => {
                  //logout
                  onLogout();
                }}
              >
                <img
                  src= {user.avatar}
                  alt="Player"
                  className="w-20 h-20 rounded-full ml-4 border-3 border-primary"
                />
              </button>
            </div>
          )}
        </div>
      </nav>
      <PaymentModal show={showPaymentModal} onClose={handleClosePaymentModal} />
      <ChatBox isOpen={isChatBoxOpen} onClose={closeChatBox} />
    </>
  );
};

export default Navbar;
