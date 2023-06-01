import axios from "axios";
import * as ActionType from "./userType";
import { Navigate } from "react-router-dom";
// import { setToast } from "../../utils/Toast";

//Login User
export const loginUser = (data) => (dispatch) => {
    console.log("data", data)
    axios.post("/user/login", data).then((res) => {
        console.log("res", res)
        dispatch({
            type: ActionType.LOGIN_USER,
            payload: res.data.user,
        })
        // if (res.data.status) {
        //     alert(res.data.message)
        //     // setTimeout(() => {
        //     //     window.location.assign("/");
        //     // }, 3000)
        // } else {
        //     alert(res.data.message)
        // }
    }).catch((error) => console.log(error))
}

export const signUpUser = (data) => (dispatch) => {
    console.log(data)
    axios
        .post(`user`, data)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: ActionType.SIGN_UP_USER,
                payload: res.data.user,
            });

            if (res.data.status) {
                alert(res.data.message)
                // setToast("success", res.data.message)
                setTimeout(() => {
                    window.location.assign("/login");
                }, 3000)
            } else {
                alert(res.data.message)
                // setToast("error", res.data.message)
                // setToast("success", "Notification sent successfully!");
            }

        })
        .catch((error) => console.log(error));
};
