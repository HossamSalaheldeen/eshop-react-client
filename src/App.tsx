import React from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import DashboardLayout from "./components/dashboard/layout/DashboardLayout";
import Login from "./components/auth/Login";
import Home from "./components/dashboard/layout/Home";
import UsersList from "./components/dashboard/users/UsersList";
import RolesList from "./components/dashboard/roles/RolesList";
import ProductsList from "./components/dashboard/products/ProductsList";
import AuthLayout from "./components/auth/AuthLayout";
import Register from "./components/auth/Register";

function App() {
    return (
        <Routes>
            <Route path="dashboard" element={<DashboardLayout/>}>
                <Route index element={<Home/>}/>
                <Route path="roles" element={<RolesList/>}/>
                <Route path="users" element={<UsersList/>}/>
                <Route path="products" element={<ProductsList/>}/>
            </Route>
            <Route path="auth" element={<AuthLayout/>}>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
            </Route>
        </Routes>
    );
}

export default App;
