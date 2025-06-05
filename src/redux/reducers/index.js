import { combineReducers } from "redux";
import myProfileReducer from "./myProfileReducer";
import allProfilesReducer from "./allProfilesReducer";
import experiencesReducer from "./experiencesReducer";

const rootReducer = combineReducers({
  myProfileReducer,
  allProfilesReducer,
  experiencesReducer,
});

export default rootReducer;
