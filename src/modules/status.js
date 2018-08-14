import { Map } from 'immutable';
import { handleActions, createAction } from 'redux-actions';
import firebase from 'firebase';

function getStatusAuth() {
  let status = "";
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log("logged in")
      status = "로그아웃";
    } else {
      console.log("not logged in")
      status =  "로그인";
    }
  });
  return status;
}

//action
const STATE_LOGIN = 'state/LOGIN';
export const isLogin = createAction(STATE_LOGIN, getStatusAuth);

//reducer
const initialState = Map({
  loginStatus: "로그인"
});

export default handleActions({
  [STATE_LOGIN]: (state, action) => {
    return state.set('loginStatus', action.payload)
  }
}, initialState);
