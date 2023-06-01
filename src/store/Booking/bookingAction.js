import axios from "axios";
import * as ActionType from "../screen/screenType";

export const bookMovie = (data) => (dispatch) => {
    axios
        .post(`booking`, data)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: ActionType.UPDATE_SEAT_ARRANGEMENT,
                payload: res.data.screen,
            });
        })
        .catch((error) => console.log(error));
};