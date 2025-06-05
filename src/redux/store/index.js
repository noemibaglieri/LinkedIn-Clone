import { configureStore } from "@reduxjs/toolkit";
import myProfileReducer from "../reducers/myProfileReducer";
import allProfilesReducer from "../reducers/allProfilesReducer";

const store = configureStore({
  reducer: {
    myProfileReducer,
    allProfilesReducer,
  },
});

export default store;
