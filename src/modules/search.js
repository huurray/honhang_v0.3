import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

//action
const SEARCH = 'search/SEARCH';
export const search = createAction(SEARCH);

//reducer
const initialState = Map({
  searchValue: "에펠탑"
})

export default handleActions({
  [SEARCH]: (state, action) => {
    return state.set('searchValue', action.payload)
  }
}, initialState);