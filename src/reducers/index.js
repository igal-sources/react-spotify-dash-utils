import currentUser from "./currentUser";
import tokenReducer from "./tokenReducer";
import artistsReducer from "./artistsReducer";
import uiReducer from "./uiReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser,
  tokenReducer,
  artistsReducer,
  uiReducer
});

export default rootReducer;
