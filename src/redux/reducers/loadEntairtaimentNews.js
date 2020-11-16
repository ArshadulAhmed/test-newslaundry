import {
    LOAD_ENT_IN_START,
    LOAD_ENT_IN_SUCCESS,
    LOAD_ENT_IN_FAIL,
} from "../utils/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_ENT_IN_START:
            return {
                ...state,
                ...action.payload,
                isLoading: true,
            };

        case LOAD_ENT_IN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        case LOAD_ENT_IN_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        default:
            return state;
    }
}
