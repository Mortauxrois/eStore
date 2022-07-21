import { UserActionTypes } from '../redusers/userReduser';

export function setUser(isAuth: boolean, name: string) {
    return {type: UserActionTypes.SET_AUTH, payload: {isAuth, name}}
}

export function clearUser() {
    return {type: UserActionTypes.SET_AUTH, payload: {isAuth: false, name: ''}}
}