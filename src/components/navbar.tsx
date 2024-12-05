import { useState, useEffect } from "react";
import { apiCall } from "../utils/http";
import ChatBox from "./messages/ChatBox";
import TabBar from "./tabs/tabBar";
import { TabState } from "./tabs/interface";
import { CiSearch } from "react-icons/ci";
import { RiNotification2Line } from "react-icons/ri";
import { PiHandWithdrawDuotone } from "react-icons/pi";
import { FiPlusCircle } from "react-icons/fi";

import PaymentModal from "../components/payment-modal";
import WithdrawModal from "../components/withdraw-modal";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import { post } from "../utils/http_2";

interface NavbarProps {
  tabState: TabState;
  setTabState: React.Dispatch<React.SetStateAction<TabState>>;
  onLogout: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ tabState, setTabState, onLogout }) => {
  const navigate = useNavigate();
  const [isChatBoxOpen, setIsChatBoxOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showWithdrawModal, setShowWithdrawModal] = useState(false);
  const { user } = useUser();
  const [balance, setBalance] = useState(0);
  const [liveBookings, setLiveBookings] = useState<any>(null);
  let dueTime: any = null;
  const calculateTimeLeft = () => {
    const now = new Date();

    const timeDiff =
      dueTime instanceof Date ? dueTime.getTime() - now.getTime() : 0;
    console.log("timeDiff:", timeDiff);
    console.log(dueTime);

    if (timeDiff <= 0) {
      return null; // Countdown is finished
    }

    const hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeDiff / (1000 * 60)) % 60);
    const seconds = Math.floor((timeDiff / 1000) % 60);

    return { hours, minutes, seconds };
  };
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  const handleTabChange = (id: string) => {
    setTabState((prevState) => ({ ...prevState, activeTabId: id }));
    navigate(tabState.tabs.find((tab) => tab.id === id)?.to || "/");
  };

  useEffect(() => {
    const fetchBalance = async () => {
      console.log("user:", user);
      if (user._id) {
        try {
          console.log(user._id);
          const response = await apiCall(
            "get",
            `http://localhost:3000/api/v1/wallets/user/${user._id}`
          );
          setBalance(response.balance);
        } catch (error) {
          console.error("Error fetching balance:", error);
        }
      }
    };

    const fetchLiveBookings = async () => {
      try {
        const response: any = await post("/rent/getlivebooking", {
          user_id: user._id,
          is_user: !user.isGmater,
        });
        console.log("live bookings:", response);
        setLiveBookings(response.data.booking[0]);
        console.log("live bookings time:", response.data.booking[0].timeEnd);
        if (response.data.booking[0].timeEnd) {
          dueTime = new Date(response.data.booking[0].timeEnd);
        }

        const interval = setInterval(() => {
          const newTimeLeft = calculateTimeLeft();
          if (newTimeLeft === null) {
            clearInterval(interval);
            setTimeLeft(null); // Stop the countdown when finished
          } else {
            setTimeLeft(newTimeLeft);
          }
        }, 1000); // Update every second
        return () => clearInterval(interval);
      } catch (error) {
        console.error("Error fetching live bookings:", error);
      }
    };

    fetchBalance();
    if (user._id) fetchLiveBookings();
  }, [user._id]);

  const openChatBox = () => setIsChatBoxOpen(true);
  const closeChatBox = () => setIsChatBoxOpen(false);
  const handleOpenPaymentModal = () => setShowPaymentModal(true);
  const handleClosePaymentModal = () => setShowPaymentModal(false);
  const handleOpenWithdrawModal = () => setShowWithdrawModal(true);
  const handleCloseWithdrawModal = () => setShowWithdrawModal(false);

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
                <h1 className="font-suez text-black text-xl ml-2">
                  {balance.toLocaleString()} đ
                </h1>
                <button className="ml-4" onClick={handleOpenPaymentModal}>
                  <FiPlusCircle className="text-4xl text-red-400 hover:text-red-600" />
                </button>
                <button className="ml-2" onClick={handleOpenWithdrawModal}>
                  <PiHandWithdrawDuotone className="text-4xl text-green-400 hover:text-green-600" />
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
                  src={user.avatar}
                  alt="Player"
                  className="w-20 h-20 rounded-full ml-4 border-3 border-primary"
                />
              </button>
            </div>
          )}
        </div>
      </nav>
      <PaymentModal show={showPaymentModal} onClose={handleClosePaymentModal} />
      <WithdrawModal
        show={showWithdrawModal}
        onClose={handleCloseWithdrawModal}
      />
      <ChatBox isOpen={isChatBoxOpen} onClose={closeChatBox} />
      <div className="flex flex-1 justify-end">
        {timeLeft ? (
          <p>{`${timeLeft.hours} hours ${timeLeft.minutes} minutes ${timeLeft.seconds} seconds left`}</p>
        ) : (
          <p>Time's up!</p>
        )}
      </div>
    </>
  );
};

export default Navbar;
