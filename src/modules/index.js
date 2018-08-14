import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import search from './search';
import input from './input';
import listAll from './listAll';
import status from './status';

export default combineReducers({
  input,
  search,
  listAll,
  status,
  pender: penderReducer
});