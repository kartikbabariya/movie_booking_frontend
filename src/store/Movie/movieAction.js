import axios from "axios";
import * as ActionType from "./movieType";

export const getMovie = () => (dispatch) => {
    axios
        .get(`movie`)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: ActionType.GET_MOVIE,
                payload: res.data.movie,
            });
        })
        .catch((error) => console.log(error));
};

//Get All Screen of particular Movie
export const getMovieScreen = (movieId) => (dispatch) => {
    console.log("movieId",movieId)
    axios
        .post(`movie/movieWiseScreen/${movieId}`)
        .then((res) => dispatch({ type: ActionType.MOVIE_WISE_SCREEN, payload: res.data.screen }))
        .catch((error) => console.log(error))
}