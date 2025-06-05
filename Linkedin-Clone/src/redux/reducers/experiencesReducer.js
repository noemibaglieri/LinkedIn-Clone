import { GET_EXPERIENCES, SET_EXPERIENCES_ERROR } from "../actions";

const initialState = {
  content: [],
  error: null,
  isLoading: false,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        content: action.payload,
        error: null,
        isLoading: false,
      };
    case SET_EXPERIENCES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default experiencesReducer;
