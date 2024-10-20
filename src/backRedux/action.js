import axios from "axios";
import { LOGIN_FAILURE, LOGIN_SUCCESS, USER_FAILURE } from "./actionType";
import { Alert } from "@mui/material";

export const loginUser = (creds) => async (dispatch) => {
  try {
    let post = await axios.post("http://localhost:7777/login", creds, {
      withCredentials: true,
    });
    if (post.data.user) {
      dispatch({ type: LOGIN_SUCCESS, payload: post.data });
    } else {
      dispatch({ type: LOGIN_FAILURE });
    }
  } catch (err) {
    dispatch({ type: USER_FAILURE });
    console.log(err.message);
  }
};

export const logoutUser = async (dispatch) => {
  try {
    await axios.post("http://localhost:7777/logout", {
      withCredentials: true,
    });
    dispatch({ type: "LOGOUT" });
  } catch (err) {
    dispatch({ type: USER_FAILURE });
    alert("couldnt logout", err.msg);
  }
};

export const addToBag = (item) => async (dispatch) => {
  try {
    let post = await axios.post("http://localhost:7777/addbag", item, {
      withCredentials: true,
    });
    if (post.data.user) {
      dispatch({ type: "ADD_BAG", payload: post.data });
      
    }
  } catch (err) {
    dispatch({ type: 'BAG_FAILURE' });
  }
};

export const removeBag = (name, type, count) => async (dispatch) => {
  try {
    const url = count
      ? `http://localhost:7777/${type}/${name}/${count}`
      : `http://localhost:7777/${type}/${name}`;
    let post = await axios.patch(
      url,
      {},
      {
        withCredentials: true,
      }
    );
    if (post.data.user) {
      dispatch({ type: "REMOVE_BAG", payload: post.data });
    }
  } catch (err) {
    console.log("couldnt remove : ", err.message);
  }
};
