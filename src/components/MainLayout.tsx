import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Navbar from "../components/navbar"

const MainLayout = () => {
    return (
        <div className="">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}

export default MainLayout