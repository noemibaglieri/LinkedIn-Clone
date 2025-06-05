// redux/reducers/experiencesReducer.js
import { ADD_EXPERIENCES_BY_ID, SET_ADD_EXPERIENCES_ERROR, GET_EXPERIENCES } from "../actions";

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
    default:
      return state;
  }
};

export default experiencesReducer;
