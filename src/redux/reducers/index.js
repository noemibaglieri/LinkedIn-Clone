import { combineReducers } from "redux";
import myProfileReducer from "./myProfileReducer";
import allProfilesReducer from "./allProfilesReducer";

const rootReducer = combineReducers({
  myProfileReducer,
  allProfilesReducer,
});

export default rootReducer;
