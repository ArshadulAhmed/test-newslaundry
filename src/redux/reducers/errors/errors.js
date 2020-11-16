import { GET_ERRORS, CLEAR_ERROR } from "../../utils/types";

const initialState = {
    msg: {},
    status: null

};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ERRORS:
            return {
                msg: action.payload.msg,
                status: action.payload.status
            };
        case CLEAR_ERROR:
            return {
                ...state,
                msg: {},
                status: null
            }

        default:
            return state;
    }
}