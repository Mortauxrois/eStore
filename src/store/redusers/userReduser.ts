export enum UserActionTypes{
    SET_AUTH = 'USER/SET_AUTH',
}

interface UserState {
    isAuth: boolean;
    userFriendlyName: string;
}

interface UserAction {
    type: UserActionTypes.SET_AUTH;
    payload?: any;
}

const initialState: UserState = {
    isAuth: false,
    userFriendlyName: '',
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.SET_AUTH:
            return {
                isAuth: action.payload.isAuth,
                userFriendlyName: action.payload.name};
        default: return state;
    }
}