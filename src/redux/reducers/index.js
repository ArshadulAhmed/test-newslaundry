import { combineReducers } from "redux";
import politics_india from "../reducers/loadIndianPoliticsNews";
import messages from '../reducers/messages/messages';
import errors from '../reducers/errors/errors';

export default combineReducers({
  politics_india,
  messages,
  errors,
});
