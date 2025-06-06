import { configureStore } from "@reduxjs/toolkit";
import myProfileReducer from "../reducers/myProfileReducer";
import allProfilesReducer from "../reducers/allProfilesReducer";
import experiencesReducer from "../reducers/experiencesReducer";
import postsReducer from "../reducers/postsReducer";

const store = configureStore({
  reducer: {
    myProfileReducer,
    experiencesReducer,
    allProfilesReducer,

    postsReducer,
  },
});

export default store;
