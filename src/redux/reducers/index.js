import { combineReducers } from "redux";
import topnews_india from "../reducers/loadIndianTopNews";

import politics_india from "../reducers/loadIndianPoliticsNews";
import entertainment_india from '../reducers/loadEntairtaimentNews'


import sports_india from "../reducers/loadSportsNews";
import finance_india from '../reducers/loadFinanceNews';

import technology_india from '../reducers/loadTechnologyNews';
import lifestyle_india from '../reducers/loadLifeStyleNews';

import messages from '../reducers/messages/messages';
import errors from '../reducers/errors/errors';

export default combineReducers({
  topnews_india,
  politics_india,
  entertainment_india,
  sports_india,
  finance_india,
  technology_india,
  lifestyle_india,
  messages,
  errors,
});
