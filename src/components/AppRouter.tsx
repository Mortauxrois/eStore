import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { authRoutes, publicRoutes, shopRoute } from '../routes';

const AppRouter: React.FC = () => {
    const isAuth = true;
    return (
        <Routes>
            { isAuth && authRoutes.map(({path, Component}) => 
                <Route key = {path} path = {path} element = {Component}></Route>)
            }
            { publicRoutes.map(({path, Component}) => 
                <Route key = {path} path = {path} element = {Component}></Route>)
            }
            <Route key = {shopRoute.path} path = {shopRoute.path} element = {shopRoute.Component}></Route>
        </Routes>
    );
};

export default AppRouter;