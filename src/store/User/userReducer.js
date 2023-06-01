import * as ActionType from "./userType";

const initialState = {
    user: {},
    isAuth: false
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.SIGN_UP_USER:
            return {
                ...state,
                user: action.payload,
            };

        case ActionType.LOGIN_USER:
            debugger;
            sessionStorage.setItem("isAuth", true);
            return {
                ...state,
                user: action.payload,
                isAuth: true
            }

        case ActionType.LOG_OUT_USER:
            return {
                ...state,
                user: {},
                isAuth: false
            }

        default:
            return state;
    }
};
