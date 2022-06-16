import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login';
import DashboardRouters from './DashboardRouters';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

const AppRouters = () => {

    const user = false

    return (
        <BrowserRouter>

            <Routes>

                <Route path="/login" element={
                    <PublicRouter isAutentication={user}>
                        <Login />
                    </PublicRouter>

                } />

                
                <Route path="/*" element={
                    <PrivateRouter isAutentication={user}>
                        <DashboardRouters />
                    </PrivateRouter>
                } />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouters;