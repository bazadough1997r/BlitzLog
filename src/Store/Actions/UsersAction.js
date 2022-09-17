  import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
  } from "../Types";
  
  import {
    FetchUsers,
  } from "../Services";
  
  export const GetUsers = () => async (dispatch) => {
    dispatch({
      type: GET_USERS,
    });
    try {
      const data = await FetchUsers();
      dispatch({
        type: GET_USERS_SUCCESS,
        payload: data,
      });
    } catch (err) {
      dispatch({
        type: GET_USERS_FAIL,
        err: "Cannot fetch users!",
      });
    }
  };