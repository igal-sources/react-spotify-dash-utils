import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";
import artistsReducer from "./artistsReducer";
import uiReducer from "./uiReducer";
import songsReducer from "./songsReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  userReducer,
  tokenReducer,
  artistsReducer,
  uiReducer,
  songsReducer
});

export default rootReducer;
