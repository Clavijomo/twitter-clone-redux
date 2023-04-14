import {combineReducers} from "redux";
import alertaReducer from "./alertaReducer";
import tweetsReducer from "./tweetsReducer";

export default combineReducers({
  tweets: tweetsReducer,
  alerta: alertaReducer,
});