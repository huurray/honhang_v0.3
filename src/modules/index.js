import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import search from './search';
import input from './input';
import listAll from './listAll';
import status from './status';
import user from './user';

export default combineReducers({
  input,
  search,
  listAll,
  status,
  user,
  pender: penderReducer
});