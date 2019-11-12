import { SET_HOME_PENDING, SET_HOME_SUCCESS, SET_HOME_ERROR, SET_HOME_DATA } from './Constants';

const initialState = {
  homeData: [],
  isHomeSuccess: false,
  isHomePending: false,
  homeError: null
};
export default function homeReducer(state = initialState, action) {
  switch (action.type) {
    case SET_HOME_PENDING:
      console.log("SET_HOME_PENDING REDUCER");
      return Object.assign({}, state, {
        isHomePending: action.isHomePending
      });

    case SET_HOME_SUCCESS:
      console.log("SET_HOME_SUCCESS REDUCER");
      return Object.assign({}, state, {
        isHomeSuccess: action.isHomeSuccess
      });

    case SET_HOME_ERROR:
      console.log("SET_HOME_ERROR REDUCER");
      return Object.assign({}, state, {
        aboutError: action.aboutError
      });

    case SET_HOME_DATA:
        console.log("SET_HOME_DATA REDUCER");
      return {
        ...state,
        homeData: [...state.homeData, action.homeData]
      }

    default:
      return state;
  }
}