import axios from "axios";
import { tokenConfig } from "../../utils/Configuration";
import { baseURL } from "../../utils/ApiRequestPaths";
import { returnErrors } from "../../utils/messages";
import {
  LOAD_NEWS_IN_START,
  LOAD_NEWS_IN_SUCCESS,
  LOAD_NEWS_IN_FAIL,
} from "../utils/types";

// axios.defaults.xsrfCookieName = 'csrftoken'
// axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const loadIndianPoliticsNews = () => (dispatch, getState) => {
  dispatch({ type: LOAD_NEWS_IN_START });
  axios
    .get(`${baseURL}/api/products/`, tokenConfig(getState))

    .then(res => {
      dispatch({
        type: LOAD_NEWS_IN_SUCCESS,
        payload: res.data

      });
    })
    .catch(err => {
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: LOAD_NEWS_IN_FAIL
      });
    });
};
