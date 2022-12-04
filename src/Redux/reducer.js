import { combineReducers } from "redux";
import uiReducer from "./Reducers/uiReducer";

const appReducer = combineReducers({
  uiReducer,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
