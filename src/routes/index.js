import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from '../components/Header/Header';
import Service from '../pages/ServiceAssistant/Service';
import MapPage from '../pages/MapPage/MapPage';
import Schedule from '../pages/Schedule/Schedule';
import Footer from '../components/Footer/Footer';
import CodeFamily from '../pages/code_family/CodeFamily';
import CreateAccount from '../pages/create_account/CreateAccount';
import Login from '../pages/login/Login';
import ConnectionFamily from '../pages/сonnection_family/ConnectionFamily';
import RoleChoice from '../pages/role_choice/RoleChoice';
import ForgotPassword from '../pages/forgot-password/ForgotPassword';
import Home from '../pages/Home/Home'
import '../app/app.scss';

    function Layout() {
        const location = useLocation();
        const hideHeaderOnPages = [
            '/codeFamily',
            '/create-account',
            '/login',
            '/connection-family',
            '/forgot-password',
            '/role-choice'
        ]; // Страницы, на которых не должно быть Header

    return (
        <>
            {!hideHeaderOnPages.includes(location.pathname) && <Header />}
            <Routes>
            <Route path="/service" element={<Service />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/schedule" element={<Schedule />} />

                <Route path="/Footer" element={<Footer />} />
                <Route path="/" element={<Home />} />

                <Route path="/codeFamily" element={<CodeFamily />} />
                <Route path="/create-account" element={<CreateAccount />} />
                <Route path="/login" element={<Login />} />
                <Route path="/connection-family" element={<ConnectionFamily />} />
                <Route path="/role-choice" element={<RoleChoice />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
            </Routes>
        </>
    );
}

export default function App() {
    return (
        <Router>
            <Layout />
        </Router>
    );
}
