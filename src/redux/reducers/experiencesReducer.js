import { ADD_EXPERIENCES_BY_ID, GET_EXPERIENCES_BY_ID, SET_ADD_EXPERIENCES_ERROR, SET_EXPERIENCES_ERROR } from "../actions";

const initialState = {
  content: [],
  error: null,
  isLoading: false,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_EXPERIENCES_BY_ID:
      return {
        ...state,
        content: [...state.content, action.payload],
        error: null,
        isLoading: false,
      };
    case SET_ADD_EXPERIENCES_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    case GET_EXPERIENCES_BY_ID:
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
