import React from 'react';
import { NavLink } from "react-router-dom";
import { shopRoute, deviceRoute, basketRoute } from '../routes';
import UserPanel from './UserPanel';
import './Navigation.scss';

export interface INavigationProps {};

function onPressed() {
    console.log('pressed')
}

const Navigation: React.FC<INavigationProps> = () => {
    return (
        <div className='navbar_wrapper'>
            <div className='navigation_wrapper'>
                <NavLink to={shopRoute.path}>Главная</NavLink>
            </div>
            <div className='userPanel_wrapper'>
                <UserPanel />
            </div>
        </div>
    )
}

export default Navigation;