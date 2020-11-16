import {
    LOAD_SEARCH_IN_START,
    LOAD_SEARCH_IN_SUCCESS,
    LOAD_SEARCH_IN_FAIL,
    CLEAR_ALL_SEARCH_RESULT,
} from "../utils/types";

const initialState = {};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_SEARCH_IN_START:
            return {
                ...state,
                ...action.payload,
                isLoading: true,
            };

        case LOAD_SEARCH_IN_SUCCESS:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        case LOAD_SEARCH_IN_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };

        case CLEAR_ALL_SEARCH_RESULT:
            return {
                ...state,
                isLoading: false,
                status: null,
                totalResults: null,
                articles: null

            }

        default:
            return state;
    }
}
