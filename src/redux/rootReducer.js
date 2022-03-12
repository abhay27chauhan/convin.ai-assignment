import { combineReducers } from "redux";
import userCountReducer from "./userCountReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  UserCount: userCountReducer,
  User: userReducer,
});

export default rootReducer;
