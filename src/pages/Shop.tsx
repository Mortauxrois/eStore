import React from 'react';
import { useDispatch } from 'react-redux';
import { setUser, clearUser } from '../store/actions/userActions'; 

export interface IShopProps {};


const Shop: React.FC<IShopProps> = () => {
    const dispatch = useDispatch();

    const onLogin = () => {
        dispatch(setUser(true, 'Вася'));
    }

    const onRelogin = () => {
        dispatch(clearUser());
    }

    return (
        <div>
            <button onClick={onLogin} > Тест залогинить пользователя</button>
            <button onClick={onRelogin} > Разлогинить</button>
        </div>
    );
};

export default Shop;