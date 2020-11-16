import axios from "axios";
import { tokenConfig } from "../utils/Configuration";
import { baseURL, apiKey } from "../utils/ApiRequestPaths";
import { returnErrors } from "../utils/messages";
import {
    LOAD_FINANCE_IN_START,
    LOAD_FINANCE_IN_SUCCESS,
    LOAD_FINANCE_IN_FAIL,

} from "../utils/types";

export const loadFinanceNews = () => (dispatch, getState) => {
    dispatch({ type: LOAD_FINANCE_IN_START });
    axios
        .get(`${baseURL}/top-headlines?country=in&category=finance&apiKey=${apiKey}`, tokenConfig(getState))

        .then(res => {
            dispatch({
                type: LOAD_FINANCE_IN_SUCCESS,
                payload: res.data

            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response, err.response));
            dispatch({
                type: LOAD_FINANCE_IN_FAIL
            });
        });
};