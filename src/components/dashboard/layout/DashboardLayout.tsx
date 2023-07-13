import React from 'react';
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import {Outlet} from "react-router-dom";

const DashboardLayout = () => {
    return (
        <>
            <div className="container-fluid">
                <Navbar/>
                <div className="row">
                    <Sidebar/>
                    <Outlet/>
                </div>
            </div>
        </>
    );
};

export default DashboardLayout;