import {Map} from 'immutable';
import {handleActions, createAction} from 'redux-actions';

//action
const INPUT_PLACEKEYWORD = 'input/INPUT';
export const inputPlaceKeyword = createAction(INPUT_PLACEKEYWORD);

//reducer
const initialState = Map({
  placeKeyword: ""
})

export default handleActions({
  [INPUT_PLACEKEYWORD]: (state, action) => {
    return state.set('placeKeyword', action.payload)
  }
}, initialState);