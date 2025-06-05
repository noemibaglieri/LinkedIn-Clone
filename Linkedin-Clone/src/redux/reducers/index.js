import { combineReducers } from "redux";
import myProfileReducer from "./myProfileReducer";
import allProfilesReducer from "./allProfilesReducer";
import experiencesReducer from "./experiencesReducer";
import addExperiencesReducer from "./addExperiencesReducer";

const rootReducer = combineReducers({
  myProfileReducer,
  allProfilesReducer,
  experiencesReducer,
  addExperiencesReducer,
});

export default rootReducer;
