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
} from "../Types";

const initialState = {
  users: [],
  user: {},
  createLoad: false,
  createErr: "",
  loading: false,
  err: "",
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
        page: action.page,
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
        loading: false,
        err: initialState.err,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER_FAIL:
      return {
        ...state,
        loading: false,
        err: action.err,
      };
      case EDIT_USER:
        return {
          ...state,
          createLoad: true,
          createErr: initialState.createErr,
        };
      case EDIT_USER_SUCCESS:
        return {
          ...state,
          user: action.user,
          createLoad: false,
        };
      case EDIT_USER_FAIL:
        return {
          ...state,
          createLoad: false,
          createErr: action.err,
        };
    default:
      return state;
  }
}
