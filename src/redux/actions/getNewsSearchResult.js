import axios from "axios";
import { tokenConfig } from "../utils/Configuration";
import { baseURL, apiKey } from "../utils/ApiRequestPaths";
import { returnErrors } from "../utils/messages";
import {
    LOAD_SEARCH_IN_START,
    LOAD_SEARCH_IN_SUCCESS,
    LOAD_SEARCH_IN_FAIL,

} from "../utils/types";


//https://newsapi.org/v2/everything?q=bitcoin&apiKey=176cb9bb96f84613b55b80209f303ddf


export const getNewsSearchResult = (parameter) => (dispatch, getState) => {

    console.log('Param', parameter)

    dispatch({ type: LOAD_SEARCH_IN_START });
    axios
        .get(`${baseURL}/everything?q=${parameter}&apiKey=${apiKey}`, tokenConfig(getState))

        .then(res => {
            dispatch({
                type: LOAD_SEARCH_IN_SUCCESS,
                payload: res.data

            });
        })
        .catch(err => {
            dispatch(returnErrors(err.response, err.response));
            dispatch({
                type: LOAD_SEARCH_IN_FAIL
            });
        });
};

export const clearSearchHistory = () => (dispatch) => {
    dispatch({
        type: 'CLEAR_ALL_SEARCH_RESULT'
    })
}