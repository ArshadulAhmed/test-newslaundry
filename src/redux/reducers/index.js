import { combineReducers } from "redux";
import topnews_india from "../reducers/loadIndianTopNews";

import politics_india from "../reducers/loadIndianPoliticsNews";
import entertainment_india from '../reducers/loadEntairtaimentNews'

import messages from '../reducers/messages/messages';
import errors from '../reducers/errors/errors';

export default combineReducers({
  topnews_india,
  politics_india,
  entertainment_india,
  messages,
  errors,
});
