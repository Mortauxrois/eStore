import React from 'react';
import { NavLink } from "react-router-dom";
import './UserPanel.scss';
import { useTypedSelector } from '../hooks/useTypedSelector';


export interface IUserPanelProps {};

function onPressed() {
    console.log('pressed')
}

const UserPanel: React.FC<IUserPanelProps> = () => {
    const { isAuth, userFriendlyName } = useTypedSelector(state => state.user);
    console.log(userFriendlyName)
    return (
            <div className='userPanel_wrapper'>
                {isAuth ?
                    <div>
                        <span className='userName'>{userFriendlyName}</span>
                        <button className='signBtn' onClick={onPressed}>Выход</button>
                    </div>
                    :
                    <button className='signBtn signBtn_large' onClick={onPressed}>Вход/Регистрация</button>
                }
            </div>
    )
}

export default UserPanel;
