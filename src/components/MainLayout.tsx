import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useState } from "react";
import { TabState } from "./tabs/interface"

const MainLayout = () => {
    const [tabState, setTabState] = useState<TabState>({
        activeTabId: "1",
        tabs: [
            { id: "1", title: "Trang chủ", to: "/" },
            { id: "2", title: "Trở thành GMater", to: "/user-homepage" },
            { id: "3", title: "Cài đặt", to: "/settings" },
        ],
    });
    return (
        <div className="">
            <Navbar tabState={tabState} setTabState={setTabState} />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout
