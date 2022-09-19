import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_FAIL,
  DELETE_USER,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL,
  EDIT_USER,
  EDIT_USER_SUCCESS,
  EDIT_USER_FAIL,
  SAVE_USER,
  SAVE_USER_SUCCESS,
  SAVE_USER_FAIL,
} from "../Types";

import { FetchUsers, DeleteUserService, EditUserService, SaveUpdatesService } from "../Services";

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

export const DeleteUser = (id, deletingDone) => async (dispatch) => {
  dispatch({
    type: DELETE_USER,
  });
  try {
    const data = await DeleteUserService(id);
    dispatch({
      type: DELETE_USER_SUCCESS,
      payload: data,
    });
    deletingDone()
  } catch {
    dispatch({
      type: DELETE_USER_FAIL,
      err: "Cannot Delete User!",
    });
  }
};

export const EditUser = (details) => async (dispatch) => {
  dispatch({
    type: EDIT_USER,
  });
  try {
    const data = await EditUserService(details);
    dispatch({
      type: EDIT_USER_SUCCESS,
      user: data,
    });
  } catch {
    dispatch({
      type: EDIT_USER_FAIL,
      err: "Cannot Edit User!",
    });
  }
};

export const SaveUpdatedUser = (newState, editingDone) => async (dispatch) => {
  dispatch({
    type: SAVE_USER,
  });
  try {
    const data = await SaveUpdatesService(newState);
    dispatch({
      type: SAVE_USER_SUCCESS,
      user: data,
    });
    editingDone()
  } catch {
    dispatch({
      type: SAVE_USER_FAIL,
      err: "Cannot Save User!",
    });
  }
};
