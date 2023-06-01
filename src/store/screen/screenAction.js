import axios from "axios";
import * as ActionType from "./screenType";

export const getMovieScreen = () => (dispatch) => {
  axios
    .get(`screen`)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: ActionType.GET_MOVIE_SCREEN,
        payload: res.data.screen,
      });
    })
    .catch((error) => console.log(error));
};


//Get Screen And Movie Wise Arrangement
export const getScreenArrangement = (screenId) => (dispatch) => {
  axios
    .post(`screen/${screenId}`)
    .then((res) => {
      dispatch({ type: ActionType.GET_SEAT_ARRANGEMENT, payload: res.data.screen })
    }).catch((error) => console.log(error))
}