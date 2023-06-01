import * as ActionType from "./screenType";

const initialState = {
    screen: [],
    seat : []
};
export const screenReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_MOVIE_SCREEN:
            return {
                ...state,
                screen: action.payload,
            };

            case ActionType.GET_SEAT_ARRANGEMENT:
            return {
                ...state,
                seat: action.payload,
            };

            case ActionType.UPDATE_SEAT_ARRANGEMENT:
                return{
                    ...state,
                    seat: action.payload
                }


        default:
            return state;
    }
};
