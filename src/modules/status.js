import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import { pender } from 'redux-pender';
import firebase from 'firebase';

function getStatusAuth() {
  return new Promise(resolve => {
    firebase.auth().onAuthStateChanged(function(user) {
      let status = "";
      if (user) {
        status = '로그아웃';
      } else {
        status = '로그인';
      }
      resolve(status);
    });
  });
}

//action
const STATUS_LOGIN = 'status/LOGIN';
export const isLogin = createAction(STATUS_LOGIN, getStatusAuth);

//reducer
const initialState = Map({
  loginStatus: '로그인',
  loading: false
});

export default handleActions(
  {
    ...pender({
      type: STATUS_LOGIN,
      onPending: (state, action) => {
        return state.set('loading', true);
      },
      onSuccess: (state, action) => {
        return state.set('loginStatus', action.payload).set('loading', false);
      }
    })
  },
  initialState
);
