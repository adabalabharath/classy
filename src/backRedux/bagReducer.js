import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
  USER_FAILURE,
  USER_REQUEST,
} from "./actionType";

const initialState = {
  user: [],
  error: false,
  loading: false,
};
export const bagReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        loading: false,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        user: [],
        loading: false,
      };
    case USER_FAILURE:
      return {
        ...state,
        error: true,
        user: [],
      };
    case "LOGOUT":
      return {
        ...state,
        error: false,
        user: [],
      };
    case "ADD_BAG":
      return {
        ...state,
        error: false,
        user: action.payload,
      };
    case "REMOVE_BAG":
      return {
        ...state,
        error: false,
        user: action.payload,
      };
    case "BAG_FAILURE":
      return {
        ...state,
        error: true,
      };
    case "ADD_COUNT":
      return {
        ...state,
        error: false,
        user: action.payload,
      };
    default:
      return state;
  }
};
