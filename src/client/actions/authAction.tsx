// Import actionType constants
import {
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_SUCCESS,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
} from '../constants/actionType';

export const loginSuccess = (data:any) => {
    return {
        type: LOG_IN_SUCCESS,
        data
    };
};

export const loginFailure = (error:any) => {
    return {
        type: LOG_IN_FAILURE,
        error
    };
};

export const logoutSuccess = () => {
    return {
        type: LOG_OUT_SUCCESS
    };
};

export const signupSuccess = (data:any) => {
    return {
        type: SIGN_UP_SUCCESS,
        data
    };
};

export const signupFailure = (error:any) => {
    return {
        type: SIGN_UP_FAILURE,
        error
    };
};