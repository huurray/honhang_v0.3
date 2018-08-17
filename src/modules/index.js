import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';

import search from './search';
import listAll from './listAll';
import list from './list';
import status from './status';
import user from './user';

export default combineReducers({
  search,
  listAll,
  list,
  status,
  user,
  pender: penderReducer
});