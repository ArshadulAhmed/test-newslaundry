import axios from "axios";
import { tokenConfig } from "../utils/Configuration";
import { baseURL, apiKey } from "../utils/ApiRequestPaths";
import { returnErrors } from "../utils/messages";
import {
    LOAD_LIFESTYLE_IN_START,
    LOAD_LIFESTYLE_IN_SUCCESS,
    LOAD_LIFESTYLE_IN_FAIL,

} from "../utils/types";

export const loadLifeStyleNews = () => (dispatch, getState) => {
    dispatch({ type: LOAD_LIFESTYLE_IN_START });
    axios
        .get(`${baseURL}/top-headlines?country=in&category=health&apiKey=${apiKey}`, tokenConfig(getState))

        .then(res => {
            dispatch({
                type: LOAD_LIFESTYLE_IN_SUCCESS,
                payload: res.data

            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response, err.response));
            dispatch({
                type: LOAD_LIFESTYLE_IN_FAIL
            });
        });
};