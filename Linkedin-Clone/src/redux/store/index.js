import { configureStore } from "@reduxjs/toolkit";
import myProfileReducer from "../reducers/myProfileReducer";
import allProfilesReducer from "../reducers/allProfilesReducer";
import experiencesReducer from "../reducers/experiencesReducer";

const store = configureStore({
  reducer: {
    myProfileReducer,
    experiencesReducer,
    allProfilesReducer,
  },
});

export default store;
