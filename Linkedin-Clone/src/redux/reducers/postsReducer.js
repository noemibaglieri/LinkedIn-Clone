import { GET_POSTS, SET_POSTS_ERROR } from "../actions";

const initialState = {
  content: [],
  error: null,
  isLoading: true,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return {
        ...state,
        content: action.payload,
        error: null,
        isLoading: false,
      };
    case SET_POSTS_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default postsReducer;
