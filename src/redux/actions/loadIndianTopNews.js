import axios from "axios";
import { tokenConfig } from "../utils/Configuration";
import { baseURL, apiKey } from "../utils/ApiRequestPaths";
import { returnErrors } from "../utils/messages";
import {
  LOAD_NEWS_IN_START,
  LOAD_NEWS_IN_SUCCESS,
  LOAD_NEWS_IN_FAIL,

} from "../utils/types";

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken' https://newsapi.org/v2/top-headlines?country=us&apiKey=176cb9bb96f84613b55b80209f303ddf
// https://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=176cb9bb96f84613b55b80209f303ddf

export const loadIndianTopNews = () => (dispatch, getState) => {
  dispatch({ type: LOAD_NEWS_IN_START });
  axios
    .get(`${baseURL}/top-headlines?country=in&apiKey=${apiKey}`, tokenConfig(getState))

    .then(res => {

      console.log("Res", res.data);

      dispatch({
        type: LOAD_NEWS_IN_SUCCESS,
        payload: res.data

      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response, err.response));
      dispatch({
        type: LOAD_NEWS_IN_FAIL
      });
    });
};

