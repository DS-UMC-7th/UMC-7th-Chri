import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import './RootLayout.css'; // 스타일을 위한 CSS 파일을 import

const RootLayout = () => {
    return (
        <div className="root-layout">
            <Navbar />
            <div className="main-content">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="outlet">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default RootLayout;
