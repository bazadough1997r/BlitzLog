import {
  GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAIL,
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
      };
    case GET_USERS_FAIL:
      return {
        ...state,
        loading: false,
        err: action.err,
      };
    default:
      return state;
  }
}
