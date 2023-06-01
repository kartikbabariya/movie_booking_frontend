import * as ActionType from "./bookingType";

const initialState = {
    booking: [],
    movieScreen : []
};
export const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.GET_MOVIE:
            return {
                ...state,
                movie: action.payload,
            };
            
        case ActionType.MOVIE_WISE_SCREEN:
            return {
                ...state,
                movieScreen: action.payload,
            };

        default:
            return state;
    }
};
