import axios from "axios";
import { tokenConfig } from "../utils/Configuration";
import { baseURL, apiKey } from "../utils/ApiRequestPaths";
import { returnErrors } from "../utils/messages";
import {
    LOAD_SCIENCE_IN_START,
    LOAD_SCIENCE_IN_SUCCESS,
    LOAD_SCIENCE_IN_FAIL,

} from "../utils/types";

export const loadScienceNews = () => (dispatch, getState) => {
    dispatch({ type: LOAD_SCIENCE_IN_START });
    axios
        .get(`${baseURL}/top-headlines?country=in&category=science&apiKey=${apiKey}`, tokenConfig(getState))

        .then(res => {
            dispatch({
                type: LOAD_SCIENCE_IN_SUCCESS,
                payload: res.data

            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response, err.response));
            dispatch({
                type: LOAD_SCIENCE_IN_FAIL
            });
        });
};