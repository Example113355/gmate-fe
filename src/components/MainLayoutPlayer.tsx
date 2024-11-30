import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { useState } from "react";
import { TabState } from "./tabs/interface"

const MainLayoutPlayer = () => {
    const [tabState, setTabState] = useState<TabState>({
        activeTabId: "1",

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
