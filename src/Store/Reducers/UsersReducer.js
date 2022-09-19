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
  CREATE_RECORD,
  CREATE_RECORD_SUCCESS,
  CREATE_RECORD_FAIL,
} from "../Types";

const initialState = {
  users: [],
  user: {},
  createLoading: false,
  createErr: "",
  loading: false,
  err: "",
  deleteLoading: false,
  deleteErr: "",
  editLoading: false,
  editErr: "",
};

export default function UsersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action?.payload,
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        err: action.err,
      };
    case DELETE_USER:
      return {
        ...state,
        deleteLoading: true,
        err: initialState.err,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        deleteLoading: false,
        deleteErr: action.err,
      };
    case EDIT_USER:
      return {
        ...state,
        editLoading: false,
        createErr: initialState.createErr,
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        editLoading: false,
      };
    case EDIT_USER_FAIL:
      return {
        ...state,
        editLoading: false,
        editErr: action.err,
      };
    case SAVE_USER:
      return {
        ...state,
        editLoading: true,
        createErr: initialState.createErr,
      };
    case SAVE_USER_SUCCESS:
      return {
        ...state,
        user: action.user,
        editLoading: false,
      };
    case SAVE_USER_FAIL:
      return {
        ...state,
        editLoading: false,
        editErr: action.err,
      };
    case CREATE_RECORD:
      return {
        ...state,
        createLoading: true,
        createErr: initialState.createErr,
      };
    case CREATE_RECORD_SUCCESS:
      return {
        ...state,
        user: action.user,
        createLoading: false,
      };
    case CREATE_RECORD_FAIL:
      return {
        ...state,
        createLoading: false,
        createErr: action.err,
      };
    default:
      return state;
  }
}
