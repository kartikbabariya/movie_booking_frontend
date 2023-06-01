import { combineReducers } from "redux";
import { screenReducer } from "./screen/screenReducer";
import { movieReducer } from "./Movie/movieReducer";
import { userReducer } from "./User/userReducer";

export default combineReducers({
  screen: screenReducer,
  movie: movieReducer,
  user : userReducer
});
