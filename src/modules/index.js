import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import search from './search';
import input from './input';

export default combineReducers({
  input,
  search,
  pender: penderReducer
});