import currentUser from "./currentUser";
import tokenReducer from "./tokenReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser,
  tokenReducer
});

export default rootReducer;
