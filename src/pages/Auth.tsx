import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';

export interface IAuthProps {};

const Auth: React.FC<IAuthProps> = () => {
    const { user } = useTypedSelector(state => state);
    return (
        <div>
            Authm panel
        </div>
    );
};

export default Auth;