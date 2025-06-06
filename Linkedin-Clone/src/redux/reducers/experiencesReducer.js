import { SET_EXPERIENCES, ADD_EXPERIENCE, UPDATE_EXPERIENCE, SET_EXPERIENCES_ERROR, SET_EXPERIENCES_LOADING } from "../actions";

const initialState = {
  content: [],
  isLoading: false,
  error: null,
};

const experiencesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_EXPERIENCES:
      return { ...state, content: action.payload, isLoading: false, error: null };

    case ADD_EXPERIENCE:
      return { ...state, content: [...state.content, action.payload], isLoading: false, error: null };

    case UPDATE_EXPERIENCE:
      return {
        ...state,
        content: state.content.map((exp) => (exp._id === action.payload._id ? action.payload : exp)),
        isLoading: false,
        error: null,
      };

    case SET_EXPERIENCES_LOADING:
      return { ...state, isLoading: action.payload };

    case SET_EXPERIENCES_ERROR:
      return { ...state, error: action.payload, isLoading: false };

    default:
      return state;
  }
};

export default experiencesReducer;
