import currentUser from "./currentUser";
import tokenReducer from "./tokenReducer";
import artistsReducer from "./artistsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser,
  tokenReducer,
  artistsReducer
});

export default rootReducer;
