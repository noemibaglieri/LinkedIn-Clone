import { GET_MY_PROFILE, GET_PROFILE_BY_ID, SET_MY_PROFILE_ERROR } from "../actions";

const initialState = {
  content: null,
  error: null,
  isLoading: false,
};

const myProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MY_PROFILE:
    case GET_PROFILE_BY_ID:
      return {
        ...state,
        content: action.payload,
        error: null,
        isLoading: false,
      };
    case SET_MY_PROFILE_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default myProfileReducer;
