import { SET_HOME_ERROR, SET_HOME_SUCCESS, SET_HOME_PENDING, SET_HOME_DATA } from './Constants';

export function home(item) {
    console.log("home",item);
    return dispatch => {
        dispatch(setHomeSuccess(false));
        dispatch(setHomePending(true));
        dispatch(setHomeError(null));
        setTimeout(function(){
            dispatch(setHomeData(item));
            dispatch(setHomePending(false));
            dispatch(setHomeSuccess(true));
        },1000);
        
    }
}



function setHomeData(homeData) {
    return {
        type: SET_HOME_DATA,
        homeData
    };
}

function setHomePending(isHomePending) {
    return {
        type: SET_HOME_PENDING,
        isHomePending
    };
}

function setHomeSuccess(isHomeSuccess) {
    return {
        type: SET_HOME_SUCCESS,
        isHomeSuccess
    };
}

function setHomeError(homeError) {
    return {
        type: SET_HOME_ERROR,
        homeError
    }
}
