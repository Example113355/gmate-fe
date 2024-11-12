import React, { useState } from 'react';
import { Outlet } from "react-router-dom"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Modal from './payment-modal';

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