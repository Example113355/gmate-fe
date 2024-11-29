import { Outlet } from "react-router-dom";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useEffect, useState } from "react";
import { TabState } from "./tabs/interface";
import { useUser } from "../contexts/UserContext";

const MainLayout = () => {
  const { user, setUser } = useUser();
  const [tabState, setTabState] = useState<TabState>({
    activeTabId: "1",
    tabs: [
      { id: "1", title: "Trang chủ", to: "/" },
      { id: "2", title: "Trở thành GMater", to: "/user-homepage" },
      { id: "3", title: "Cài đặt", to: "/settings" },
    ],
  });
  useEffect(() => {
    if (user.email === "") {
      //get user from local storage
      const newUser = localStorage.getItem("user");
      if (newUser) {
        setUser(JSON.parse(newUser));
      }
      console.log("user", newUser);
    }
  }, []);
  const onLogout = () => {
    setUser({
        _id: '',
        firstName: '',
        lastName: '',
        gender: '',
        dateOfBirth: new Date(),
        isGmater: false,
        avatar: '',
        email: '',
        password: '',
        isProfileCompleted: false,
        createdAt: new Date(),
        updatedAt: new Date(),
        __v: 0,
    });
    localStorage.removeItem('user');
    localStorage.removeItem('accessToken');
    console.log('logout')

    
  }
  return (
    <div className="">
      <Navbar tabState={tabState} setTabState={setTabState} onLogout = {onLogout} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
