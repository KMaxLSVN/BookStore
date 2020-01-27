import { userConstants } from "../types/ActionsTypes";
import { IUser } from "../../shared/models/user.model";
import { IUserData } from "../../shared/models/user-data.model";
import { CurrentUserAction } from "../actions/user.actions";

const initialState = {
    loggedIn: false,
    userInfo: {
        jwt: '',
        refreshToken: '',
        user: {
            userId: '',
            userName: '',
            userEmail: '',
            userPassword: '',
            userRole: '',
            userPhoto: '',
        } as IUserData
    } as IUser
};

export type AuthenticateState = typeof initialState;

const AuthenticateReducer = (state: AuthenticateState = initialState, action: CurrentUserAction) => {
    switch (action.type) {
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loggedIn: true,
                userInfo: action.user
            };
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loggedIn: false,
            };
        case userConstants.LOGOUT:
            return {
                ...state,
                loggedIn: false,
            };
        default:
            return state;
    }
}

export default AuthenticateReducer;