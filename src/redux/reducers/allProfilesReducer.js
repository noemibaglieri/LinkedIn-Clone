import { GET_USER_PROFILES, SET_USER_PROFILES_ERROR } from "../actions";

const initialState = {
  content: null,
  error: null,
  isLoading: false,
};

const allProfilesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_PROFILES:
      return {
        ...state,
        content: action.payload,
        error: null,
        isLoading: false,
      };
    case SET_USER_PROFILES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default allProfilesReducer;
