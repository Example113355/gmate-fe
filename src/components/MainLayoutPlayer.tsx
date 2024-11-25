import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useState } from "react";
import { TabState } from "./tabs/interface"

const MainLayoutPlayer = () => {
    const [tabState, setTabState] = useState<TabState>({
        activeTabId: "1",
        tabs: [
            { id: "1", title: "Trang chủ", to: "/" },
            { id: "4", title: "Hồ sơ", to: "/player/profile" },
            { id: "5", title: "Thông số", to: "/player/stat" },
            { id: "6", title: "Giá và thời gian", to: "/player/edit" },
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

export default MainLayoutPlayer
