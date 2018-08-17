import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';
import { pender } from 'redux-pender';

function searchFunc(value) {
  return new Promise(resolve => {
    console.log(value)
    resolve(value);
  });
}

//action
const SEARCH = 'search/SEARCH';
export const search = createAction(SEARCH, searchFunc);

//reducer
const initialState = Map({
  searchValue: ""
})

export default handleActions(
  {
    ...pender({
      type: SEARCH,
      onSuccess: (state, action) => {
        return state.set('searchValue', action.payload);
      }
    })
  },
  initialState
);