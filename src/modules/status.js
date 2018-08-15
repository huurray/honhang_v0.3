import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import firebase from 'firebase';

function getStatusAuth() {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(function(user) {
      let state = "";
      if (user) {
        state = '로그아웃';
      } else {
        state = '로그인';
      }
      resolve(state);
    });
  });
}

//action
const STATUS_LOGIN = 'status/LOGIN';
export const isLogin = createAction(STATUS_LOGIN, getStatusAuth);

//reducer
const initialState = Map({
  loginStatus: '로그인'
});

export default handleActions(
  {
    ...pender({
      type: STATUS_LOGIN,
      onSuccess: (state, action) => {
        return state.set('loginStatus', action.payload);
      }
    })
  },
  initialState
);
